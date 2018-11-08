import React, {Component} from 'react';
import {Container, TextItem, TituloItem, BorderBottom} from './Styles';

export default class SectionListItem extends React.Component
{
    render()
    {
        return (
            <Container>
                <TituloItem>{this.props.item.name}</TituloItem>
                <TextItem>{this.props.item.description}</TextItem>
                <BorderBottom/>
            </Container>
        );
    }
}
