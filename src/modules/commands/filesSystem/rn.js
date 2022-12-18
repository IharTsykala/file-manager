import { rename } from 'fs/promises';

import {checkArguments, getCurrentDirectory} from "../../../utils/index.js";


export const rn = async ({ directory, argument, additionalArgument }) => {
	if(!argument || !additionalArgument) {
		return
	}
	const { previouslyPath, futurePath } =
		await	checkArguments({ directory, argument, additionalArgument })

	await rename(previouslyPath, futurePath);
		
	return getCurrentDirectory()
};