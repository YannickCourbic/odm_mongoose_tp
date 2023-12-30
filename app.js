require("dotenv").config()
const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const morgan = require("./src/middlewares/request.info");
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan);
mongoose.connect(process.env.MONGO_URL, {
    dbName: process.env.DB_NAME,
})
    .then(() => console.log('Connexion à mongoDb réussie.'))
    .catch(() => console.log('Connexion à mongodb échouée'))





app.listen(process.env.port || 3000, () => {
    console.log(`Server running at http://localhost:${process.env.port || 3000}`)
})


