import styled from 'styled-components/native';

const Container = styled.ScrollView `
  flex: 1;
  flex-direction: column;
`;

const LargeImage = styled.Image `
  flex: 3;
  width: 100%;
  height: 150;
`;

const BoxTitle = styled.View `
  flex: 1;
  background-color: #850c07;
  padding-left: 25;
  padding-top: 8;
  padding-bottom: 8;
`;

const Title = styled.Text `
  font-size: 24;
  color: #eee;
  font-weight: bold;
`;

const FooterDetails = styled.View `
  background-color: #dfe0d3;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 30;
  padding-right: 30;
  border-top-width: 0.5;
  border-top-color: #666;
`;

const ButtonFooter = styled.TouchableOpacity `
  flex-direction: row;
  justify-content: space-between;
  height: 45;
  border-radius: 5;
  background-color: #666;
`;

const TitleButtonFooter = styled.Text `
  font-size: 16;
  color: #fff;
  padding-left: 10;
  padding-top: 8;
  padding-bottom: 8;
`;

export {
  Container,
  LargeImage,
  BoxTitle,
  Title,
  FooterDetails,
  ButtonFooter,
  TitleButtonFooter
};
