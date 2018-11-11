import type { AddFavorite, RemoveFavorite } from '../actions/favorites';
import { ADD_FAVORITE, REMOVE_FAVORITE } from '../actions/favorites';

export type FavoriteStore = Array<{
  idItemCategory: number,
  favoriteItem: boolean,
}>;

const favorites = (
  state: FavoriteStore = [],
  action: AddFavorite | RemoveFavorite
) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return [
        ...state,
        {
          idItemCategory: action.payload.idItemCategory,
          favoriteItem: action.payload.favoriteItem,
        },
      ];

    case REMOVE_FAVORITE:
      return action.payload;
    default:
      return state;
  }
};

export default favorites;
