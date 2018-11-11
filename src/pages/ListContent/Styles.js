import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  flex-direction: column;
`;

const ScrollItens = styled.FlatList`
  flex: 10;
  background-color: #f4f4ea;
`;

const Footer = styled.View`
  background-color: #dfe0d3;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 30;
  padding-right: 30;
  border-top-width: 0.5;
  border-top-color: #666;
`;

const CategoryListTitle = styled.View`
  flex: 1;
  background-color: #333;
  padding-left: 10;
  padding-top: 8;
`;

const TitleCategory = styled.Text`
  font-size: 24;
  color: #eee;
`;
const Row = styled.View`
  flex: 1.2;
`;

export {
  Container,
  ScrollItens,
  Footer,
  CategoryListTitle,
  TitleCategory,
  Row,
};
