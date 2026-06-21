require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./database/connection");
const seedDatabase = require("./database/seed");
const config = require("./config");
const apiRoutes = require("./routes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);
app.use(errorHandler);

const startServer = async () => {
  await connectDB();
  await seedDatabase();

  app.listen(config.port, () => {
    console.log(`Node server running on port ${config.port}`);
    console.log(`Python service expected at ${config.pythonServiceUrl}`);
  });
};

startServer();
