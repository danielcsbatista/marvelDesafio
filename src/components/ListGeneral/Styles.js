import styled from 'styled-components/native';

const RowItem = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  padding-right: 2;
  margin-top: 3;
`;

const ButtomItem = styled.TouchableOpacity`
  flex: 10;
  flex-direction: row;
  padding-right: 2;
  margin-top: 3;
`;

const ImageItem = styled.Image`
  flex: 2;
  width: 50;
  height: 50;
  margin-right: 8;
  margin-left: 5;
  border-radius: 3;
`;

const DescriptionItem = styled.View`
  flex: 8;
`;

const TitleItem = styled.Text`
  color: #b21009;
  font-size: 18;
  font-weight: bold;
`;

const SubTitleItem = styled.Text`
  color: #666;
  font-size: 14;
  text-align: justify;
`;

const FavoriteItem = styled.TouchableOpacity`
  flex: 1;
  width: 50;
  height: 60;
  margin-left: 5;
  padding-top: 15;
  margin-right: 10;
`;
export {
  RowItem,
  ButtomItem,
  ImageItem,
  DescriptionItem,
  TitleItem,
  SubTitleItem,
  FavoriteItem,
};
