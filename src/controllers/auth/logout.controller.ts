import * as Interfaces from "@interfaces";
import * as Success from "@success";

const logout: Interfaces.Controller.Sync = (req, res) => {
	req.logOut();
	return res.json(new Success.Auth.UserLoggedOut());
};

export { logout };
