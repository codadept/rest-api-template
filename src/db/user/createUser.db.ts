import { hash } from "bcrypt";
import { prisma } from "@utils";

import * as Interfaces from "@interfaces";

const createUser = async (registerBody: Interfaces.Auth.RegisterBody) => {
	const { email, name, password, username } = registerBody;

	const user = await prisma.user.create({
		data: {
			email,
			name,
			username,
			password: await hash(password, 10),
		},
	});

	return user;
};

export { createUser };
