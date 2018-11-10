import React, {Component} from 'react';
import {Container, TituloItem} from './Styles';

export default class SectionListHeader extends React.Component
{
    render()
    {
        return (
            <Container>
                <TituloItem>{this
                        .props
                        .section
                        .title
                        .toUpperCase()}</TituloItem>
            </Container>
        );
    }
}