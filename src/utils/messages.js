export const showGreetingMessage = ({ USER_NAME }) =>
	console.log("\x1b[32m", `Welcome to the File Manager, ${USER_NAME}!`, '\x1b[0m');

export const showExitMessage = ({ USER_NAME }) =>
	console.log("\x1b[32m", `Thank you for using File Manager, ${USER_NAME}, goodbye!`, '\x1b[0m');
