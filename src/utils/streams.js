import { stat } from 'fs/promises';
import { createReadStream, createWriteStream} from 'fs';

import {createAbsolutePath} from "./pathes.js";

export const getStreams = async ({ directory, argument, additionalArgument }) => {
	const basePath = createAbsolutePath({ directory, argument })
	const futurePath = createAbsolutePath({ directory, argument: additionalArgument })
	
	const checkedBasePath = await stat(basePath)
	
	if(!checkedBasePath || checkedBasePath.isDirectory() ) {
		throw new Error()
	}
	
	const readableStream = createReadStream(basePath);
	const writeableStream = createWriteStream(futurePath);
	
	return { readableStream, writeableStream }
}
