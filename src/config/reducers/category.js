import type { GetCategory, GetItemcategory } from '../actions/category';
import { GET_CATEGORY, GET_ITEM_CATEGORY } from '../actions/category';

type CategoryStore = {
  urlRefer?: string,
  idItemCategory?: number,
  favoriteItem?: boolean,
  orderBy?: Array<{
    name: String,
    value: String,
  }>,
};

const category = (
  state: CategoryStore = {},
  action: GetCategory | GetItemcategory
) => {
  switch (action.type) {
    case GET_CATEGORY:
      return {
        nameCategory: action.payload.nameCategory,
        urlRefer: action.payload.urlRefer,
        paramSearch: action.payload.paramSearch,
        orderBy: action.payload.orderBy,
      };
    case GET_ITEM_CATEGORY:
      return {
        ...state,
        urlRefer: action.payload.urlRefer,
        idItemCategory: action.payload.idItemCategory,
        favoriteItem: action.payload.favoriteItem,
      };
    default:
      return state;
  }
};

export default category;
