import React, {Component} from 'react';
import {Alert} from 'react-native';
import {
  Wrapper,
  FooterMenu,
  ModalList,
  ListGeneral,
  Loader,
  Error,
  SearchContent
} from '../../components';
import {
  Container,
  ScrollItens,
  Footer,
  CategoryListTitle,
  TitleCategory,
  Row
} from './Styles';
import Api from '../../services/api';
import {bindActionCreators} from 'redux';
import * as categoryActions from '../../config/actions/category';
import * as favoritesActions from '../../config/actions/favorites';
import {connect} from 'react-redux';
import securityKey from '../../services/securityKey';
import {menuFooter} from '../../config/data/menuFooter';
import {doTruncarStr} from '../../utlis/doTruncarStr';

class ListContent extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      itens: [],
      display: false,
      error: false,
      loading: true,
      codeError: '',
      showSearch: false,
      paramSearch: '',
      paramOrder: '',
      titleModalList: ''
    }
  };

  static navigationOptions = {
    header: null
  };

  componentDidMount()
  {
    let initialCallApi = `${this
      .props
      .category
      .urlRefer}?${securityKey
      .urlKey()}`;
    this.apiSubmit(initialCallApi);
  }

  render()
  {
    if (this.state.error) 
      return (
        <Wrapper>
          <Container>
            <Error codeError={this.state.codeError}/>
          </Container>
        </Wrapper>
      );
    
    if (this.state.loading) 
      return (
        <Wrapper>
          <Container>
            <Loader/>
          </Container>
        </Wrapper>
      );
    
    return (
      <Wrapper>
        <Container>
          <CategoryListTitle>
            <TitleCategory>
              {this.props.category.nameCategory}
            </TitleCategory>
          </CategoryListTitle>
          {(this.state.showSearch)
            ? <Row><SearchContent
                parameter={`${this.props.category.paramSearch}`}
                callFunction={this._onPressSearch}/></Row>
            : null
}

          <ScrollItens
            data={this.state.itens}
            keyExtractor={item => item
            .id
            .toString()}
            numColumns={1}
            renderItem={({item}) => {
            return (<ListGeneral
              id={item.id}
              title={item.title}
              subTitle={item.subTitle}
              callFunction={() => this._onPressItemListGeneral(item)}
              imgSrc={item.imgSrc}
              favorite={item.favorite}
              callAddFavorite={this._onPressFavorite}/>)
          }}/>
          <Footer>
            {menuFooter
              .data
              .map((item, i) => {
                return <FooterMenu
                  key={i}
                  nameIcon={item.icon}
                  title={item.title}
                  callFunction={() => this._onPressMenuFooter(item)}/>
              })
}
          </Footer>
        </Container>
        <ModalList
          ref="ModalList"
          title={this.state.titleModalList}
          display={this.state.display}
          itemsOrder={this.props.category.orderBy}
          callFunction={this._onPressFilter}/>
      </Wrapper>
    );
  }

  _onPressMenuFooter(params)
  {
    switch (params.type) {
      case 'HOME_VIEW':
        return this
          .props
          .navigation
          .navigate('Home');
      case 'FILTER_MODAL':
        this.setState({titleModalList: 'SELECT A FILTER'});
        this
          .refs
          .ModalList
          .setModalVisible(true);
        break;
      case 'STAR_MODAL':
        this
          .refs
          .ModalList
          .setModalVisible(true);
        break
      case 'SEARCH_INPUT':
        this.setState({showSearch: true});
        break;
      default:
        return Alert.alert('Ação não encontrada, verifique o objeto "menuFooter" importado ');
    }
  }

  _onPressSearch = (params) => {
    this.setState({paramSearch: params});
    this.apiSubmit(`${this.props.category.urlRefer}?${params}&${securityKey.urlKey()}`);
  }

  _onPressFilter = (params) => {

    this.setState({paramOrder: params});
    this.apiSubmit(`${this.props.category.urlRefer}?orderBy=${params}&${securityKey.urlKey()}`);
  }

  _onPressItemListGeneral = (params) => {

    let paramsActions = {
      urlRefer: this.props.category.urlRefer,
      idItemCategory: params.id,
      favoriteItem: false
    };

    this
      .props
      .actions
      .categoryActions
      .getItemcategory(paramsActions);

    this
      .props
      .navigation
      .navigate('Details');
  }

  _onPressFavorite = (params) => {

    const {addFavorite, removeFavorite} = this.props.actions.favoritesActions;

    if (params.favoriteItem) {
      addFavorite(params);
    } else {

      let favorites = this
        .props
        .favorites
        .filter((items) => items.idItemCategory !== params.idItemCategory);

      removeFavorite(favorites);
    }
  }

  verifyFavorite = (idItemCategory) => {

    const {favorites} = this.props

    let checkFavorite = (favorites.length > 0)
      ? favorites.filter((items) => {
        return items.idItemCategory == idItemCategory && items.favoriteItem
      })
      : favorites;

    let isFavorite = (checkFavorite.length > 0)
      ? true
      : false;
    return isFavorite;
  }

  async apiSubmit(urlRefer)
  {
    try {

      this.setState({loading: true, showSearch: false});
      const response = await Api.get(urlRefer)
      let res = response.data.data.results;

      let itens = [];
      switch (this.props.category.urlRefer) {
        case 'comics':
        case 'events':
        case 'series':
          itens = res.map((item) => {
            return {
              id: item.id,
              title: doTruncarStr(item.title, 25),
              subTitle: (item.description !== null)
                ? doTruncarStr(item.description, 50)
                : 'Not released',
              imgSrc: `${item.thumbnail.path}.${item.thumbnail.extension}`,
              favorite: this.verifyFavorite(item.id)
            }
          });

          break;

        case 'characters':
          itens = res.map((item) => {
            return {
              id: item.id,
              title: item.name,
              subTitle: doTruncarStr(item.description, 50),
              imgSrc: `${item.thumbnail.path}.${item.thumbnail.extension}`,
              favorite: this.verifyFavorite(item.id)
            }
          });
          break;
        case 'creators':
          itens = res.map((item) => {
            return {
              id: item.id,
              title: item.fullName || 'Not Released',
              imgSrc: `${item.thumbnail.path}.${item.thumbnail.extension}`,
              favorite: this.verifyFavorite(item.id)
            }
          });
          break;
        default:
          return Alert.alert('Categoria não encontrada, verifique o objeto "category" em config > data ');

      }

      this.setState({itens, loading: false});

    } catch (error) {

      this.setState({
        loading: false,
        error: true,
        codeError: (error.response !== undefined)
          ? error.response.status
          : 0
      });
    }
  }
}

const mapsStateToProps = state => ({category: state.category, favorites: state.favorites});

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      categoryActions: bindActionCreators(categoryActions, dispatch),
      favoritesActions: bindActionCreators(favoritesActions, dispatch)
    }
  };
}

export default connect(mapsStateToProps, mapDispatchToProps)(ListContent)
