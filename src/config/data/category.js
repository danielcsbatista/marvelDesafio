const characterImage = require('../../shared/images/characters.png');
const comicImage = require('../../shared/images/comics.png');
const eventsImage = require('../../shared/images/events.png');
const creatorsImage = require('../../shared/images/creators.png');
const seriesImage = require('../../shared/images/series.png');

export type ObjectDataCategory = {
  title: string,
  imgSrc: string,
  urlRefer: string,
  paramSearch: string,
  orderBy: Array<{
    name: string,
    value: string,
  }>,
};

export type CategoryData = {
  data: Array<ObjectDataCategory>,
};

const categoryData: CategoryData = {
  data: [
    {
      title: 'CHARACTERS',
      imgSrc: characterImage,
      urlRefer: 'characters',
      paramSearch: 'nameStartsWith',
      orderBy: [
        {
          name: 'Name asc.',
          value: 'name',
        },
        {
          name: 'Modified asc.',
          value: 'modified',
        },
        {
          name: 'Name desc.',
          value: '-name',
        },
        {
          name: 'Modified desc.',
          value: '-modified',
        },
      ],
    },
    {
      title: 'COMICS',
      imgSrc: comicImage,
      urlRefer: 'comics',
      paramSearch: 'titleStartsWith',
      orderBy: [
        {
          name: 'On sale data asc.',
          value: 'onsaleData',
        },
        {
          name: 'Modified asc.',
          value: 'modified',
        },
        {
          name: 'Title asc.',
          value: 'title',
        },
        {
          name: 'Issue number asc.',
          value: 'issueNumber',
        },
        {
          name: 'On sale data desc.',
          value: '-onsaleData',
        },
        {
          name: 'Modified desc.',
          value: '-modified',
        },
        {
          name: 'Title desc.',
          value: '-title',
        },
        {
          name: 'Issue number desc.',
          value: '-issueNumber',
        },
      ],
    },
    {
      title: 'EVENTS',
      imgSrc: eventsImage,
      urlRefer: 'events',
      paramSearch: 'nameStartsWith',
      orderBy: [
        {
          name: 'Name asc.',
          value: 'name',
        },
        {
          name: 'Modified asc.',
          value: 'modified',
        },
        {
          name: 'start date asc.',
          value: 'startDate',
        },
        {
          name: 'Name desc.',
          value: '-name',
        },
        {
          name: 'Modified desc.',
          value: '-modified',
        },
        {
          name: 'Start date asc.',
          value: '-startDate',
        },
      ],
    },
    {
      title: 'CREATORS',
      imgSrc: creatorsImage,
      urlRefer: 'creators',
      paramSearch: 'nameStartsWith',
      orderBy: [
        {
          name: 'Last name asc.',
          value: 'lastName',
        },
        {
          name: 'First name asc.',
          value: 'firstName',
        },
        {
          name: 'Middle name asc.',
          value: 'middleName',
        },
        {
          name: 'Suffix asc.',
          value: 'suffix',
        },
        {
          name: 'Modified asc.',
          value: 'modified',
        },
        {
          name: 'Last name desc.',
          value: '-lastName',
        },
        {
          name: 'First name desc.',
          value: '-firstName',
        },
        {
          name: 'Middle name desc.',
          value: '-middleName',
        },
        {
          name: 'Suffix desc.',
          value: '-suffix',
        },
        {
          name: 'Modified desc.',
          value: '-modified',
        },
      ],
    },
    {
      title: 'SERIES',
      imgSrc: seriesImage,
      urlRefer: 'series',
      paramSearch: 'titleStartsWith',
      orderBy: [
        {
          name: 'Title asc.',
          value: 'title',
        },
        {
          name: 'Modified asc.',
          value: 'modified',
        },
        {
          name: 'Start Year asc.',
          value: 'startYear',
        },
        {
          name: 'Title desc.',
          value: '-title',
        },
        {
          name: 'Modified desc.',
          value: '-modified',
        },
        {
          name: 'Start Year desc.',
          value: '-startYear',
        },
      ],
    },
  ],
};

export default categoryData;
