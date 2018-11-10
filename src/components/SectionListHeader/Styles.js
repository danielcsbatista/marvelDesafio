import styled from 'styled-components/native';

const Container = styled.View `
        flex: 1;
        background-color: #1268B2;
        height:45;
`;

const TituloItem = styled.Text `
        font-size: 18;
        font-weight: bold;
        color: rgb(255,255,255);   
        padding-left:25;     
        padding-top:10;        
`;

export {Container, TituloItem}