import styled from 'styled-components/native';

const RowItem = styled.View`
        flex-direction: row;
        align-items: center;
        background-color: #0497cf;
        border-radius:5;  
        padding-right:2;
`;

const ImageItem = styled.Image`
        flex: 2;
        width: 50;
        height: 50;
`;

const DescriptionItem = styled.View`
        flex: 8;
`;
export {RowItem, ImageItem, DescriptionItem}