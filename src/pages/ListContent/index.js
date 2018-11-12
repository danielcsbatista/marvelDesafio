import React, { Component } from 'react';
/* $FlowFixMe https://github.com/flowtype/flow-for-vscode/issues/215 */
import { Alert, Modal, ActivityIndicator } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { type NavigationScreenProp } from 'react-navigation';
import {
  Wrapper,
  FooterMenu,
  ModalList,
  ListGeneral,
  Loader,
  Error,
  SearchContent,
} from '../../components';
import {
  Container,
  ScrollItens,
  Footer,
  CategoryListTitle,
  TitleCategory,
  Row,
  ContainerLoaderScroll,
} from './Styles';
import Api from '../../services/api';
import * as categoryActions from '../../config/actions/category';
import * as favoritesActions from '../../config/actions/favorites';
import securityKey from '../../services/securityKey';
import menuFooter from '../../config/data/menuFooter';
import doTruncarStr from '../../utlis/doTruncarStr';
import { type Content } from '../Home/types';
import { type FavoriteStore } from '../../config/reducers/favorites';

type Props = {
  category: Content,
  navigation: NavigationScreenProp<{}>,
  favorites: FavoriteStore,
  categoryActions: {
    getItemcategory: (params: Object) => void,
    addFavorite: Function,
    removeFavorite: Function,
  },
};

type State = {
  itens: Array<Object>,
  display: boolean,
  error: boolean,
  loadingInitial: boolean,
  loading: boolean,
  codeError: number,
  showSearch: boolean,
  paramSearch: string,
  paramOrder: string,
  titleModalList: string,
  page: number,
};

class ListContent extends Component<Props, State> {
  state = {
    itens: [],
    display: false,
    error: false,
    loadingInitial: true,
    codeError: 0,
    showSearch: false,
    paramSearch: '',
    paramOrder: '',
    titleModalList: '',
    loading: false,
    page: 0,
  };

