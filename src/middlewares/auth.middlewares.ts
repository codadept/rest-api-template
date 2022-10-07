import { ErrorRequestHandler } from "express";
import * as Interfaces from "@interfaces";

const passportErrorHandler: ErrorRequestHandler = async (
	err,
	_req,
	res,
	next
) => {
	if (err) {
		return res.json(err);
	} else {
		return next();
	}
};

const isLoggedIn: Interfaces.Middleware.Sync = (req, res, next) => {
	if (req.isAuthenticated()) {
		return next();
	} else {
		return res.json("User Not Logged In");
	}
};

const isNotLoggedIn: Interfaces.Middleware.Sync = (req, res, next) => {
	if (!req.isAuthenticated()) {
		return next();
	} else {
		return res.json("User Already Logged In");
	}
};

export { passportErrorHandler, isLoggedIn, isNotLoggedIn };
