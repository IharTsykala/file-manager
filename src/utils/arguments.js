import { stat } from 'fs/promises';

import {createAbsolutePath} from "./pathes.js";

export const checkArguments = async ({ directory, argument, additionalArgument }) => {

	const previouslyPath = createAbsolutePath({ directory, argument });
	const futurePath = createAbsolutePath({ directory, argument: additionalArgument });
	
	const checkedPath = await stat(previouslyPath)
	
	if(!checkedPath || checkedPath.isDirectory()) {
		throw new Error()
	}
	
	return { previouslyPath, futurePath }
}