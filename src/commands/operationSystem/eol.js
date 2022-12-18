import { EOL } from "os";

import { getCurrentDirectory } from "../../utils/index.js";

export const eol = async () => {
	console.log("\x1b[32m", `${JSON.stringify(EOL)}`, '\x1b[0m');
	return getCurrentDirectory()
};