import React from 'react';
import { WrapperApp, TopMarvel, ContentBody, Image, BackImage } from './Styles';

const imageBack = require('../../shared/images/back-top.png');
const logoMarvel = require('../../shared/images/logo-marvel.png');

type Props = {
  children: any,
};
const Wrapper = (props: Props) => (
  <WrapperApp>
    <TopMarvel>
      <BackImage source={imageBack}>
        <Image source={logoMarvel} ImageResizeMode="contain" />
      </BackImage>
    </TopMarvel>
    <ContentBody>{props.children}</ContentBody>
  </WrapperApp>
);

export default Wrapper;
