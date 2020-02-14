// const express = require('express');
// const path = require('path');

// const app = express();
// // app.use(express.static('dist'));
// let PORT = process.env.PORT || 3300
// app.listen(PORT, ()=>{
//     console.log(`Server is running on ${PORT}`);
// })

import app from './server/App';
import path from 'path';
import serveStatic from 'serve-static';
import './server/config/db.config';

app.use('/', serveStatic(path.join(__dirname, '/dist')))

let PORT = process.env.PORT || 3300

app.listen(PORT, ()=>{
    console.log(`App is listening on port: ${PORT}`)
})
