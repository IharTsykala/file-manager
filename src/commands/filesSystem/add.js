import { writeFile } from 'fs/promises';
import { join } from "path";

import { getCurrentDirectory } from "../../utils/index.js";

export const add = async ({ directory, argument }) => {
	if(!argument) {
		return
	}
	
	const newDirectory = join(directory, argument)
		
	await writeFile(newDirectory, "", { flag: "wx" });
		
	return getCurrentDirectory()
};
