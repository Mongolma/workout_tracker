const express = require("express");
const logger = require("morgan");
// const { db } = require("./models/stats");
const routes = require("./routes");
const htmlRoutes = require("./htmlRoutes");
const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//routes
app.use(routes);
app.use(htmlRoutes);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});