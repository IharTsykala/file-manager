import { createReadStream, createWriteStream} from 'fs';
import { pipeline } from 'stream';

import path from 'path';

//utils
import {checkArguments, getCurrentDirectory} from "../../utils/index.js";
import {checkFuturePath} from "../../utils/pathes.js";

export const cp = async ({ directory, argument, additionalArgument }) => {
	if(!argument || !additionalArgument) {
		return
	}
	
	let { previouslyPath, futurePath } =
		await checkArguments({ directory, argument, additionalArgument })
	
	const isFailFuturePath = !!path.extname(additionalArgument);
	
	const futurePathSource = isFailFuturePath ? futurePath.split('/').slice(0, -1).join('/') : futurePath
	
	const fileName = isFailFuturePath ? futurePath.split('/').pop() : argument
	
	const newFuturePath = await checkFuturePath({futurePathSource, fileName})
	
	const readStream = createReadStream(previouslyPath)
	const writeStream = createWriteStream(newFuturePath)
		
	return new Promise((resolve, reject) => {
		pipeline(readStream, writeStream, (e) => {
			if (e) {
				console.log(e)
				reject(e);
			}
			resolve(getCurrentDirectory());
		});
	});
};
