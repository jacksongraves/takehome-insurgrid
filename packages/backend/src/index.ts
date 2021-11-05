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
//
// else {
// 	// Not good practice; works for local development, because we can traverse the relative path from `local-api` to `local-client` package, but better practice is to (sym)link to the actual package.
// 	// app.use(express.static("../../local-client/build"));

// 	// Also not good practice: we aren't guaranteed to have the same relative path for node_modules, and express does not handle symlinks well.
// 	// app.use(express.static("../node_modules/local-client/build"));

// 	// A workaround for express.static using path module, but this will likely only work on a client machine
// 	// NOTE: Because we are using this as an npm_module via an organization, need to ensure the relative path indicates that!
// 	const packagePath = require.resolve(
// 		"@jsnote-jrg/local-client/build/index.html"
// 	);
// 	app.use(express.static(path.dirname(packagePath)));
// }

// Launch the server and listen on target port
app.listen(PORT, listener);
