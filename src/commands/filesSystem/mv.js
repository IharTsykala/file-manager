import { unlink } from 'fs/promises';

import { cp } from "./cp.js";

//utils
import {getCurrentDirectory} from "../../utils/index.js";

export const mv = async ({ directory, argument, additionalArgument }) => {
	if(!argument || !additionalArgument) {
		return
	}

	const resultCopy = await cp({directory, argument, additionalArgument})
	
	if(resultCopy) {
		await unlink(argument)
		return getCurrentDirectory()
	}
};
