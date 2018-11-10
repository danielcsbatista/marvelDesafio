import styled from 'styled-components/native';

const Container = styled.View `
        flex: 1;
        flex-direction: row;      
        padding-top: 5;
        padding-left: 5;
        padding-right: 5;
        padding-bottom: 5;
`;

const TextItem = styled.Text `
        font-size: 16;    
        color: #333;
        margin-left: 20;
        margin-right: 10;
        padding-top:10;
        padding-bottom:10;
`;

const ContainerListUrl = styled.View `
        flex: 1;        
        padding-top: 20;
        padding-left: 5;
        padding-right: 5;
        padding-bottom: 5;
`;

const ButtomLink = styled.TouchableOpacity `
         background-color:#E0C600;       
        border-radius:5;        
        margin-bottom:3;
`;

const TitleButtomLink = styled.Text `
        color: #fff;
        font-size:16;
        text-align: center;
        padding-left: 5;
        padding-right: 5;
        padding-top: 5;
        padding-bottom: 5;
`;
export {
        Container,
        TextItem,
        ContainerListUrl,
        ButtomLink,
        TitleButtomLink
}