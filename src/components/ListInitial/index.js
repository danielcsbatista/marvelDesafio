import React, {Component} from 'react';
import {TouchableOpacity, Alert} from 'react-native';
import {BackGroundList, TextImage} from './Styles';


export default class ListInitial extends Component 
{
   constructor(props)
   {
      super(props);      
   }
   
   _onPressNavigator(url, navigation) 
  { 
     console.log(navigation);
     navigation.navigate('ListContent');
  }

   render() 
   {   
      return (       
            <TouchableOpacity onPress={() => this._onPressNavigator(this.props.urlRefer, this.props.navigation)} >
                  <BackGroundList 
                        resizeMode="cover"
                        opacity={0.9}
                        source={{uri: this.props.imgSrc }}                           
                  > 
                        <TextImage>{this.props.title}</TextImage> 
                  </BackGroundList>               
            </TouchableOpacity>  
      )
   }
}