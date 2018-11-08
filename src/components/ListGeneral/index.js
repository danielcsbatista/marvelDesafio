import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    RowItem,
    ButtomItem,
    ImageItem,
    DescriptionItem,
    TitleItem,
    SubTitleItem,
    FavoriteItem
} from './Styles';

const ListGeneral = (props) => (
    <RowItem>
    <ButtomItem onPress={() => props.callFuntion()}>
        {(props.imgSrc !== null && props.imgSrc !== '' && props.imgSrc !== undefined)
            ? <ImageItem source={{
                    uri: props.imgSrc
                }}/>
            : null}
        <DescriptionItem>
            <TitleItem>{props.title}</TitleItem>
            {(props.subTitle !== null)
                ? <SubTitleItem>{props.subTitle}</SubTitleItem>
                : null}
        </DescriptionItem>       
    </ButtomItem>
     <FavoriteItem>
            <Icon name="star" size={32} color="#bbb"/>
     </FavoriteItem>
</RowItem>
);
export default ListGeneral