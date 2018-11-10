const category = {
    data: [
        {
            title: 'CHARACTERS',
            imgSrc: require('../../shared/images/characters.png'),
            urlRefer: 'characters',
            paramSearch: 'nameStartsWith',
            orderBy: [
                {
                    name: 'Name asc.',
                    value: 'name'
                }, {
                    name: 'Modified asc.',
                    value: 'modified'
                }, {
                    name: 'Name desc.',
                    value: '-name'
                }, {
                    name: 'Modified desc.',
                    value: '-modified'
                }
            ]
        }, {
            title: 'COMICS',
            imgSrc: require('../../shared/images/comics.png'),
            urlRefer: 'comics',
            paramSearch: 'titleStartsWith',
            orderBy: [
                {
                    name: 'On sale data asc.',
                    value: 'onsaleData'
                }, {
                    name: 'Modified asc.',
                    value: 'modified'
                }, {
                    name: 'Title asc.',
                    value: 'title'
                }, {
                    name: 'Issue number asc.',
                    value: 'issueNumber'
                }, {
                    name: 'On sale data desc.',
                    value: '-onsaleData'
                }, {
                    name: 'Modified desc.',
                    value: '-modified'
                }, {
                    name: 'Title desc.',
                    value: '-title'
                }, {
                    name: 'Issue number desc.',
                    value: '-issueNumber'
                }
            ]
        }, {
            title: 'EVENTS',
            imgSrc: require('../../shared/images/events.png'),
            urlRefer: 'events',
            paramSearch: 'nameStartsWith',
            orderBy: [
                {
                    name: 'Name asc.',
                    value: 'name'
                }, {
                    name: 'Modified asc.',
                    value: 'modified'
                }, {
                    name: 'start date asc.',
                    value: 'startDate'
                }, {
                    name: 'Name desc.',
                    value: '-name'
                }, {
                    name: 'Modified desc.',
                    value: '-modified'
                }, {
                    name: 'Start date asc.',
                    value: '-startDate'
                }
            ]
        }, {
            title: 'CREATORS',
            imgSrc: require('../../shared/images/creators.png'),
            urlRefer: 'creators',
            paramSearch: 'nameStartsWith',
            orderBy: [
                {
                    name: 'Last name asc.',
                    value: 'lastName'
                }, {
                    name: 'First name asc.',
                    value: 'firstName'
                }, {
                    name: 'Middle name asc.',
                    value: 'middleName'
                }, {
                    name: 'Suffix asc.',
                    value: 'suffix'
                }, {
                    name: 'Modified asc.',
                    value: 'modified'
                }, {
                    name: 'Last name desc.',
                    value: '-lastName'
                }, {
                    name: 'First name desc.',
                    value: '-firstName'
                }, {
                    name: 'Middle name desc.',
                    value: '-middleName'
                }, {
                    name: 'Suffix desc.',
                    value: '-suffix'
                }, {
                    name: 'Modified desc.',
                    value: '-modified'
                }
            ]
        }, {
            title: 'SERIES',
            imgSrc: require('../../shared/images/series.png'),
            urlRefer: 'series',
            paramSearch: 'titleStartsWith',
            orderBy: [
                {
                    name: 'Title asc.',
                    value: 'title'
                }, {
                    name: 'Modified asc.',
                    value: 'modified'
                }, {
                    name: 'Start Year asc.',
                    value: 'startYear'
                }, {
                    name: 'Title desc.',
                    value: '-title'
                }, {
                    name: 'Modified desc.',
                    value: '-modified'
                }, {
                    name: 'Start Year desc.',
                    value: '-startYear'
                }
            ]
        }
    ]
};

export {category}