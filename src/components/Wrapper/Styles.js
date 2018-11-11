import styled from 'styled-components/native';

const WrapperApp = styled.View`
  flex: 1;
`;

const TopMarvel = styled.View`
  flex: 2;
  background-color: #666;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;
const ContentBody = styled.View`
  flex: 8;
  background-color: #fafaeb;
`;

const Image = styled.Image`
  width: 190;
  height: 100;
`;

const BackImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export { WrapperApp, TopMarvel, ContentBody, Image, BackImage };
