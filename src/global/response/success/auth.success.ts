import * as Success from "@success";

class UserLoggedIn extends Success.Success.CustomSuccess {
	constructor() {
		super("User Logged In Successfully.", 200);
	}
}

class UserLoggedOut extends Success.Success.CustomSuccess {
	constructor() {
		super("User Logged Out Successfully.", 200);
	}
}

class UserCreated extends Success.Success.CustomSuccess {
	constructor() {
		super("User Created Successfully.", 200);
	}
}

export { UserLoggedIn, UserLoggedOut, UserCreated };
