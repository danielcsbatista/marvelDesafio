export default function category(state = [], action) {

    switch (action.type) {
        case 'GET_CATEGORY':
            return {nameCategory: action.payload.nameCategory, urlRefer: action.payload.urlRefer}

        default:
            return state;
    }
}