const express = require("express");
const routes = require("./routes");
// import sequelize connection
const sequelize = require("./config/connection");

const productRoutes = require("./routes/product-routes");
const tagRoutes = require("./routes/tag-routes");
const categoryRoutes = require("./routes/category-routes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
  })
  .catch((err) => {
    console.log("Error syncing sequelize models", err);
  });
