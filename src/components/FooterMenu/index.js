import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import {TouchableMenu} from './Styles';

const FooterMenu = (props) => (

  <TouchableMenu>
    <Icon name={props.nameIcon} size={32} color="#666"/>
  </TouchableMenu>

);

export default FooterMenu;
