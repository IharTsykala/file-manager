import { userInfo } from "os";

import { getCurrentDirectory } from "../../../utils/index.js";

export const username = async () => {
	console.log("\x1b[32m", userInfo().username, '\x1b[0m');
	return getCurrentDirectory()
};