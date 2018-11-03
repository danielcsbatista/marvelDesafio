import React, {Component} from 'react';
import {Alert} from 'react-native';
import Wrapper from '../../components/Wrapper'
import {Container, ScrollItens, Footer, CategoryListTitle, TitleCategory} from './Styles';
import ListGeneral from '../../components/ListGeneral'
import Api from '../../services/api';
import {connect} from 'react-redux';
import FooterMenu from '../../components/FooterMenu';

class ListContent extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      itens: [
        {
          item: 1
        }, {
          item: 1
        }, {
          item: 1
        }, {
          item: 1
        }, {
          item: 1
        }
      ],
      menuFooter: [
        {
          icon: 'home'
        }, {
          icon: 'search'
        }, {
          icon: 'filter'
        }, {
          icon: 'heart'
        }
      ]
    };
    console.log(props.category);
  }
  static navigationOptions = {
    header: null
  };

  _isCloseToBottom({layoutMeasurement, contentOffset, contentSize})
  {
    return layoutMeasurement.height + contentOffset.y >= contentSize.height - 10;
  }

  render()
  {
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
            onScroll={({nativeEvent}) => {
            if (this._isCloseToBottom(nativeEvent)) {
              Alert.alert('fim da página');
            }
          }}>
            {this
              .state
              .itens
              .map((j, i) => {
                return <ListGeneral key={i}/>
              })
}
          </ScrollItens>
          <Footer>
            {this
              .state
              .menuFooter
              .map((item, i) => {
                return <FooterMenu key={i} nameIcon={item.icon}/>
              })
}

          </Footer>

        </Container>
      </Wrapper>
    );
  }
}

const mapsStateToProps = state => ({category: state.category});

export default connect(mapsStateToProps)(ListContent)