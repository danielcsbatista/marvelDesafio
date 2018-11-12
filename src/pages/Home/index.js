import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { type NavigationScreenProp } from 'react-navigation';
import Container from './Styles';
import { Wrapper, ListInitial } from '../../components';
import * as categoryActions from '../../config/actions/category';
import type { Content, Data } from './types';
import categoryData, {
  type ObjectDataCategory,
} from '../../config/data/category';

type Props = {
  category: {
    data: Array<Data>,
  },
  categoryActions: {
    getCategory: (params: Content) => void,
  },
  navigation: NavigationScreenProp<{}>,
};

export class Home extends Component<Props> {
  static navigationOptions = {
    header: null,
  };

  onPress(content: Content) {
    this.props.categoryActions.getCategory(content);
    this.props.navigation.navigate('ListContent');
  }

  render() {
    return (
      <Wrapper>
        <Container>
          {categoryData.data.map((itens: ObjectDataCategory, i) => (
            <ListInitial
              imgSrc={itens.imgSrc}
              title={itens.title}
              key={i}
              callFunction={() =>
                this.onPress({
                  urlRefer: itens.urlRefer,
                  nameCategory: itens.title,
                  paramSearch: itens.paramSearch,
                  orderBy: itens.orderBy,
                })
              }
            />
          ))}
        </Container>
      </Wrapper>
    );
  }
}

const mapsStateToProps = state => ({
  ...state.category,
});
const mapDispatchToProps = (dispatch: Function) => ({
  categoryActions: bindActionCreators(
    { getCategory: categoryActions.getCategory },
    dispatch
  ),
});
export default connect(
  mapsStateToProps,
  mapDispatchToProps
)(Home);
