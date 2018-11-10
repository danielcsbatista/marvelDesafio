import React, {Component} from 'react';
import {SectionList} from './Styles';
import SectionListItem from '../SectionListItem';
import SectionListHeader from '../SectionListHeader';
class ListDetails extends Component {
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <SectionList
                renderItem={({item}) => {
                return (
                    <SectionListItem data={item} />
                );
            }}
                renderSectionHeader={({section}) => {
                return (<SectionListHeader section={section}/>);
            }}
                sections={this.props.data}
                keyExtractor={(item) => (Math.random() * 100).toString()}/>
        );
    }
}

export default ListDetails