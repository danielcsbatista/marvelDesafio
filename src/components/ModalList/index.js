import React, {Component} from 'react';
import {ModalContainer, TitleModal, Modal, BoxModal, Button} from './Styles';

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
                            teste 3
                        </TitleModal>
                        <Button
                            onPress={() => {
                            this.setModalVisible(false);
                        }}
                            title="Close"/>
                    </BoxModal>
                </ModalContainer>
            </Modal>
        )
    }
}
export default ModalList;
