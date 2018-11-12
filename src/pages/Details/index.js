import React from 'react';
import { bindActionCreators } from 'redux';
import { type NavigationScreenProp } from 'react-navigation';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Container,
  LargeImage,
  BoxTitle,
  Title,
  FooterDetails,
  ButtonFooter,
  TitleButtonFooter,
  WrapperInformations,
} from './Styles';
import { Wrapper, ListDetails, Loader, Error } from '../../components';
import * as categoryActions from '../../config/actions/category';
import * as favoritesActions from '../../config/actions/favorites';
import Api from '../../services/api';
import securityKey from '../../services/securityKey';
import { type Data } from '../Home/types';

import {
  charactersDetails,
  comicsDetails,
  creatorsDetails,
  eventsDetails,
  seriesDetails,
} from '../../config/data/details';

type Props = Data & {
  navigation: NavigationScreenProp<{}>,
  category: Object,
  favorites: Object,
  categoryActions: {
    getItemcategory: Function,
    addFavorite: Function,
    removeFavorite: Function,
  },
};

type State = {
  data: Array<string>,
  display: boolean,
  error: boolean,
  loading: boolean,
  codeError: number,
  itens: Array<{
    image?: string,
    title: string,
    infoDetails: Array<Object>,
  }>,
  favorite: boolean,
  itemActive: Object,
};

export class Details extends React.Component<Props, State> {
  static navigationOptions = {
    header: null,
  };

  state = {
    data: [],
    display: false,
    error: false,
    loading: true,
    codeError: 0,
    itens: [],
    favorite: false,
    itemActive: {},
  };

  /* eslint-disable */
  constructor(props : Props) {
    super(props);
  }

  componentDidMount() {

    const {urlRefer, idItemCategory} = this.props.category;
    const {favorites} = this.props;

    const initialCallApi = `${urlRefer}/${idItemCategory}?${securityKey.urlKey()}`;
    this.apiSubmit(initialCallApi);

    const isFavorite = this.verifyFavorite(favorites, idItemCategory);

    this.setState({
      favorite: isFavorite,
      itemActive: {
        idItemCategory: idItemCategory,
        favoriteItem: isFavorite
      }
    });
  }

  onPressFavorite = (params : Object) => {
    const {addFavorite, removeFavorite} = this.props.categoryActions;

    if (!params.favoriteItem) {
      this.setState({favorite: true});
      addFavorite(params);
    } else {
      this.setState({favorite: false});
      const favorites = this
        .props
        .favorites
        .filter(items => items.idItemCategory !== params.idItemCategory);

      removeFavorite(favorites);
    }
  };

  verifyFavorite = (favorites : Object, id : number) => {
    const checkFavorite = favorites.filter((item) => {
      if (item.idItemCategory === id) 
        return item;
      }
    );

    return (checkFavorite.length > 0)
      ? checkFavorite[0].favoriteItem
      : false;
  }

  onPressBack()
  {
    this
      .props
      .navigation
      .navigate('ListContent');
  }

  render() {

    const {itens, error, loading, codeError} = this.state;

    if (error) {
      return (
        <Wrapper>
          <Container>
            <Error codeError={codeError}/>
          </Container>
        </Wrapper>
      );
    }

    if (loading) {
      return (
        <Wrapper>
          <Container>
            <Loader/>
          </Container>
        </Wrapper>
      );
    }

    const item = itens[0];
    return (
      <Wrapper>
        <Container>
          {item.image && (<LargeImage source={{
            uri: item.image
          }}/>)}
          <BoxTitle>
            <Title>{item.title}</Title>
          </BoxTitle>

          <WrapperInformations>
            <ListDetails data={item.infoDetails}/>
          </WrapperInformations>

          <FooterDetails>
            <ButtonFooter onPress={() => this.onPressBack()}>
              <Icon name="chevron-left" size={26} color={'#bbb'}/>
              <TitleButtonFooter>BACK TO LIST</TitleButtonFooter>
            </ButtonFooter>

            <ButtonFooter onPress={() => this.onPressFavorite(this.state.itemActive)}>
              <Icon
                name="star"
                size={26}
                color={this.state.favorite
                ? '#D9CA00'
                : '#bbb'}/>
              <TitleButtonFooter>{this.state.favorite
                  ? 'REMOVE FAVORITE'
                  : 'ADD FAVORITE'}</TitleButtonFooter>
            </ButtonFooter>
          </FooterDetails>
        </Container>
      </Wrapper>
    );
  }

  mapApiToDetails(res : any) {
    let resultApi = [];
    switch (this.props.category.urlRefer) {
      case 'comics':
        resultApi = res.map(item => comicsDetails(item));
        break;
      case 'events':
        resultApi = res.map(item => eventsDetails(item));
        break;
      case 'series':
        resultApi = res.map(item => seriesDetails(item));
        break;
      case 'characters':
        resultApi = res.map(item => charactersDetails(item));
        break;
      case 'creators':
        resultApi = res.map(item => creatorsDetails(item));
        break;
      default:
        resultApi = [];
        break;
    }
    return resultApi;
  }

  async apiSubmit(urlRefer : string) {
    try {
      this.setState({loading: true});
      const response = await Api.get(urlRefer);
      const res = response.data.data.results;
      const resultApi : Array < Object > = this.mapApiToDetails(res);
      this.setState({itens: resultApi, loading: false});
    } catch (error) {
      this.setState({
        loading: false,
        error: true,
        codeError: error.response !== undefined
          ? error.response.status
          : 0
      });
    }
  }
}

const mapsStateToProps = state => ({category: state.category, favorites: state.favorites});

const mapDispatchToProps = (dispatch : Function) => ({
  categoryActions: bindActionCreators({
    getItemcategory: categoryActions.getItemcategory,
    addFavorite: favoritesActions.addFavorite,
    removeFavorite: favoritesActions.removeFavorite
  }, dispatch)
});

export default connect(mapsStateToProps, mapDispatchToProps)(Details);
