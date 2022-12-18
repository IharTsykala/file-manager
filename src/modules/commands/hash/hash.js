import { readFile } from 'fs/promises';
import { createHash } from "crypto";

import { createAbsolutePath, getCurrentDirectory } from "../../../utils/index.js";

export const hash = async ({ directory, argument }) => {
	if(!argument) {
		return
	}
		
	const newPath = createAbsolutePath({ directory, argument })

	const buffer = await readFile(newPath);
	const hash = createHash('SHA256')
	const hashData = hash.update(buffer).digest('hex')
		
	console.log("\x1b[32m", hashData, '\x1b[0m');
	return getCurrentDirectory()
};