import getJSON from './utils/getJSON.js';
import mockFetch from './utils/mockFetch.js';
// Mock global fetch function
globalThis.fetch = mockFetch;

Promise.race([
    getJSON('technology_items.json'),
    getJSON('science_items.json')
])
    .then(result => {
        console.log('First resolved data:', result);
    })
    .catch(error => {
        console.error('An error has occurred:', error.message);
    });