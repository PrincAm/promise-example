import mockData from '../data/mockData.js';

const mockFetch = (url) => {
    return new Promise((resolve, reject) => {
        const data = mockData[url];
        if (data) {
            resolve({
                ok: true,
                json: () => Promise.resolve(data)
            });
        } else {
            reject(new Error(`Resource not found: ${url}`));
        }
    });
};

export default mockFetch;
