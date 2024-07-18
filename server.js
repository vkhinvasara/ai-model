// Import express module
const express = require('express');

// Create an express application
const app = express();

// Define port number as 3000 or environment provided port number
const PORT = process.env.PORT || 3000;

// Dummy data to be served
const data = 
     {
        "Category_Food": 4389.000000000001,
        "Category_Health": 21065.0,
        "Category_Living": 175906.99999999994,
        "Category_Miscellaneous": 18892.0,
        "Category_Transport": 8692.000000000002
    };

// Route to serve the dummy data
app.get('/data', (req, res) => {
    res.json(data);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});