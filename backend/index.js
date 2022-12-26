const express = require('express');
const cors = require('cors');
const app = express();
const port = 4444;

app.use(cors({
  origin: '*',
  optionsSuccessStatus: 200
}));

app.get('/helloworld', (req, res) => {
    res.status(200).json({
        message: 'Hello World!'
    });
});

app.listen(port, () => {
    console.log(`Super simple backend listening on port ${port}...`);
});
