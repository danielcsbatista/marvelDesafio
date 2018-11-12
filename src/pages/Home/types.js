export type Data = {
  urlRefer: string,
  title: string,
  paramSearch: string,
  orderBy: string,
  imgSrc: string,
};
export type Content = {
  urlRefer: string,
  nameCategory: string,
  paramSearch: string,
  orderBy: Array<{
    name: string,
    value: string,
  }>,
};

export type Favorites = {
  idItemCategory: number,
  favoriteItem: boolean,
};

export type Itemcategory = {
  urlRefer: string,
  idItemCategory: number,
  favoriteItem: boolean,
};
