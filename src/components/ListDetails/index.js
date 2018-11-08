import React from 'react';
import {SectionList} from './Styles';
import SectionListItem from '../SectionListItem';
import SectionListHeader from '../SectionListHeader';

const ListDetails = (props) => (
    <SectionList
        renderItem={({item, index}) => {
        return (
            <SectionListItem item={item} index={index}></SectionListItem>
        );
    }}
        renderSectionHeader={({section}) => {
        return (<SectionListHeader section={section}/>);
    }}
        sections={props.data}
        keyExtractor={(item) => item.name}></SectionList>
);
export default ListDetails