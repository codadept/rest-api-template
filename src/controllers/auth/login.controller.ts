import * as Interfaces from "@interfaces";
import * as Success from "@success";

const login: Interfaces.Controller.Sync = (_req, res) => {
	return res.json(new Success.Auth.UserLoggedIn());
};

export { login };
