import * as Interfaces from "@interfaces";

const login: Interfaces.Controller.Sync = (_req, res) => {
	return res.json("User Logged In");
};

export { login };
