const GET_CATEGORY = 'GET_CATEGORY';
const category = (state = [], action) => {

    switch (action.type) {
        case GET_CATEGORY:
            return {nameCategory: action.payload.nameCategory, urlRefer: action.payload.urlRefer, paramSearch: action.payload.paramSearch, orderBy: action.payload.orderBy}

        default:
            return state;
    }
}

export default category