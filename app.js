const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World! - This is Saurav Lab for Node js application deployment'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
