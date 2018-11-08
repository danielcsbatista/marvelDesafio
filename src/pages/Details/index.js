import React, {Component} from 'react';
import {Container, LargeImage, BoxTitle, Title} from './Styles';
import {Wrapper, ListDetails, Loader, Error} from '../../components';
import {bindActionCreators} from 'redux';
import * as categoryActions from '../../config/actions/category';
import {connect} from 'react-redux';

class Details extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            data: [], 
            display: false,
            error: false,
            loading: true,
            codeError: ''
        }
    }

    static navigationOptions = {
        header: null
    };

    _onPress()
    {
        this
            .props
            .navigation
            .navigate('ListContent');
    }

    render()
    {
        if (this.state.error) 
            return (
                <Wrapper>
                    <Container>
                        <Error codeError={this.state.codeError}/>
                    </Container>
                </Wrapper>
            );
        
        if (this.state.loading) 
            return (
                <Wrapper>
                    <Container>
                        <Loader/>
                    </Container>
                </Wrapper>
            );
        
        return (
            <Wrapper>
                <Container>
                    <BoxTitle>
                        <Title>
                            Nome do item
                        </Title>
                    </BoxTitle>
                </Container>
            </Wrapper>
        );
    }
}

const mapsStateToProps = state => ({category: state.category});

const mapDispatchToProps = dispatch => bindActionCreators(categoryActions, dispatch);

export default connect(mapsStateToProps, mapDispatchToProps)(Details)