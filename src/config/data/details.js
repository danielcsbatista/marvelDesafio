type CharactersDetails = {
  data: Array<string>,
  infoDetails: Array<Object>,
  description: string,
  urls: string,
  name: string,
  type: string,
  thumbnail: {
    path: string,
    extension: string,
  },
};

const charactersDetails = (item: CharactersDetails) => ({
  infoDetails: [
    {
      data: [
        {
          item: item.description,
          type: 'text',
        },
      ],
      title: 'Description',
    },
    {
      data: [
        {
          item: item.urls,
          type: 'urllist',
        },
      ],
      title: 'More information',
    },
  ],
  title: item.name,
  image: `${item.thumbnail.path}.${item.thumbnail.extension}`,
});

type ComicsDetails = {
  data: Array<string>,
  infoDetails: Array<Object>,
  description: string,
  type: string,
  urls: string,
  isbn: string,
  ean: string,
  pageCount: number,
  title: string,
  issueNumber: number,
  thumbnail: {
    path: string,
    extension: string,
  },
};

const comicsDetails = (item: ComicsDetails) => ({
  infoDetails: [
    {
      data: [
        {
          item: item.description,
          type: 'text',
        },
      ],
      title: 'Description',
    },
    {
      data: [
        {
          item: item.description,
          type: 'text',
        },
      ],
      title: 'Format',
    },
    {
      data: [
        {
          item: item.issueNumber,
          type: 'text',
        },
      ],
      title: 'Issue',
    },
    {
      data: [
        {
          item: item.isbn,
          type: 'text',
        },
      ],
      title: 'Isbn',
    },
    {
      data: [
        {
          item: item.ean,
          type: 'text',
        },
      ],
      title: 'Ean',
    },
    {
      data: [
        {
          item: item.pageCount,
          type: 'text',
        },
      ],
      title: 'Pages',
    },
    {
      data: [
        {
          item: item.urls,
          type: 'urllist',
        },
      ],
      title: 'More information',
    },
  ],
  title: item.title,
  image: `${item.thumbnail.path}/landscape_xlarge.${item.thumbnail.extension}`,
});

type CreatorsDetails = {
  data: Array<string>,
  infoDetails: Array<Object>,
  urls: string,
  title: string,
  fullName: string,
  type: string,
  thumbnail: {
    path: string,
    extension: string,
  },
};

const creatorsDetails = (item: CreatorsDetails) => ({
  infoDetails: [
    {
      data: [
        {
          item: item.urls,
          type: 'urllist',
        },
      ],
      title: 'More information',
    },
  ],
  title: item.fullName,
  image: `${item.thumbnail.path}/landscape_xlarge.${item.thumbnail.extension}`,
});

type SeriesDetails = {
  data: Array<string>,
  infoDetails: Array<Object>,
  type: string,
  title: string,
  startYear: number,
  endYear: number,
  description: string,
  urls: string,
  thumbnail: {
    path: string,
    extension: string,
  },
};

const seriesDetails = (item: SeriesDetails) => ({
  infoDetails: [
    {
      data: [
        {
          item: item.description,
          type: 'text',
        },
      ],
      title: 'Description',
    },
    {
      data: [
        {
          item: item.startYear,
          type: 'text',
        },
        {
          item: item.endYear,
          type: 'text',
        },
      ],
      title: 'Date',
    },
    {
      data: [
        {
          item: item.urls,
          type: 'urllist',
        },
      ],
      title: 'More information',
    },
  ],
  title: item.title,
  image: `${item.thumbnail.path}/landscape_xlarge.${item.thumbnail.extension}`,
});

type EventsDetails = {
  data: Array<string>,
  infoDetails: Array<Object>,
  urls: string,
  title: string,
  start: string,
  end: string,
  type: string,
  description: string,
  thumbnail: {
    path: string,
    extension: string,
  },
};

const eventsDetails = (item: EventsDetails) => ({
  infoDetails: [
    {
      data: [
        {
          item: item.description,
          type: 'text',
        },
      ],
      title: 'Description',
    },
    {
      data: [
        {
          item: item.start,
          type: 'text',
        },
        {
          item: item.end,
          type: 'text',
        },
      ],
      title: 'Date',
    },
    {
      data: [
        {
          item: item.urls,
          type: 'urllist',
        },
      ],
      title: 'More information',
    },
  ],
  title: item.title,
  image: `${item.thumbnail.path}/landscape_xlarge.${item.thumbnail.extension}`,
});

export {
  charactersDetails,
  comicsDetails,
  creatorsDetails,
  eventsDetails,
  seriesDetails,
};
