import * as Error from "@error";

class UserNotFound extends Error.Error.CustomError {
	constructor() {
		super("User Not Found", 404);
	}
}

class UserNotLoggedIn extends Error.Error.CustomError {
	constructor() {
		super("User Not Logged In", 404);
	}
}

class UserAlreadyLoggedIn extends Error.Error.CustomError {
	constructor() {
		super("User Already Logged In", 404);
	}
}

class UsernameOrPasswordNotMatch extends Error.Error.CustomError {
	constructor() {
		super("User Not Found", 404);
	}
}

class UsernameExist extends Error.Error.CustomError {
	constructor() {
		super("Username Exists", 404);
	}
}

class EmailExist extends Error.Error.CustomError {
	constructor() {
		super("Email Exists", 404);
	}
}

class InvalidEmail extends Error.Error.CustomError {
	constructor() {
		super("Invalid Email Entered", 404);
	}
}

class InvalidPassword extends Error.Error.CustomError {
	constructor() {
		super(
			"Password Must Contain 1 Special Character, 1 Digit and 1 Capital Character",
			404
		);
	}
}

export {
	UserNotFound,
	UserNotLoggedIn,
	UserAlreadyLoggedIn,
	UsernameOrPasswordNotMatch,
	UsernameExist,
	EmailExist,
	InvalidEmail,
	InvalidPassword,
};
