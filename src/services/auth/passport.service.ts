import bcrypt from "bcrypt";
import { VerifyFunction } from "passport-local";

import * as DB from "@db";
import * as Interfaces from "@interfaces";

import { User } from "@prisma/client";

const verifyUser: VerifyFunction = async (identifier, password, done) => {
	// Error Handling
	const user = await DB.User.getUserFromIdentifier(identifier);

	if (!user) {
		return done("User not found.", false);
	}

	const passwordMatch = await bcrypt.compare(password, user.password);

	if (!passwordMatch) {
		return done("Username or Password doesn't match", false);
	}

	return done(null, user);
};

const serializeUserCallbackFunction: Interfaces.Passport.PassportSerializeUserCallback =
	(user, done) => {
		done(null, (user as User).email);
	};

const deserializeUserCallbackFunction: Interfaces.Passport.PassportDeserializeUserCallback =
	async (data, done) => {
		// Proper Error Handling
		try {
			const user = await DB.User.getUserFromEmail(data as string);

			done(null, user);
		} catch (err) {
			done("User Not Found", false);
		}
	};

export {
	verifyUser,
	serializeUserCallbackFunction,
	deserializeUserCallbackFunction,
};
