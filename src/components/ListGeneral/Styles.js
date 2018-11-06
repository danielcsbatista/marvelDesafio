import styled from 'styled-components/native';

const RowItem = styled.View `
        flex-direction: row;
        align-items: center;
        background-color: #fff;        
        padding-right:2;
        margin-top:3;
`;

const ImageItem = styled.Image `
        flex: 2;
        width: 50;
        height: 50;
        margin-right: 5;
        margin-left:5;
        border-radius: 3; 
`;

const DescriptionItem = styled.View `
        flex: 8;`;

const TitleItem = styled.Text `
        color: #B21009;
        font-size: 18;
        font-weight: bold;
`;

const SubTitleItem = styled.Text `
         color: #666;
        font-size: 14;   
`;

const FavoriteItem = styled.View `
        flex: 1;
        width: 50;
        height: 60;
        margin-left: 5;
        padding-top: 15;
        margin-right: 8;
`;
export {
        RowItem,
        ImageItem,
        DescriptionItem,
        TitleItem,
        SubTitleItem,
        FavoriteItem
}