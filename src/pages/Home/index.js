import React, {Component} from 'react';
//import { StackActions, NavigationActions } from 'react-navigation';
import { Container } from './Styles'
import Wrapper from '../../components/Wrapper'
import ListInitial from '../../components/ListInitial'

export default class Home extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      initialMenu:[{title:'PERSONAGENS', imgSrc:'https://facebook.github.io/react/logo-og.png', urlRefer:'characters'},
                     {title:'QUADRINHOS', imgSrc:'https://facebook.github.io/react/logo-og.png', urlRefer:'comics'},
                     {title:'AUTORES', imgSrc:'https://facebook.github.io/react/logo-og.png', urlRefer:'creators'},
                     {title:'EVENTOS', imgSrc:'https://facebook.github.io/react/logo-og.png', urlRefer:'events'},
                     {title:'SÉRIES', imgSrc:'https://facebook.github.io/react/logo-og.png', urlRefer:'series'},
                     {title:'HISTÓRIAS', imgSrc:'https://facebook.github.io/react/logo-og.png', urlRefer:'stories'},                    
                   ]
    }
  }

  static navigationOptions = {
    header: null,
  };  

  
    render() 
    {      
      return (    
        <Wrapper>
          <Container>
            {
              this.state.initialMenu.map((itens, i) => {
                 return <ListInitial imgSrc={itens.imgSrc} 
                                     title={itens.title} 
                                     urlRefer={itens.urlRefer} 
                                     key={i} 
                                     navigation={this.props.navigation}
                                     />
              })
            }               
          </Container>  
        </Wrapper>    
      );
    }
  }