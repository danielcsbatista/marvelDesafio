import React from 'react';
import {
  ModalContainer,
  TitleModal,
  Modal,
  BoxModal,
  ButtonClose,
  ContainerList,
  ButtonFilter,
  TitleButton,
} from './Styles';

type State = {
  display: boolean,
};

type Props = {
  title: string,
  itemsOrder: Array<{
    value: string,
    name: string,
  }>,
  callFunction: Function,
};

class ModalList extends React.Component<Props, State> {
  state = {
    display: false,
  };

  setModalVisible(visible: boolean) {
    this.setState({ display: visible });
  }

  render() {
    return (
      <Modal
        visible={this.state.display}
        animationType="fade"
        transparent={true}
        onRequestClose={() => {}}
      >
        <ModalContainer>
          <BoxModal>
            <TitleModal>{this.props.title}</TitleModal>
            <ContainerList>
              {this.props.itemsOrder.map((item, index) => (
                <ButtonFilter
                  key={index}
                  onPress={() => this.props.callFunction(item.value)}
                >
                  <TitleButton>{item.name.toUpperCase()}</TitleButton>
                </ButtonFilter>
              ))}
            </ContainerList>
            <ButtonClose
              onPress={() => {
                this.setModalVisible(false);
              }}
            >
              <TitleButton>Close</TitleButton>
            </ButtonClose>
          </BoxModal>
        </ModalContainer>
      </Modal>
    );
  }
}
export default ModalList;
