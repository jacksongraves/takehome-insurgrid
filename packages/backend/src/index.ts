// Node.js modules for server setup
import express from "express";
import { config } from "dotenv";
config();

// Route & middleware imports
import routes from "./routes";
// import { errorMiddleware, notFoundMiddleware } from "./middlewares";

console.log("Hello world!123");
const t = 2;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Get root endpoint
app.get("/", (req, res) => {
	res.send("API is running...");
});

// Initialize Route Families
app.use("/api", routes);

// Specify middleware for global not found (404) and other error handling
// app.use(notFoundMiddleware);
// app.use(errorMiddleware);

// Grab the port
const PORT: number = parseInt(process.env.PORT || "5001") || 5001;

// Create a one-time listener message for starting the server
const listener = (): void =>
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);

// Launch the server and listen on target port
app.listen(PORT, listener);
