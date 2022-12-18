import { getCurrentDirectory } from "../../utils/index.js";

import {HOME_DIRECTORY} from "../../constants/index.js";

export const homedir = async () => {
	console.log("\x1b[32m", HOME_DIRECTORY, '\x1b[0m');
	return getCurrentDirectory()
};
