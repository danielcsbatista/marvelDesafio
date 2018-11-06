import React from 'react';
import {TouchableOpacity} from 'react-native';
import {BackGroundList, TextImage} from './Styles';

const ListInitial = (props) => (
      <TouchableOpacity onPress={() => props.callFunction()}>
            <BackGroundList resizeMode="cover" opacity={0.9} source={props.imgSrc}>
                  <TextImage>{props.title}
                  </TextImage>
            </BackGroundList>
      </TouchableOpacity>
);
export default ListInitial