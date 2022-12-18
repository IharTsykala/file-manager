import { join } from "path";

import { getCurrentDirectory, setCurrentDirectory } from "../../../utils/index.js";

export const up = async({ directory }) => {
	const newDirectory = join(directory, "..")
	setCurrentDirectory({ directory: newDirectory })
	
	return getCurrentDirectory()
}