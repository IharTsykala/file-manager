import { join, isAbsolute } from "path";
import { fileURLToPath } from "url";

import { PREFIX } from "../constants/index.js";

export const createAbsolutePath = ({ directory, argument }) => {
	if(isAbsolute(argument)) {
		return fileURLToPath(new URL("", PREFIX + argument))
	}

	const pathChanged = join(directory, argument);
	return  fileURLToPath(new URL("", PREFIX + pathChanged))
};