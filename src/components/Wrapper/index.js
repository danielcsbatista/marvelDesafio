import React, {Component} from 'react';
import { StatusBar } from 'react-native';
import {
    WrapperApp,
    TopMarvel,
    ContentBody
} from './Styles';

export default class Wrapper extends Component {
    

    render() 
    {
      return (
        <WrapperApp>
            <StatusBar hidden />
            <TopMarvel>    
            </TopMarvel>
            <ContentBody>
                { this.props.children }
            </ContentBody>
        </WrapperApp>
      );
    }
  }