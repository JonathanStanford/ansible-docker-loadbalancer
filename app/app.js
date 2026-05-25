const express = require('express');
const os = require('os');
const app = express();
const port = 8080;

// Simple health check endpoint for monitoring/load balancers
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// Main route serving the load balancing demo
app.get('/', (req, res) => {
    const hostname = os.hostname();
    res.send(`<h1>Hello from Lab!</h1><p>Served by container/host: <strong>${hostname}</strong></p>`);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});