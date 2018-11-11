import type { Content, Itemcategory } from '../../pages/Home/types';
import type { ExtractReturn } from '../../utlis/ExtractReturn';

export const GET_CATEGORY = 'GET_CATEGORY';
export const GET_ITEM_CATEGORY = 'GET_ITEM_CATEGORY';

export function getCategory(params: Content) {
  return { type: GET_CATEGORY, payload: params };
}

export function getItemcategory(params: Itemcategory) {
  return { type: GET_ITEM_CATEGORY, payload: params };
}

export type GetCategory = ExtractReturn<typeof getCategory>;
export type GetItemcategory = ExtractReturn<typeof getItemcategory>;
