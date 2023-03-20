//DLy7dDDgc73Lg28Z

const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/book-routes");
const cors = require('cors')
const app = express();
 app.use(express.json());
 app.use(cors());
app.use("/books", router)

mongoose.connect("mongodb+srv://admin:DLy7dDDgc73Lg28Z@cluster0.3wxquvm.mongodb.net/bookstore?retryWrites=true&w=majority").then(() => console.log('Connected to the Database'))
    .then(() => {
        app.listen(5000)
    }).catch((err) => console.log(err));

 

