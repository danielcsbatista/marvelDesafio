import React, {Component} from 'react';
import {Container} from './Styles';
import Wrapper from '../../components/Wrapper';
import ListInitial from '../../components/ListInitial';
import {bindActionCreators} from 'redux';
import * as categoryActions from '../../config/actions/category';
import {connect} from 'react-redux';

class Home extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      initialMenu: [
        {
          title: 'CHARACTERS',
          imgSrc: require('../../shared/images/characters.png'),
          urlRefer: 'characters'
        }, {
          title: 'COMICS',
          imgSrc: require('../../shared/images/comics.png'),
          urlRefer: 'comics'
        }, {
          title: 'CREATORS',
          imgSrc: require('../../shared/images/creators.png'),
          urlRefer: 'creators'
        }, {
          title: 'EVENTS',
          imgSrc: require('../../shared/images/events.png'),
          urlRefer: 'events'
        }, {
          title: 'SERIES',
          imgSrc: require('../../shared/images/series.png'),
          urlRefer: 'series'
        }, {
          title: 'STORIES',
          imgSrc: require('../../shared/images/stories.png'),
          urlRefer: 'stories'
        }
      ]
    }

  }

  static navigationOptions = {
    header: null
  };

  _onPress(content)
  {
    this
      .props
      .getCategory(content);
    this
      .props
      .navigation
      .navigate('ListContent');
  }

  render()
  {
    return (
      <Wrapper>
        <Container>
          {this
            .state
            .initialMenu
            .map((itens, i) => {
              return <ListInitial
                imgSrc={itens.imgSrc}
                title={itens.title}
                key={i}
                callFunction={() => this._onPress({urlRefer: itens.urlRefer, nameCategory: itens.title})}/>
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