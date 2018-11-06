import React, {Component} from 'react';
import {Alert, Text, View} from 'react-native';
import Wrapper from '../../components/Wrapper'
import {Container, ScrollItens, Footer, CategoryListTitle, TitleCategory} from './Styles';
import ListGeneral from '../../components/ListGeneral'
import Api from '../../services/api';
import {connect} from 'react-redux';
import FooterMenu from '../../components/FooterMenu';
import ModalList from '../../components/ModalList';
import securityKey from '../../services/securityKey'

class ListContent extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      itens: [
        {
          id: 1,
          title: 'Titulo item 1',
          subTitle: 'Descrição item',
          thumbnail: ''
        }, {
          id: 2,
          title: 'Titulo item 2',
          subTitle: 'Descrição item',
          thumbnail: ''
        }, {
          id: 3,
          title: 'Titulo item 3',
          subTitle: 'Descrição item',
          thumbnail: ''
        }
      ],
      menuFooter: [
        {
          icon: 'home',
          title: 'Home',
          type: 'HOME_VIEW'
        }, {
          icon: 'search',
          title: 'Search',
          type: 'SEARCH_MODAL'
        }, {
          icon: 'filter',
          title: 'Filter',
          type: 'FILTER_MODAL'
        }, {
          icon: 'star',
          title: 'Favorite',
          type: 'STAR_MODAL'
        }
      ],
      display: false
    };
    console.log(securityKey.urlKey());
  }

  static navigationOptions = {
    header: null
  };

  async apiSubmit(urlRefer)
  {
    const response = await Api.get(`${urlRefer}?${securityKey.urlKey()}`)
    return response;
  }

  componentDidMount()
  {

    /*Api.get(`characters?${securityKey.urlKey()}`).then(res => {
      console.log(res);
      console.log(res.data);
    })*/
  }

  render()
  {
    console.log(apiSubmit('characters'));
    //console.log(this.state.display);
    return (
      <Wrapper>
        <Container>
          <CategoryListTitle>
            {this
              .props
              .category
              .map((item, f) => {
                return <TitleCategory key={f}>
                  {item.nameCategory}
                </TitleCategory>
              })
}
          </CategoryListTitle>

          <ScrollItens
            data={this.state.itens}
            keyExtractor={item => item
            .id
            .toString()}
            numColumns={1}
            renderItem={({item}) => {
            return (<ListGeneral
              title={item.title}
              subTitle={item.subTitle}
              imgSrc={item.thumbnail}/>)
          }}/>
          <Footer>
            {this
              .state
              .menuFooter
              .map((item, i) => {
                return <FooterMenu
                  key={i}
                  nameIcon={item.icon}
                  title={item.title}
                  callFuntion={() => this._onPress(item)}/>
              })
}
          </Footer>
        </Container>
        <ModalList ref="ModalList" display={this.state.display}/>
      </Wrapper>
    );
  }

  _onPress(params)
  {
    switch (params.type) {
      case 'HOME_VIEW':
        return this
          .props
          .navigation
          .navigate('Home');
      case 'FILTER_MODAL':

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
      case 'SEARCH_MODAL':
        this
          .refs
          .ModalList
          .setModalVisible(true);
        break;
      default:
        return Alert.alert('Verifique o objeto "menuFooter" no state ');
    }
  }

}

const mapsStateToProps = state => ({category: state.category});

export default connect(mapsStateToProps)(ListContent)
