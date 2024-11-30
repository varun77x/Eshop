const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config()

async function main() {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Database connected");

        app.use("/", (req, res) => {
            res.send("Server is running!");
        });

        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        });
    } catch (err) {
        console.error("Error connecting to the database:", err);
    }
}
main();