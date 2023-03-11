const express = require('express');
const colors = require('colors')
require('dotenv').config();
const connectDB = require('./config/db.js')
const blogRouter = require('./routes/BlogRoutes');

const app = express();

const PORT = process.env.PORT || 8000;
connectDB()

app.use(express.json());
app.use(express.urlencoded({ extended: false}))

app.use('/api/blogs', blogRouter)


app.listen(PORT, () => console.log(`Server started running at ${PORT}`.blue.underline))