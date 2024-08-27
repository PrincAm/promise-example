import getJSON from './utils/getJSON.js';
import mockFetch from './utils/mockFetch.js';

// Mock global fetch function
globalThis.fetch = mockFetch;

getJSON('categories.json')
    .then(categories => {
        console.log('Fetched categories:', categories);

        return getJSON(categories[0].itemsUrl);
    })
    .then(items => {
        console.log('Fetched items:', items);

        return getJSON(items[0].detailsUrl);
    })
    .then(details => {
        console.log('Fetched details:', details);
    })
    .catch(error => {
        console.error('An error has occurred:', error.message);
    });
