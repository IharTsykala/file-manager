import { executeInputCommands } from "./commands/index.js";

import {
	getCurrentDirectory,
	setCurrentDirectory,
	showCurrentDirectory,
	showExitMessage,
	showGreetingMessage
} from "./utils/index.js";

import {HOME_DIRECTORY} from "./constants/index.js";

const { stdin, exit, argv } = process

const [,, ...args] = argv

const USER_NAME =
	args.find(arg => arg.includes("username"))?.split('=')[1] ?? "unknown user";

process.stdin.resume();

process.on("SIGINT", () => {
	exit();
});

process.on('exit', () => {
	showExitMessage({ USER_NAME })
});

const app = () => {
	showGreetingMessage({ USER_NAME })
	setCurrentDirectory({ directory: HOME_DIRECTORY })
	showCurrentDirectory()
	
	stdin.on("data", async ( data ) => {
		const [inputCommand, argument, additionalArgument] = data.toString().trim().split(" ")
		const directory = getCurrentDirectory()
		
		await executeInputCommands({ inputCommand, directory, argument, additionalArgument})
	})
}

app()
