import { arch } from "os";

import { getCurrentDirectory } from "../../../utils/index.js";

export const architecture = async () => {
	console.log("\x1b[32m", arch(), '\x1b[0m');
	return getCurrentDirectory()
};