import express from 'express';



import React from 'react';
import { renderToString } from 'react-dom/server'

import Component from './client/component';


const renderPage = (html = '') => {
  return `
    <html>
      <head>
        <link  rel="stylesheet" type="text/css" href="/dist/client.bundle.css"/>
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="/dist/client.bundle.js"></script>
      </body>
    </html>
  `
}


const app = express();


app.use('/dist', express.static('dist'));


app.get('/clientonly', (req, res) => {
    res
        .set('Content-Type', 'text/html')
        .status(200).send(renderPage());
});


app.get('/isomorphic', (req, res) => {

    const html = renderToString(<Component />);

    res
        .set('Content-Type', 'text/html')
        .status(200).send(renderPage(html));
});


app.listen(3000, () => console.log('listening on port 3000'));
