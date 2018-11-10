import React, {Component} from 'react';
import {Linking} from 'react-native';
import {Container, TextItem, ContainerListUrl, ButtomLink, TitleButtomLink} from './Styles';

export default class SectionListItem extends Component
{
    render()
    {
        if (this.props.data.type === 'text') {
            return (
                <Container>
                    <TextItem>{this.props.data.item || 'Not released'}</TextItem>
                </Container>
            );
        }

        if (this.props.data.type === 'urllist') {

            return (
                <Container>
                    {this
                        .props
                        .data
                        .item
                        .map((items, index) => {
                            return (
                                <ContainerListUrl key={index}>
                                    <ButtomLink
                                        onPress={() => {
                                        Linking.openURL(items.url)
                                    }}>
                                        <TitleButtomLink>
                                            {items
                                                .type
                                                .toUpperCase()}
                                        </TitleButtomLink>
                                    </ButtomLink>
                                </ContainerListUrl>
                            );
                        })}
                </Container>
            );
        }
    }
}
