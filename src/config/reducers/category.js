export default function category(state = [], action) {
    switch (action.type) {
        case 'GET_CATEGORY':
            return [
                ...state, {
                    nameCategory: action.name
                }
            ]
        default:
            return state;
    }
}