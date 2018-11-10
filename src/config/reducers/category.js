const GET_CATEGORY = 'GET_CATEGORY';
const GET_ITEM_CATEGORY = 'GET_ITEM_CATEGORY';

const category = (state = [], action) => {

    switch (action.type) {
        case GET_CATEGORY:
            return {nameCategory: action.payload.nameCategory, urlRefer: action.payload.urlRefer, paramSearch: action.payload.paramSearch, orderBy: action.payload.orderBy}
        case GET_ITEM_CATEGORY:
            return {
                ...state,
                urlRefer: action.payload.urlRefer,
                idItemCategory: action.payload.idItemCategory,
                favoriteItem: action.payload.favoriteItem
            }
        default:
            return state;
    }
}

export default category