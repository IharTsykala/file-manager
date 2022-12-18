import { pipeline } from 'stream';
import { createBrotliCompress } from 'zlib';

import { getCurrentDirectory, getError, getStreams } from "../../../utils/index.js";

export const compress = async ({ directory, argument, additionalArgument }) => {
		if(!argument || !additionalArgument) {
				return
		}
		
		const { readableStream, writeableStream } = await getStreams({ directory, argument, additionalArgument })
		
		await pipeline(readableStream, createBrotliCompress(), writeableStream, (e)=> e ? getError(e) : null)
		
		return getCurrentDirectory()
};