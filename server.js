// Import express module
const express = require('express');

// Create an express application
const app = express();

// Define port number as 3000 or environment provided port number
const PORT = process.env.PORT || 3000;

// Dummy data to be served
const data = 
{
	"Category_Food": 5656.999999999999,
	"Category_Health": 1103.0000000000002,
	"Category_Living": 6181.0,
	"Category_Miscellaneous": 1622.9999999999998,
	"Category_Transport": 930.9999999999999
};

// Route to serve the dummy data
app.get('/data', (req, res) => {
    res.json(data);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});