import styled from 'styled-components/native';

const Container = styled.View `
      flex: 1;
      flex-direction: column;
`;

const ScrollItens = styled.ScrollView `
    flex:11;
    background-color:#ff0;
`;

const Footer = styled.View `
     flex-direction: row;     
     background-color: #FAFAEB; 
     justify-content: space-between;  
     align-content: center;   
`;

const CategoryListTitle = styled.View `
     flex: 1;
     background-color:#000;
`;

const TitleCategory = styled.Text `
    font-size:24;
    color: #eee;
`;

export {Container, ScrollItens, Footer, CategoryListTitle, TitleCategory}