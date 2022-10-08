import * as Interfaces from "@interfaces";
import * as Success from "@success";

/**
 * @description Controller for logging out for user, uses the function logout provided by `passport`
 */
const logout: Interfaces.Controller.Sync = (req, res) => {
  req.logOut();
  return res.json(new Success.Auth.UserLoggedOut());
};

export { logout };
