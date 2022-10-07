import * as Interfaces from "@interfaces";

const logout: Interfaces.Controller.Sync = (req, res) => {
	req.logOut();
	return res.json("Logged Out Successfully");
};

export { logout };
