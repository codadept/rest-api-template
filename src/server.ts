import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

dotenv.config();

const app = express();

app.use(helmet());
app.use(morgan(process.env.NODE_ENV === "development" ? "dev" : "common"));

app.listen(5000, () => {
	console.log("Server Listening to Port 5000");
});
