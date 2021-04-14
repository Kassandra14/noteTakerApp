const express = require('express');
const path = require('path');
const fs = require('fs');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3003;

// middleware stuff
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Starts the server
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
