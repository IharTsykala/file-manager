import { stat } from 'fs/promises';
import { createReadStream } from 'fs';

import { createAbsolutePath, getCurrentDirectory } from "../../../utils/index.js";

export const cat = async ({ directory, argument }) => {
	if(!argument) {
		return
	}
	
	let resultData = ""
	const newPath = createAbsolutePath({directory, argument})

	const checkedPath = await stat(newPath)
		
	if(!checkedPath || checkedPath.isDirectory()) {
		throw new Error()
	}
	const stream = createReadStream(newPath);
	stream.on("data", (chunk) => (resultData = resultData + chunk))
	stream.on("end", () => console.log("\x1b[32m", resultData, '\x1b[0m'))
	
	return getCurrentDirectory()
};