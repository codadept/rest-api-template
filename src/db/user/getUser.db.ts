import { prisma } from "@utils";

const getUserFromIdentifier = async (identifier: string) => {
	return await prisma.user.findFirst({
		where: {
			OR: [{ email: identifier }, { username: identifier }],
		},
	});
};

const getUserFromEmail = async (email: string) => {
	return await prisma.user.findFirst({
		where: {
			email,
		},
	});
};

const getUserFromUsername = async (username: string) => {
	return await prisma.user.findFirst({
		where: {
			username,
		},
	});
};

export { getUserFromIdentifier, getUserFromEmail, getUserFromUsername };
