const charactersDetails = (item) => {
    return {
        infoDetails: [
            {
                data: [
                    {
                        item: item.description,
                        type: 'text'
                    }
                ],
                title: 'Description'
            }, {
                data: [
                    {
                        item: item.urls,
                        type: 'urllist'
                    }
                ],
                title: 'More information'
            }
        ],
        title: item.name,
        image: `${item.thumbnail.path}.${item.thumbnail.extension}`
    }
}

const comicsDetails = (item) => {
    return {
        infoDetails: [
            {
                data: [
                    {
                        item: item.description,
                        type: 'text'
                    }
                ],
                title: 'Description'
            }, {
                data: [
                    {
                        item: item.description,
                        type: 'text'
                    }
                ],
                title: 'Format'
            }, {
                data: [
                    {
                        item: item.issueNumber,
                        type: 'text'
                    }
                ],
                title: 'Issue'
            }, {
                data: [
                    {
                        item: item.isbn,
                        type: 'text'
                    }
                ],
                title: 'Isbn'
            }, {
                data: [
                    {
                        item: item.ean,
                        type: 'text'
                    }
                ],
                title: 'Ean'
            }, {
                data: [
                    {
                        item: item.pageCount,
                        type: 'text'
                    }
                ],
                title: 'Pages'
            }, {
                data: [
                    {
                        item: item.urls,
                        type: 'urllist'
                    }
                ],
                title: 'More information'
            }
        ],
        title: item.title,
        image: `${item.thumbnail.path}.${item.thumbnail.extension}`
    }
}

const creatorsDetails = (item) => {
    return {
        infoDetails: [
            {
                data: [
                    {
                        item: item.urls,
                        type: 'urllist'
                    }
                ],
                title: 'More information'
            }
        ],
        title: item.fullName,
        image: `${item.thumbnail.path}.${item.thumbnail.extension}`
    }
}

const eventsDetails = (item) => {
    return {
        infoDetails: [
            {
                data: [
                    {
                        item: item.description,
                        type: 'text'
                    }
                ],
                title: 'Description'
            }, {
                data: [
                    {
                        item: item.start,
                        type: 'text'
                    }, {
                        item: item.end,
                        type: 'text'
                    }
                ],
                title: 'Date'
            }, {
                data: [
                    {
                        item: item.urls,
                        type: 'urllist'
                    }
                ],
                title: 'More information'
            }
        ],
        title: item.title,
        image: `${item.thumbnail.path}.${item.thumbnail.extension}`
    }
}

const seriesDetails = (item) => {
    return {
        infoDetails: [
            {
                data: [
                    {
                        item: item.description,
                        type: 'text'
                    }
                ],
                title: 'Description'
            }, {
                data: [
                    {
                        item: item.startYear,
                        type: 'text'
                    }, {
                        item: item.endYear,
                        type: 'text'
                    }
                ],
                title: 'Date'
            }, {
                data: [
                    {
                        item: item.urls,
                        type: 'urllist'
                    }
                ],
                title: 'More information'
            }
        ],
        title: item.title,
        image: `${item.thumbnail.path}.${item.thumbnail.extension}`
    }
}

export {charactersDetails, comicsDetails, creatorsDetails, eventsDetails, seriesDetails}