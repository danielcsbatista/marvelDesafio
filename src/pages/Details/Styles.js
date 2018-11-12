import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  flex-direction: column;
`;

const LargeImage = styled.Image`
  flex: 5;
  width: 100%;
  height: 150;
`;

const BoxTitle = styled.View`
  flex: 1;
  background-color: #850c07;
  padding-left: 25;
  padding-top: 8;
  padding-bottom: 8;
`;

const Title = styled.Text`
  font-size: 24;
  color: #eee;
  font-weight: bold;
`;

const FooterDetails = styled.View`
  background-color: #dfe0d3;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 10;
  padding-right: 10;
  padding-top: 8;
  padding-bottom: 2;
  border-top-width: 0.5;
  border-top-color: #666;
  flex: 2;
`;

const ButtonFooter = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  height: 40;
  border-radius: 5;
  background-color: #666;
  align-items: center;
  padding-left: 10;
  padding-right: 10;
`;

const TitleButtonFooter = styled.Text`
  font-size: 16;
  color: #fff;
  padding-left: 10;
  padding-top: 8;
  padding-bottom: 8;
`;

const WrapperInformations = styled.View`
  flex: 13;
`;

export {
  Container,
  LargeImage,
  BoxTitle,
  Title,
  FooterDetails,
  ButtonFooter,
  TitleButtonFooter,
  WrapperInformations,
};
