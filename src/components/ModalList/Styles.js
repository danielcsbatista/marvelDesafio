import styled from 'styled-components/native';

const ModalContainer = styled.View `
       flex-direction:row;
        align-items: center;
        flex: 1;
        align-items:center;
        justify-content: center;
        background-color: rgba(0,0,0,0.5);     
`;

const Modal = styled.Modal `
        height: 100;
`;

const TitleModal = styled.Text `
        font-size:24;
        color:#666; 
`;

const BoxModal = styled.View `
      
        background-color:#fff; 
        flex: 0.9;
        border-radius:5;
        `;

const Button = styled.Button `      
        background-color:#841584;       
        border-radius:5;
        `;

export {ModalContainer, TitleModal, Modal, BoxModal, Button}