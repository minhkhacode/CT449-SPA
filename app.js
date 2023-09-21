const express = require('express');
const cors = require('cors');

const app = express();

const contactsRouter = require('./app/routes/contactRoute');

app.use(cors());
app.use(express.json());

app.use('/api/contacts/', contactsRouter);

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to contact book application.",
    })
})

module.exports = app;