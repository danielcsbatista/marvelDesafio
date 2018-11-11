import styled from 'styled-components/native';

const ModalContainer = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Modal = styled.Modal`
  height: 100;
`;

const TitleModal = styled.Text`
  font-size: 20;
  color: #fff;
  text-align: center;
  margin-top: 10;
  margin-bottom: 12;
  margin-left: 10;
  margin-right: 10;
  border-radius: 3;
  background-color: #333;
  padding-bottom: 3;
  padding-top: 3;
`;

const ContainerList = styled.View`
  padding-left: 10;
  padding-right: 10;
  padding-bottom: 12;
`;

const ButtonFilter = styled.TouchableOpacity`
  background-color: #b21009;
  border-radius: 5;
  margin-bottom: 3;
`;

const TitleButton = styled.Text`
  color: #fff;
  font-size: 16;
  text-align: center;
  padding-left: 5;
  padding-right: 5;
  padding-top: 5;
  padding-bottom: 5;
`;

const BoxModal = styled.View`
  background-color: #f4f4ea;
  flex: 0.9;
  border-radius: 5;
`;

const ButtonClose = styled.TouchableOpacity`
  background-color: #1683e0;
  border-bottom-left-radius: 5;
  border-bottom-right-radius: 5;
`;

export {
  ModalContainer,
  TitleModal,
  Modal,
  BoxModal,
  ButtonClose,
  ContainerList,
  ButtonFilter,
  TitleButton,
};
