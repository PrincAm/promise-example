import getJSON from './utils/getJSON.js';
import mockFetch from './utils/mockFetch.js';

// Mock global fetch function
globalThis.fetch = mockFetch;

Promise.all([
    getJSON('categories.json'),
    getJSON('technology_items.json'),
    getJSON('science_items.json')
])
    .then(results => {
        const categories = results[0];
        const techItems = results[1];
        const scienceItems = results[2];

        console.log('Fetched categories:', categories);
        console.log('Fetched technology items:', techItems);
        console.log('Fetched science items:', scienceItems);

        // Fetch details of first item in each category
        return Promise.all([
            getJSON(techItems[0].detailsUrl),
            getJSON(scienceItems[0].detailsUrl)
        ]);
    })
    .then(detailsResults => {
        const laptopDetails = detailsResults[0];
        const physicsDetails = detailsResults[1];

        console.log('Fetched laptop details:', laptopDetails);
        console.log('Fetched physics details:', physicsDetails);
    })
    .catch(error => {
        console.error('An error has occurred:', error.message);
    });