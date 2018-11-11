import React, { Component } from 'react';
/* $FlowFixMe https://github.com/flowtype/flow-for-vscode/issues/215 */
import { Alert } from 'react-native';
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
  getItemcategory: (params: Object) => void,
  addFavorite: Function,
  removeFavorite: Function,
  favorites: FavoriteStore,
};

type State = {
  itens: Array<Object>,
  display: boolean,
  error: boolean,
  loading: boolean,
  codeError: number,
  showSearch: boolean,
  paramSearch: string,
  paramOrder: string,
  titleModalList: string,
};

class ListContent extends Component<Props, State> {
  state = {
    itens: [],
    display: false,
    error: false,
    loading: true,
    codeError: 0,
    showSearch: false,
    paramSearch: '',
    paramOrder: '',
    titleModalList: '',
  };

  ModalList = React.createRef();

  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    const initialCallApi = `${
      this.props.category.urlRefer
    }?${securityKey.urlKey()}`;
    this.apiSubmit(initialCallApi);
  }

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

    if (this.state.loading) {
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
        this.ModalList.current.setModalVisible(true);
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
    this.setState({ paramSearch: params });
    this.apiSubmit(
      `${this.props.category.urlRefer}?${params}&${securityKey.urlKey()}`
    );
  };

  onPressFilter = params => {
    this.setState({ paramOrder: params });
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

    this.props.getItemcategory(paramsActions);

    this.props.navigation.navigate('Details');
  };

  onPressFavorite = params => {
    const { addFavorite, removeFavorite } = this.props;

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

  async apiSubmit(urlRefer) {
    try {
      this.setState({ loading: true, showSearch: false });
      const response = await Api.get(urlRefer);
      const res = response.data.data.results;

      let itens = [];
      switch (this.props.category.urlRefer) {
        case 'comics':
        case 'events':
        case 'series':
          itens = res.map(item => ({
            id: item.id,
            title: doTruncarStr(item.title, 25),
            subTitle:
              item.description !== null
                ? doTruncarStr(item.description, 50)
                : 'Not released',
            imgSrc: `${item.thumbnail.path}.${item.thumbnail.extension}`,
            favorite: this.verifyFavorite(item.id),
          }));

          break;

        case 'characters':
          itens = res.map(item => ({
            id: item.id,
            title: item.name,
            subTitle: doTruncarStr(item.description, 50),
            imgSrc: `${item.thumbnail.path}.${item.thumbnail.extension}`,
            favorite: this.verifyFavorite(item.id),
          }));
          break;
        case 'creators':
          itens = res.map(item => ({
            id: item.id,
            title: item.fullName || 'Not Released',
            imgSrc: `${item.thumbnail.path}.${item.thumbnail.extension}`,
            favorite: this.verifyFavorite(item.id),
          }));
          break;
        default:
          return Alert.alert(
            'Categoria não encontrada, verifique o objeto "category" em config > data '
          );
      }

      this.setState({ itens, loading: false });
    } catch (error) {
      this.setState({
        loading: false,
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
