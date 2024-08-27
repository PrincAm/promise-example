import getJSON from './utils/getJSON.js';
import mockFetch from './utils/mockFetch.js';

// Mock global fetch function
globalThis.fetch = mockFetch;

const fetchData = async () => {
    try {
        // Fetch the categories
        const categories = await getJSON('categories.json');
        console.log('Fetched categories:', categories);

        // Fetch items from the first category (Technology)
        const techItems = await getJSON(categories[0].itemsUrl);
        console.log('Fetched technology items:', techItems);

        // Fetch details of the first item in Technology (Laptops)
        const laptopDetails = await getJSON(techItems[0].detailsUrl);
        console.log('Fetched laptop details:', laptopDetails);
    } catch (error) {
        console.error('An error has occurred:', error.message);
    }
};

fetchData();