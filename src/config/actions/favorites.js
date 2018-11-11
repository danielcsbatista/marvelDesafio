import type { Favorites } from '../../pages/Home/types';
import type { ExtractReturn } from '../../utlis/ExtractReturn';

export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export function addFavorite(params: Favorites) {
  return { type: ADD_FAVORITE, payload: params };
}

export function removeFavorite(params: Favorites) {
  return { type: REMOVE_FAVORITE, payload: params };
}

export type AddFavorite = ExtractReturn<typeof addFavorite>;
export type RemoveFavorite = ExtractReturn<typeof removeFavorite>;
