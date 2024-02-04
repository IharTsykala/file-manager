import { rename } from 'fs/promises';

//utils
import {checkArguments, getCurrentDirectory} from "../../utils/index.js";
import {add} from "./add.js";
import {checkFuturePath} from "../../utils/pathes.js";


export const rn = async ({ directory, argument, additionalArgument }) => {
	if(!argument || !additionalArgument) {
		return
	}
	
	let { previouslyPath, futurePath } =
		await	checkArguments({ directory, argument, additionalArgument })
	
	await rename(previouslyPath, futurePath);
		
	return getCurrentDirectory()
};
