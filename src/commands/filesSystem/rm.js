import { unlink } from 'fs/promises';

import {createAbsolutePath, getCurrentDirectory} from "../../utils/index.js";

export const rm = async ({ directory, argument }) => {
	if(!argument) {
		return
	}
		
	const newPath = createAbsolutePath({directory, argument})
		
	await unlink(newPath)
	
	return getCurrentDirectory()
};