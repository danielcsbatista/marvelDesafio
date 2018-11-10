export function addFavorite(params) {
    return {type: 'ADD_FAVORITE', payload: params}
}

export function removeFavorite(params) {
    return {type: 'REMOVE_FAVORITE', payload: params}
}

