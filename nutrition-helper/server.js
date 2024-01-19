const express = require('express');

const cors = require('cors');

const app = express();

app.use(cors());

app.use('/', (req, res) => {
    res.send({
        token: 'test123'
    });
});

app.listen(9000, () => console.log('API is running on http://localhost:9000/'));