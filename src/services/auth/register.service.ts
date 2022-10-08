import * as Interfaces from "@interfaces";
import * as DB from "@db";
import * as Constants from "@constants";
import * as Errors from "@error";

// Returns JSON Response
const checkUser = async (registerBody: Interfaces.Auth.RegisterBody) => {
	const { email, username } = registerBody;

	if (await DB.User.getUserFromUsername(username)) {
		return new Errors.Auth.UsernameExist();
	}

	if (await DB.User.getUserFromEmail(email)) {
		return new Errors.Auth.EmailExist();
	}

	return null;
};

const validateUserInput = (registerBody: Interfaces.Auth.RegisterBody) => {
	const { email, password } = registerBody;

	if (!Constants.Auth.EMAIL_REGEX.test(email)) {
		return new Errors.Auth.InvalidEmail();
	}

	if (!Constants.Auth.PASSWORD_REGEX.test(password)) {
		return new Errors.Auth.InvalidPassword();
	}

	return null;
};

export { checkUser, validateUserInput };
