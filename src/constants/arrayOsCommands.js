import { architecture, eol, getCpus, homedir, username } from "../commands/operationSystem/index.js";

export const arrayOsCommands = [
	{
		condition: "--EOL",
		action: eol
	},
	{
		condition: "--cpus",
		action: getCpus
	},
	{
		condition: "--homedir",
		action: homedir
	},
	{
		condition: "--username",
		action: username
	},
	{
		condition: "--architecture",
		action: architecture
	}
]