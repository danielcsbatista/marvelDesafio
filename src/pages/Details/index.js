import React, { Component } from 'react';
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
};

class Details extends Component<Props, State> {
  state = {
    data: [],
    display: false,
    error: false,
    loading: true,
    codeError: 0,
    itens: [],
    favorite: false,
  };

  static navigationOptions = {
    header: null,
  };

  _onPress() {
    this.props.navigation.navigate('ListContent');
  }

  componentDidMount() {
    const { urlRefer, idItemCategory } = this.props.category;

    const initialCallApi = `${urlRefer}/${idItemCategory}?${securityKey.urlKey()}`;
    this.apiSubmit(initialCallApi);
  }

  render() {
    const { itens, error, loading, codeError } = this.state;

    if (error) {
      return (
        <Wrapper>
          <Container>
            <Error codeError={codeError} />
          </Container>
        </Wrapper>
      );
    }

    if (loading) {
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
          {itens[0].image !== undefined &&
          itens[0].image !== null &&
          itens[0].image !== '' ? (
            <LargeImage
              source={{
                uri: itens[0].image,
              }}
            />
          ) : null}
          <BoxTitle>
            <Title>{itens[0].title}</Title>
          </BoxTitle>

          <ListDetails data={itens[0].infoDetails} />
          <FooterDetails>
            <ButtonFooter>
              <Icon
                name="star"
                size={26}
                color={this.state.favorite ? '#D9CA00' : '#bbb'}
              />
              <TitleButtonFooter>back to list</TitleButtonFooter>
            </ButtonFooter>

            <ButtonFooter>
              <Icon
                name="star"
                size={26}
                color={this.state.favorite ? '#D9CA00' : '#bbb'}
              />
              <TitleButtonFooter>Favorite</TitleButtonFooter>
            </ButtonFooter>
          </FooterDetails>
        </Container>
      </Wrapper>
    );
  }

  async apiSubmit(urlRefer) {
    try {
      this.setState({ loading: true });
      const response = await Api.get(urlRefer);
      const res = response.data.data.results;

      let resultApi: Array<Object> = [];
      switch (this.props.urlRefer) {
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

      this.setState({ itens: resultApi, loading: false });
    } catch (error) {
      this.setState({
        loading: false,
        error: true,
        codeError: error.response !== undefined ? error.response.status : 0,
      });
    }
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
)(Details);
