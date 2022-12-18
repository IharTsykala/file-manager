import { readdir } from 'fs/promises';

import {getCurrentDirectory} from "../../../utils/index.js";

export const ls = async ({directory}) => {
	const files = Array.from(await readdir(directory, { withFileTypes: true }))
		.map(file => ({...file, type: file.isFile() ? "file" : "directory"}))
		
	console.table(files)
	return getCurrentDirectory()
};