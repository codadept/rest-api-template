import * as Interfaces from "@interfaces";
import * as DB from "@db";
import * as Constants from "@constants";

// Returns JSON Response
const checkUser = async (registerBody: Interfaces.Auth.RegisterBody) => {
	const { email, username } = registerBody;

	if (await DB.User.getUserFromUsername(username)) {
		return "Username exist";
	}

	if (await DB.User.getUserFromEmail(email)) {
		return "Email exist";
	}

	return null;
};

const validateUserInput = (registerBody: Interfaces.Auth.RegisterBody) => {
	const { email, password } = registerBody;

	if (!Constants.Auth.EMAIL_REGEX.test(email)) {
		return "Invalid Email";
	}

	if (!Constants.Auth.PASSWORD_REGEX.test(password)) {
		return "Invalid Password";
	}

	return null;
};

export { checkUser, validateUserInput };
