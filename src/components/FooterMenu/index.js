import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import {TouchableMenu, TitleIcon} from './Styles';

const FooterMenu = (props) => (

  <TouchableMenu onPress={() => props.callFunction()}>
    <Icon name={props.nameIcon} size={32} color="#B21009"/>
    <TitleIcon>{props.title}</TitleIcon>
  </TouchableMenu>

);

export default FooterMenu;
