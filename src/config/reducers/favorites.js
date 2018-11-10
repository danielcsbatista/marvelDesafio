const ADD_FAVORITE = 'ADD_FAVORITE';
const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
const favorites = (state = [], action) => {

    switch (action.type) {
        case ADD_FAVORITE:
            return [...state, {idItemCategory: action.payload.idItemCategory, favoriteItem: action.payload.favoriteItem}]
        
        case REMOVE_FAVORITE:
            return  action.payload
        default:
        return state;
    }
}

export default favorites