import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Content, InputSearch, ButtomSearch} from './Styles';

export default class SearchContent extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            valueSearch: ''
        }
    };

    render()
    {
        return (
            <Content>
                <InputSearch
                    value={this.state.valueSearch}
                    onChangeText={(valueSearch) => this.setState({valueSearch})}
                    autoFocus={true}
                    onSubmitEditing={() => this.props.callFunction(`${this.props.parameter}=${this.state.valueSearch}`)}
                    placeholder="find item"/>
                <ButtomSearch
                    onPress={() => this.props.callFunction(`${this.props.parameter}=${this.state.valueSearch}`)}>
                    <Icon name="search" size={24} color="#FFF"/>
                </ButtomSearch>
            </Content>
        );
    }
}