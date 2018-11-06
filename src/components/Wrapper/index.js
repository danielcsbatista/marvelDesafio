import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import {WrapperApp, TopMarvel, ContentBody, Image, BackImage} from './Styles';

export default class Wrapper extends Component {
    render()
    {
        return (
            <WrapperApp>
                <TopMarvel>
                    <BackImage source={require('../../shared/images/back-top.png')}>
                        <Image
                            source={require('../../shared/images/logo-marvel.png')}
                            ImageResizeMode="contain"/>
                    </BackImage>
                </TopMarvel>
                <ContentBody>
                    {this.props.children}
                </ContentBody>
            </WrapperApp>
        );
    }
}