  ModalList: Modal = React.createRef();

  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    this.loadApiList();
  }

  loadApiList = () => {    

    const {paramOrder, page} = this.state;   
    const initialCallApi = `${this.props.category.urlRefer}?limit=10&offset=${page}&orderBy=${paramOrder}&${securityKey.urlKey()}`;
    if(!this.state.loading)
    {
        this.apiSubmit(initialCallApi);
    }    
  };

  render() {
      
      if (this.state.error) {
      return (
        <Wrapper>
          <Container>
            <Error codeError={this.state.codeError} />
          </Container>
        </Wrapper>
      );
    }

    if (this.state.loadingInitial) {
      return (
        <Wrapper>
          <Container>
            <Loader />
          </Container>
        </Wrapper>
      );
    }

    return (
      <Wrapper>
        <Container>
          <CategoryListTitle>
            <TitleCategory>{this.props.category.nameCategory}</TitleCategory>
          </CategoryListTitle>
          {this.state.showSearch ? (
            <Row>
              <SearchContent
                parameter={`${this.props.category.paramSearch}`}
                callFunction={this.onPressSearch}
              />
            </Row>
          ) : null}

          <ScrollItens
            data={this.state.itens}
            keyExtractor={item => item.id.toString()}
            numColumns={1}
            renderItem={({ item }) => (
              <ListGeneral
                id={item.id}
                title={item.title}
                subTitle={item.subTitle}
                callFunction={() => this.onPressItemListGeneral(item)}
                imgSrc={item.imgSrc}
                favorite={item.favorite}
                callAddFavorite={this.onPressFavorite}
              />
            )}
            onEndReachedThreshold={0.1}
            onEndReached={this.loadApiList}
            ListFooterComponent={this.renderLoaderFooterList}
          />
          <Footer>
            {menuFooter.data.map((item, i) => (
              <FooterMenu
                key={i}
                nameIcon={item.icon}
                title={item.title}
                callFunction={() => this.onPressMenuFooter(item)}
              />
            ))}
          </Footer>
        </Container>
        <ModalList
          ref={this.ModalList}
          title={this.state.titleModalList}
          display={this.state.display}
          itemsOrder={this.props.category.orderBy}
          callFunction={this.onPressFilter}
        />
      </Wrapper>
    );
  }

  onPressMenuFooter(params) {
    switch (params.type) {
      case 'HOME_VIEW':
        return this.props.navigation.navigate('Home');
      case 'FILTER_MODAL':
        this.setState({ titleModalList: 'SELECT A FILTER' });
        this.ModalList.current.setModalVisible(true);
        break;
      case 'STAR_MODAL':
        Alert.alert('coming soon!!');
        break;
      case 'SEARCH_INPUT':
        this.setState({ showSearch: true });
        break;
      default:
        return Alert.alert(
          'Ação não encontrada, verifique o objeto "menuFooter" importado '
        );
    }
    return '';
  }

  onPressSearch = params => {
    this.setState({ paramSearch: params, paramOrder: '', itens:[] });
    this.apiSubmit(
      `${this.props.category.urlRefer}?${params}&limit=99&${securityKey.urlKey()}`
    );
  };

  onPressFilter = params => {
    this.ModalList.current.setModalVisible(false);
    this.setState({ paramOrder: params, itens:[] });
    this.apiSubmit(
      `${
        this.props.category.urlRefer
      }?orderBy=${params}&${securityKey.urlKey()}`
    );
  };

  onPressItemListGeneral = params => {
    const paramsActions = {
      urlRefer: this.props.category.urlRefer,
      idItemCategory: params.id,
      favoriteItem: false,
    };
    this.props.categoryActions.getItemcategory(paramsActions);
    this.props.navigation.navigate('Details');
  };

  onPressFavorite = params => {
    const { addFavorite, removeFavorite } = this.props.categoryActions;

    if (params.favoriteItem) {
      addFavorite(params);
    } else {
      const favorites = this.props.favorites.filter(
        items => items.idItemCategory !== params.idItemCategory
      );

      removeFavorite(favorites);
    }
  };

  verifyFavorite = idItemCategory => {
    const { favorites } = this.props;

    const checkFavorite =
      favorites.length > 0
        ? favorites.filter(
            items =>
              items.idItemCategory === idItemCategory && items.favoriteItem
          )
        : favorites;

    const isFavorite = checkFavorite.length > 0;
    return isFavorite;
  };

  renderLoaderFooterList = () => {
    if (!this.state.loading) return null;
    return (
      <ContainerLoaderScroll>
        <ActivityIndicator color="#cc0000" />
      </ContainerLoaderScroll>
    );
  };

  async apiSubmit(urlRefer) {
    try {
      this.setState({ showSearch: false, loading: true });
      const response = await Api.get(urlRefer);
      const res = response.data.data.results;

      let resultApi = [];
      switch (this.props.category.urlRefer) {
        case 'comics':
        case 'events':
        case 'series':
          resultApi = res.map(item => ({
            id: item.id,
            title: doTruncarStr(item.title, 25),
            subTitle:
              item.description !== null
                ? doTruncarStr(item.description, 50)
                : 'Not released',
            imgSrc: `${item.thumbnail.path}/portrait_medium.${item.thumbnail.extension}`,
            favorite: this.verifyFavorite(item.id),
          }));

          break;

        case 'characters':
          resultApi = res.map(item => ({
            id: item.id,
            title: item.name,
            subTitle: doTruncarStr(item.description, 50),
            imgSrc: `${item.thumbnail.path}/portrait_medium.${item.thumbnail.extension}`,
            favorite: this.verifyFavorite(item.id),
          }));
          break;
        case 'creators':
          resultApi = res.map(item => ({
            id: item.id,
            title: item.fullName || 'Not Released',
            imgSrc: `${item.thumbnail.path}/portrait_medium.${item.thumbnail.extension}`,
            favorite: this.verifyFavorite(item.id),
          }));
          break;
        default:
          return Alert.alert(
            'Categoria não encontrada, verifique o objeto "category" em config > data '
          );
      }

      this.setState({
        itens:[...this.state.itens, ...resultApi],
        page: this.state.page + 11,
        loading: false,
        loadingInitial: false,
      });
    } catch (error) {
      this.setState({
        loadingInitial: false,
        error: true,
        codeError: error.response !== undefined ? error.response.status : 0,
      });
    }
    return null;
  }
}

const mapsStateToProps = state => ({
  category: state.category,
  favorites: state.favorites,
});

const mapDispatchToProps = (dispatch: Function) => ({
  categoryActions: bindActionCreators(
    {
      getItemcategory: categoryActions.getItemcategory,
      addFavorite: favoritesActions.addFavorite,
      removeFavorite: favoritesActions.removeFavorite,
    },
    dispatch
  ),
});

export default connect(
  mapsStateToProps,
  mapDispatchToProps
)(ListContent);
