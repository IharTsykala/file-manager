import { pipeline } from 'stream';
import { createBrotliDecompress } from 'zlib';

import { getCurrentDirectory, getError, getStreams } from "../../utils/index.js";

export const decompress = async ({ directory, argument, additionalArgument }) => {
		if(!argument || !additionalArgument) {
				return
		}
	
		const { readableStream, writeableStream } = await getStreams({ directory, argument, additionalArgument })
		
		await pipeline(readableStream, createBrotliDecompress(), writeableStream, (e)=> e ? getError(e) : null)
		
		return getCurrentDirectory()
};