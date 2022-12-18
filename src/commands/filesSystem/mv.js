import { unlink } from 'fs/promises';

import { cp } from "./cp.js";

import { createAbsolutePath, getCurrentDirectory } from "../../utils/index.js";

export const mv = async ({ directory, argument, additionalArgument }) => {
	if(!argument || !additionalArgument) {
		return
	}
		
	const basePath = createAbsolutePath({directory, argument})
	const futurePath = createAbsolutePath({directory, argument: additionalArgument})
		
	const resultCopy = await cp({directory, argument: basePath, additionalArgument: futurePath})
		
	if(resultCopy) {
		await unlink(basePath)
		return getCurrentDirectory()
	}
};