import React, {Component} from 'react';
import {
    ModalContainer,
    TitleModal,
    Modal,
    BoxModal,
    ButtonClose,
    ContainerList,
    ButtonFilter,
    TitleButton
} from './Styles';

class ModalList extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            display: false
        }
    }

    setModalVisible(visible) {
        this.setState({display: visible});
    }

    render()
    {
        return (
            <Modal
                visible={this.state.display}
                animationType="fade"
                transparent={true}
                onRequestClose={() => {}}>
                <ModalContainer>
                    <BoxModal>
                        <TitleModal>
                           {this.props.title}
                        </TitleModal>
                        <ContainerList>

                            {this.props.itemsOrder.map((item, index) => {
                                    return <ButtonFilter key={index} onPress={() => this.props.callFunction(item.value)}>
                                        <TitleButton>{item.name.toUpperCase()}</TitleButton>
                                    </ButtonFilter>
                                })}

                        </ContainerList>
                        <ButtonClose
                            onPress={() => {
                            this.setModalVisible(false);
                        }}>
                            <TitleButton>Close</TitleButton>
                        </ButtonClose>

                    </BoxModal>
                </ModalContainer>
            </Modal>
        )
    }
}
export default ModalList;
