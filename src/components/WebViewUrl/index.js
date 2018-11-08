import React from 'react';
import {WebView} from './Styles';

const WebViewUrl = (props) => (<WebView source={{
    uri: props.url
}}/>);
export default WebViewUrl