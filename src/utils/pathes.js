import { stat } from 'fs/promises';

import { join, isAbsolute } from "path";
import { fileURLToPath } from "url";

//functions
import {add} from "../commands/filesSystem/index.js";

//constants
import { PREFIX } from "../constants/index.js";

export const createAbsolutePath = ({ directory, argument }) => {
	if(isAbsolute(argument)) {
		return fileURLToPath(new URL("", PREFIX + argument))
	}

	const pathChanged = join(directory, argument);
	return  fileURLToPath(new URL("", PREFIX + pathChanged))
};

export const checkFuturePath = async ({ futurePathSource, fileName }) => {
	let futurePath
	let isFuturePath
	
	try {
		isFuturePath = await stat(futurePathSource)
	} catch (e) {
		console.log(e)
	}

	if(!isFuturePath || isFuturePath.isDirectory()) {
		await add({directory: futurePathSource, argument: fileName})
		
		futurePath = join(futurePathSource, fileName);
	} else {
		futurePath = futurePathSource;
	}
	
	return fileURLToPath(new URL("", PREFIX + futurePath))
};
