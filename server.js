// Require the Express module
const express = require('express');
const child_process = require('child_process');

// Create an Express web application
const app = express();

// Specify how to respond to GET /
app.get('/', (req, res) => {
    // Run the system `fortune` command and respond with the message
    child_process.exec('fortune', (error, message) => {
        if(error === null) {
            res.send(Date() + "<br> Your fortune is: <br>" + message);
        } 
        else {
            res.send('Error: ' + error);
        }
    })
});

// Start listening for HTTP requests on port 3000
app.listen(3000, () => {
    console.log('Server started');
});