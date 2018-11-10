export function getCategory(params) {
    return {type: 'GET_CATEGORY', payload: params}
}

export function getItemcategory(params) {
    return {type: 'GET_ITEM_CATEGORY', payload: params}
}
