import { ErrorRequestHandler } from "express";
import * as Interfaces from "@interfaces";
import * as Errors from "@error";

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
		return res.json(new Errors.Auth.UserNotLoggedIn());
	}
};

const isNotLoggedIn: Interfaces.Middleware.Sync = (req, res, next) => {
	if (!req.isAuthenticated()) {
		return next();
	} else {
		return res.json(new Errors.Auth.UserAlreadyLoggedIn());
	}
};

export { passportErrorHandler, isLoggedIn, isNotLoggedIn };
