import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  RowItem,
  ButtomItem,
  ImageItem,
  DescriptionItem,
  TitleItem,
  SubTitleItem,
  FavoriteItem,
} from './Styles';

type Props = {
  id: number,
  title: string,
  subTitle: string,
  imgSrc: string,
  favorite: boolean,
  callAddFavorite: Function,
  callFunction: Function,
};

type State = {
  favorite: boolean,
};

class ListGeneral extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      favorite: this.props.favorite,
    };
  }

  addFavorite() {
    const favorite = !this.state.favorite;
    this.setState({ favorite });
    this.props.callAddFavorite({
      idItemCategory: this.props.id,
      favoriteItem: favorite,
    });
  }

  render() {
    return (
      <RowItem>
        <ButtomItem
          onPress={() => this.props.callFunction()}
          activeOpacity={0.8}
        >
          {this.props.imgSrc !== null &&
          this.props.imgSrc !== '' &&
          this.props.imgSrc !== undefined ? (
            <ImageItem
              source={{
                uri: this.props.imgSrc,
              }}
            />
          ) : null}
          <DescriptionItem>
            <TitleItem>{this.props.title}</TitleItem>
            <SubTitleItem>{this.props.subTitle || 'Not released'}</SubTitleItem>
          </DescriptionItem>
        </ButtomItem>
        <FavoriteItem onPress={() => this.addFavorite()}>
          <Icon
            name="star"
            size={32}
            color={this.state.favorite ? '#D9CA00' : '#bbb'}
          />
        </FavoriteItem>
      </RowItem>
    );
  }
}
export default ListGeneral;
