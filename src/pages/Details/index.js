import React, {Component} from 'react';
import {Container, LargeImage, BoxTitle, Title} from './Styles';
import {Wrapper, ListDetails, Loader, Error} from '../../components';
import {bindActionCreators} from 'redux';
import * as categoryActions from '../../config/actions/category';
import * as favoritesActions from '../../config/actions/favorites';
import {connect} from 'react-redux';
import Api from '../../services/api';
import securityKey from '../../services/securityKey';
import {
    charactersDetails,
    comicsDetails,
    creatorsDetails,
    eventsDetails,
    seriesDetails,
    storiesDetails
} from '../../config/data/details';

class Details extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            data: [],
            display: false,
            error: false,
            loading: true,
            codeError: '',
            itens: []
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

    componentDidMount()
    {
        const {urlRefer, favoriteItem, idItemCategory, nameCategory} = this.props.category;

        let initialCallApi = `${urlRefer}/${idItemCategory}?${securityKey.urlKey()}`;
        this.apiSubmit(initialCallApi);
    }

    render()
    {
        const {itens, error, loading, codeError, externalUrl} = this.state;

        console.log('Deatails', itens);

        if (error) 
            return (
                <Wrapper>
                    <Container>
                        <Error codeError={codeError}/>
                    </Container>
                </Wrapper>
            );
        
        if (loading) 
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
                    {(itens[0].image !== undefined && itens[0].image !== null && itens[0].image !== '')
                        ? <LargeImage
                                source={{
                                uri: itens[0].image
                            }}/>
                        : null}
                    <BoxTitle>
                        <Title>
                            {itens[0].title}
                        </Title>
                    </BoxTitle>

                    <ListDetails data={itens[0].infoDetails}/>

                </Container>
            </Wrapper>
        );
    }

    async apiSubmit(urlRefer)
    {
        try {
            this.setState({loading: true});
            const response = await Api.get(urlRefer)
            let res = response.data.data.results;

            //console.log(res);

            let itens = [];
            switch (this.props.category.urlRefer) {
                case 'comics':
                    itens = res.map((item) => {
                        return comicsDetails(item)
                    });
                    break;
                case 'events':
                    itens = res.map((item) => {
                        return eventsDetails(item)
                    });
                    break;
                case 'series':
                    itens = res.map((item) => {
                        return seriesDetails(item)
                    });
                    break;

                case 'characters':
                    itens = res.map((item) => {
                        return charactersDetails(item)
                    });
                    break;
                case 'creators':
                    itens = res.map((item) => {
                        return creatorsDetails(item)
                    });
                    break;
                default:
                    break;
            }

            this.setState({itens: itens, loading: false});

        } catch (error) {

            console.error(error);
            this.setState({
                loading: false,
                error: true,
                codeError: (error.response !== undefined)
                    ? error.response.status
                    : 0
            });
        }
    }
}

const mapsStateToProps = state => ({category: state.category, favorites: state.favorites});

const mapDispatchToProps = dispatch => {
    return {
        actions: {
            categoryActions: bindActionCreators(categoryActions, dispatch),
            favoritesActions: bindActionCreators(favoritesActions, dispatch)
        }
    };
}
export default connect(mapsStateToProps, mapDispatchToProps)(Details)
