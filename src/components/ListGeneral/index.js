import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    RowItem,
    ImageItem,
    DescriptionItem,
    TitleItem,
    SubTitleItem,
    FavoriteItem
} from './Styles';

const ListGeneral = (props) => (
    <RowItem>
        <ImageItem
            source={{
            uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'
        }}/>
        <DescriptionItem>
            <TitleItem>{props.title}</TitleItem>
            <SubTitleItem>{props.subTitle}</SubTitleItem>
        </DescriptionItem>
        <FavoriteItem>
            <Icon name="star" size={32} color="#bbb"/>
        </FavoriteItem>
    </RowItem>
);
export default ListGeneral