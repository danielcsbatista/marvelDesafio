import styled from 'styled-components/native';

const Container = styled.ScrollView `
      flex: 1;
      flex-direction: column;
`;

const LargeImage = styled.Image `
    flex:3;
`;

const BoxTitle = styled.View `
     flex: 1;
     background-color:#333;
     padding-left: 10;
     padding-top: 8;
`;

const Title = styled.Text `
    font-size:24;
    color: #eee;
`;

export {Container, LargeImage, BoxTitle, Title}