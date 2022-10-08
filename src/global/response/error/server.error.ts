import * as Error from "@error";

class InternalServerError extends Error.Error.CustomError {
	constructor() {
		super("Internal Server Error", 500);
	}
}

export { InternalServerError };
