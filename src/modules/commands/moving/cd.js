import { access } from 'fs/promises';
import { resolve } from "path";

import {createAbsolutePath, getCurrentDirectory, setCurrentDirectory} from "../../../utils/index.js";

export const cd = async ({ directory, argument }) => {
	if(!argument) {
		return
	}
		
	const newPath = createAbsolutePath({ directory, argument })
		
	await access(resolve(newPath))
	await setCurrentDirectory({ directory: newPath })
		
	return getCurrentDirectory()
}