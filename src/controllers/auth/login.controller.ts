import * as Interfaces from "@interfaces";
import * as Success from "@success";

/**
 * @description Controller for login, just sends a success response
 */
const login: Interfaces.Controller.Sync = (_req, res) => {
	return res.json(new Success.Auth.UserLoggedIn());
};

export { login };
