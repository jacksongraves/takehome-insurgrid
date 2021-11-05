// Node.js modules for server setup
import express from "express";
import cors from "cors";
import { createProxyMiddleware } from "http-proxy-middleware";
import { config } from "dotenv";

config();

// @routes
import routes from "./routes";

// @middlewares
import { errorMiddleware } from "./middlewares";

const app = express();

// CORS needs to be enabled for running on localhost
app.use(cors());
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
app.use(errorMiddleware);

// Grab the port
const PORT: number = parseInt(process.env.HOST_PORT || "5000") || 5000;

// Create a one-time listener message for starting the server
const listener = (): void =>
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);

// Proxy if necessary
if (process.env.USE_PROXY) {
	app.use(
		createProxyMiddleware({
			target: `http://localhost:${process.env.CLIENT_PORT || 3000}`,
			ws: true,
			logLevel: "silent",
		})
	);
}

app.listen(PORT, listener);

process.once("SIGUSR2", function () {
	process.kill(process.pid, "SIGUSR2");
});

process.on("SIGINT", function () {
	// this is only called on ctrl+c, not restart
	process.kill(process.pid, "SIGINT");
});
