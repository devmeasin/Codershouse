console.clear();

const express = require('express');
const cors = require('cors');
const connectDB = require('./database');
const { PORT } = require('./config');
const router = require('./routes');

const port = PORT || 8000;
const corsOption = {
    credentials: true,
    origin: ['http://localhost:3000']
}

// DataBase Connection Here
connectDB();

const app = express();

app.use(cors(corsOption));

app.use(express.json());
app.use(router);

app.listen(port, () => console.log(`server is running on port ${port}`));
