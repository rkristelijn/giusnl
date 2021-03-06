const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

const staticPath = path.join(__dirname, '/');
app.use(express.static(staticPath));

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});