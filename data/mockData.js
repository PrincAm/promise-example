const mockData = {
    "categories.json": [
        {
            "id": 1,
            "name": "Technology",
            "itemsUrl": "technology_items.json"
        },
        {
            "id": 2,
            "name": "Science",
            "itemsUrl": "science_items.json"
        }
    ],
    "technology_items.json": [
        {
            "id": 101,
            "name": "Laptops",
            "detailsUrl": "laptops_details.json"
        },
        {
            "id": 102,
            "name": "Smartphones",
            "detailsUrl": "smartphones_details.json"
        }
    ],
    "science_items.json": [
        {
            "id": 201,
            "name": "Physics",
            "detailsUrl": "physics_details.json"
        },
        {
            "id": 202,
            "name": "Biology",
            "detailsUrl": "biology_details.json"
        }
    ],
    "laptops_details.json": {
        "id": 101,
        "name": "Laptops Details",
        "description": "Details about different laptop models"
    },
    "smartphones_details.json": {
        "id": 102,
        "name": "Smartphones Details",
        "description": "Details about various smartphone models"
    },
    "physics_details.json": {
        "id": 201,
        "name": "Physics Details",
        "description": "Details about physics concepts"
    },
    "biology_details.json": {
        "id": 202,
        "name": "Biology Details",
        "description": "Details about biological topics"
    }
};

export default mockData;
