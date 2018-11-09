import React, {Component} from 'react';
import {Container} from './Styles';
import {Wrapper, ListInitial} from '../../components';
import {bindActionCreators} from 'redux';
import * as categoryActions from '../../config/actions/category';
import {connect} from 'react-redux';
import {category} from '../../config/data/category';

class Home extends Component {
  constructor(props)
  {
    super(props);
    this.state = {}

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
          {category
            .data
            .map((itens, i) => {
              return <ListInitial
                imgSrc={itens.imgSrc}
                title={itens.title}
                key={i}
                callFunction={() => this._onPress({urlRefer: itens.urlRefer, nameCategory: itens.title, paramSearch: itens.paramSearch, orderBy: itens.orderBy})}/>
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