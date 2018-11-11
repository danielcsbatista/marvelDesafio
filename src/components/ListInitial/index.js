import React from 'react';
/* $FlowFixMe https://github.com/flowtype/flow-for-vscode/issues/215 */
import { TouchableOpacity } from 'react-native';
import { BackGroundList, TextImage } from './Styles';

type Props = {
  callFunction: Function,
  imgSrc: string,
  title: string,
};

const ListInitial = (props: Props) => (
  <TouchableOpacity onPress={() => props.callFunction()}>
    <BackGroundList resizeMode="cover" opacity={0.9} source={props.imgSrc}>
      <TextImage>{props.title}</TextImage>
    </BackGroundList>
  </TouchableOpacity>
);
export default ListInitial;
