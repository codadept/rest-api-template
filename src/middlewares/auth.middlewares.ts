import { ErrorRequestHandler } from "express";
import * as Interfaces from "@interfaces";
import * as Errors from "@error";

/**
 * @description Error handler for when passport throws error, because passport sends HTML file, but want to send error response
 */
const passportErrorHandler: ErrorRequestHandler = async (
  err,
  _req,
  res,
  next
) => {
  if (err) {
    return res.json(new Errors.Auth.AuthenticationError());
  } else {
    return next();
  }
};

/**
 * @description Middleware to check whether the user is logged in, if not then sends an error response
 */
const isLoggedIn: Interfaces.Middleware.Sync = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.json(new Errors.Auth.UserNotLoggedIn());
  }
};

/**
 * @description Middleware to check whether the user is not logged in, if logged in then sends an error response
 */
const isNotLoggedIn: Interfaces.Middleware.Sync = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return next();
  } else {
    return res.json(new Errors.Auth.UserAlreadyLoggedIn());
  }
};

export { passportErrorHandler, isLoggedIn, isNotLoggedIn };
