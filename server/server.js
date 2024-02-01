const app = require("./app.js");
const connectDatabase = require("./db/db.js");
const port = process.env.PORT || 8000;

// Handling uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server for Handling uncaught Exception`);
});

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: ".env",
  });
}

// connect database
connectDatabase();

app.get("/", (req, res) => {
  res.send("Demo-Ecommerce Server is running..");
});

app.listen(port, () => {
  console.log(`Demo-Ecommerce is running on port ${port}`);
});

// Unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Shutting down server for ${err.message}`);
  console.log(`Shutting down the server due to Unhandled promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});
