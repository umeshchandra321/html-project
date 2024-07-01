const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const app = express();
const port = 7000;

// Enable CORS for all routes
app.use(cors());

// Serve static files (optional)
app.use(express.static('public'));

// Endpoint to serve CSV data as JSON for 'one.csv'
app.get('/api/data/one', (req, res) => {
    const results = [];
    fs.createReadStream(path.join(__dirname, 'data.csv'))
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            res.json(results);
        });
});

// Endpoint to serve CSV data as JSON for 'two.csv'
app.get('/api/data/two', (req, res) => {
    const results = [];
    fs.createReadStream(path.join(__dirname, 'clinics_dilsuknagar.csv'))
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            res.json(results);
        });
});

// Example endpoint for other CSV files if 
app.get('/api/data/three', (req, res) => {
    const results = [];
    fs.createReadStream(path.join(__dirname, 'beautyparlour_dilsukhnagar.csv'))
       .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            res.json(results);
        });
});

//endpoit to serve csv data as json for 'forth'
app.get('/api/data/four', (req, res) => {
    const results = [];
    fs.createReadStream(path.join(__dirname, 'petshops_dilsukhnagar.csv'))
       .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            res.json(results);
        });
});

 

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
