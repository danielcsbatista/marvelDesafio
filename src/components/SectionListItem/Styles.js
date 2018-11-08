import styled from 'styled-components/native';

const Container = styled.View `
        flex: 1;
        flex-direction: column;
        background-color: rgb(98,197,184);
        padding-top: 5;
        padding-left: 5;
        padding-right: 5;
        padding-bottom: 5;
`;

const TextItem = styled.Text `
        font-size: 16;    
        color: rgb(173,252,250);
        margin-left: 20;
        margin-right: 10;
`;

const TituloItem = styled.Text `
        font-size: 18;
        font-weight: bold;
        color: rgb(173,252,250);
        margin-left: 20;
        margin-right: 10;
`;

const BorderBottom = styled.View `      
        background-color:rgb(77,120,140);
        height:1;
        margin:4;
        margin-left:20;
        margin-right:10;
 `;

export {Container, TextItem, TituloItem, BorderBottom}