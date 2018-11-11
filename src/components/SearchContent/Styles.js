import styled from 'styled-components/native';

const Content = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  background-color: #000;
  padding-left: 3;
  padding-top: 7;
  padding-bottom: 3;
  height: 45;
`;

const InputSearch = styled.TextInput`
  flex: 8;
  color: #333;
  font-size: 12;
  background-color: #eaeaea;
  border-radius: 5;
  margin-right: 10;
  height: 35;
`;

const ButtomSearch = styled.TouchableOpacity`
  padding-top: 5;
  width: 35;
  height: 35;
  background-color: #000;
`;

export { Content, InputSearch, ButtomSearch };
