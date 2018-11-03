import React, {Component} from 'react';
import {Text} from 'react-native';
import {RowItem, ImageItem, DescriptionItem} from './Styles';

export default class ListGeneral extends Component
{
    constructor(props)
    {
        super(props);
    }

    _onPressNavigator()
    {
        console.log('ok');
    }

    render()
    {
        return (
            <RowItem>
                <ImageItem
                    source={{
                    uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'
                }}/>
                <DescriptionItem>
                    <Text>teste</Text>
                </DescriptionItem>
            </RowItem>
        )
    }
}