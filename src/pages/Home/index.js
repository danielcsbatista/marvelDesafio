import React, {Component} from 'react';
import {Container} from './Styles';
import Wrapper from '../../components/Wrapper';
import ListInitial from '../../components/ListInitial';
import {bindActionCreators} from 'redux';
import * as categoryActions from '../../config/actions/category';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';

class Home extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      initialMenu: [
        {
          title: 'CHARACTERS',
          imgSrc: 'https://facebook.github.io/react/logo-og.png',
          urlRefer: 'characters'
        }, {
          title: 'COMICS',
          imgSrc: 'https://facebook.github.io/react/logo-og.png',
          urlRefer: 'comics'
        }, {
          title: 'CREATORS',
          imgSrc: 'https://facebook.github.io/react/logo-og.png',
          urlRefer: 'creators'
        }, {
          title: 'EVENTS',
          imgSrc: 'https://facebook.github.io/react/logo-og.png',
          urlRefer: 'events'
        }, {
          title: 'SERIES',
          imgSrc: 'https://facebook.github.io/react/logo-og.png',
          urlRefer: 'series'
        }, {
          title: 'STORIES',
          imgSrc: 'https://facebook.github.io/react/logo-og.png',
          urlRefer: 'stories'
        }
      ]
    }

  }

  static navigationOptions = {
    header: null
  };

  _onPress(urlRefer)
  {
    this
      .props
      .getCategory(urlRefer);
    this
      .props
      .navigation
      .navigate('ListContent');
  }

  render()
  {
    return (
      <Wrapper>
        <View>
          {this
            .props
            .category
            .map((item, i) => {
              return <Text key={(Math.random() * 100) + 20}>{item.nameCategory}</Text>
            })
}
        </View>
        <Container>
          {this
            .state
            .initialMenu
            .map((itens, i) => {
              return <ListInitial
                imgSrc={itens.imgSrc}
                title={itens.title}
                key={i}
                callFunction={() => this._onPress(itens.urlRefer)}/>
            })
}
        </Container>
      </Wrapper>
    );
  }
}

const mapsStateToProps = state => ({category: state.category});

const mapDispatchToProps = dispatch => bindActionCreators(categoryActions, dispatch);

export default connect(mapsStateToProps, mapDispatchToProps)(Home)