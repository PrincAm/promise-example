import getJSON from './utils/getJSON.js';
import mockFetch from './utils/mockFetch.js';

// Mock global fetch function
globalThis.fetch = mockFetch;

const fetchAllData = async () => {
    try {
        // Use await with Promise.all to fetch multiple JSON files in parallel
        const [techItems, scienceItems, laptopDetails] = await Promise.all([
            getJSON('technology_items.json'),
            getJSON('science_items.json'),
            getJSON('laptops_details.json')
        ]);

        console.log('Fetched technology items:', techItems);
        console.log('Fetched science items:', scienceItems);
        console.log('Fetched laptop details:', laptopDetails);
    } catch (error) {
        console.error('An error occurred:', error.message);
    }
};

fetchAllData();