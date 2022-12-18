import { createReadStream, createWriteStream} from 'fs';
import { pipeline } from 'stream';

import {checkArguments, getCurrentDirectory} from "../../utils/index.js";


export const cp = async ({ directory, argument, additionalArgument }) => {
	if(!argument || !additionalArgument) {
		return
	}
	
	const { previouslyPath, futurePath } =
		await checkArguments({ directory, argument, additionalArgument })
		
	const readStream = createReadStream(previouslyPath)
	const writeStream = createWriteStream(futurePath)
		
	return new Promise((resolve, reject) => {
		pipeline(readStream, writeStream, (e) => {
			if (e) {
				reject(e);
			}
			resolve(getCurrentDirectory());
		});
	});
};