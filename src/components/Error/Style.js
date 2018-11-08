import styled from 'styled-components/native';

const Container = styled.View `
    flex:1;
    align-items: center;
    justify-content: center;    
`;
const Paragraph = styled.Text `    
    margin-top: 5;
    margin-bottom:20;
    font-size: 16;   
    text-align: center;
  `;

const TitleParagraph = styled.Text `  
    margin-bottom:5;
    font-size: 22;  
    text-align: center;
    font-weight: bold;
    color: #cc0000;
  `;

export {Container, Paragraph, TitleParagraph}