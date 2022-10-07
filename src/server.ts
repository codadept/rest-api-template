import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import cookieSession from "cookie-session";
import passport from "passport";

dotenv.config();

import { initializePassport } from "@utils";
import * as Routes from "@routes";
import * as Constants from "@constants";

initializePassport();

const app = express();

app
	.use(
		cors({
			origin: "*",
			credentials: true,
		})
	)
	.use(helmet())
	.use(morgan(process.env.NODE_ENV === "development" ? "dev" : "short"))
	.use(cookieParser())
	.use(express.urlencoded({ extended: true }))
	.use(express.json())
	.use(
		cookieSession({
			maxAge: Constants.Auth.COOKIE_MAX_AGE,
			keys: [process.env.SECRET!],
		})
	)
	.use(passport.initialize())
	.use(passport.session());

app.use(`${Constants.Server.ROOT}/auth`, Routes.authRouter);

app.listen(Constants.Server.PORT, () => {
	console.log(`Server Listening to Port ${Constants.Server.PORT}`);
});
