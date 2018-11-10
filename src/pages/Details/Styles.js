import styled from 'styled-components/native';

const Container = styled.ScrollView `
      flex: 1;
      flex-direction: column;
`;

const LargeImage = styled.Image `
    flex:3;
    width: 100%;
    height: 150;
`;

const BoxTitle = styled.View `
     flex: 1;
     background-color:#850C07;
     padding-left: 25;
     padding-top: 8;
     padding-bottom: 8;
`;


const Title = styled.Text `
    font-size:24;
    color: #eee;
    font-weight: bold;
`;

export {Container, LargeImage, BoxTitle, Title}