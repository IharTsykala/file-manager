import {getError, showCurrentDirectory} from "../../utils/index.js";

import { arrayBasicCommands } from "../../constants/index.js";

export const executeInputCommands = async ({ inputCommand, directory, argument, additionalArgument }) => {
	try {
		const outputCommand = await arrayBasicCommands.find(({ condition }) =>
			condition === inputCommand)?.action({ directory, argument, additionalArgument })

		if(!outputCommand) {
			getError('Invalid input')
		}
	} catch (e) {
		getError('Operation failed')
	} finally {
		showCurrentDirectory()
	}
}