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
      showSearch: false
    }
  };

  static navigationOptions = {
    header: null
  };

  componentDidMount()
  {
    this.apiSubmit(this.props.category.urlRefer);
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
                parameter={`${this.props.category.urlRefer}&title`}
                callFuntion={() => this.apiSubmit()}/></Row>
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
              title={item.title}
              subTitle={item.subTitle}
              callFuntion={() => this._onPressItemListGeneral(item)}
              imgSrc={item.imgSrc}/>)
          }}/>
          <Footer>
            {menuFooter
              .data
              .map((item, i) => {
                return <FooterMenu
                  key={i}
                  nameIcon={item.icon}
                  title={item.title}
                  callFuntion={() => this._onPressMenuFooter(item)}/>
              })
}
          </Footer>
        </Container>
        <ModalList ref="ModalList" display={this.state.display}/>
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
        this.setState({showSearch: true});
        break;
      default:
        return Alert.alert('Verifique o objeto "menuFooter" importado ');
    }
  }

  _onPressItemListGeneral(params)
  {
    this
      .props
      .navigation
      .navigate('Details');
  }

  async apiSubmit(urlRefer)
  {
    console.log(urlRefer);

    try {

      const response = await Api.get(`${urlRefer}?${securityKey.urlKey()}`)
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
              imgSrc: `${item.thumbnail.path}.${item.thumbnail.extension}`
            }
          });

          break;
        case 'story':
          itens = res.map((item) => {
            return {id: item.id, title: item.title}
          });
          break;
        case 'characters':
          itens = res.map((item) => {
            return {
              id: item.id,
              title: item.name,
              subTitle: doTruncarStr(item.description, 70),
              imgSrc: `${item.thumbnail.path}.${item.thumbnail.extension}`
            }
          });
          break;
        case 'creators':
          itens = res.map((item) => {
            return {
              id: item.id,
              title: item.fullName || 'Not Released',
              imgSrc: `${item.thumbnail.path}.${item.thumbnail.extension}`
            }
          });
          break;

        default:
          break;
      }

      console.log(response.data.results);

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

const mapsStateToProps = state => ({category: state.category});

export default connect(mapsStateToProps)(ListContent)
