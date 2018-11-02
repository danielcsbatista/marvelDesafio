import React, {Component} from 'react';
import { Text, Alert, FlatList } from 'react-native'; 
import Wrapper from '../../components/Wrapper'
import { Container, ScrollItens , FooterMenu } from './Styles';
import ListGeneral from '../../components/ListGeneral'
import Api from '../../services/api';

export default class ListContent extends Component 
{
  constructor(props)
  {
      super(props);
      this.state = {itens:[{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1},{item:1}]};
  }
  static navigationOptions = {
    header: null,
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
              <ScrollItens onScroll={({nativeEvent})=> 
              {
                  if(this._isCloseToBottom(nativeEvent))
                  {
                      Alert.alert('fim da página');
                  }
              }}>
                {
                    this.state.itens.map((j,i) => {
                      return  <ListGeneral key={i} /> 
                    })                    
                }                 
              </ScrollItens >
              <FooterMenu>
              <Text>rodape</Text>
              </FooterMenu>

              
            </Container>    
          </Wrapper>          
      );
    }
  }