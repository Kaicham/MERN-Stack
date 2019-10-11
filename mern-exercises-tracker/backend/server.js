const express = require('express');
const app = express();
const port = 8000;

app.listen(port,() => {
    console.log('Server runnig at port: ', port);
});