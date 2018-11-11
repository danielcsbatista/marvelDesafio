export type MenuFooter = {
  data: Array<{
    icon: string,
    title: string,
    type: string,
  }>,
};
const menuFooter: MenuFooter = {
  data: [
    {
      icon: 'home',
      title: 'Home',
      type: 'HOME_VIEW',
    },
    {
      icon: 'search',
      title: 'Search',
      type: 'SEARCH_INPUT',
    },
    {
      icon: 'filter',
      title: 'Filter',
      type: 'FILTER_MODAL',
    },
    {
      icon: 'star',
      title: 'Favorites',
      type: 'STAR_MODAL',
    },
  ],
};

export default menuFooter;
