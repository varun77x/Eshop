const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config()
const cors = require('cors');

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}))

const bookRoutes = require('./src/books/book.route');
const orderRoutes = require("./src/orders/order.route")
const userRoutes =  require("./src/users/user.route")
const adminRoutes = require("./src/stats/admin.stats")

app.use("/api/books", bookRoutes)
app.use("/api/orders", orderRoutes)
app.use("/api/auth", userRoutes)
app.use("/api/admin", adminRoutes)

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