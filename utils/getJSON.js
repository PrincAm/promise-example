const getJSON = (url) => {
    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    });
};

export default getJSON;
