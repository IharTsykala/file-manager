import os from "../modules/commands/operationSystem/index.js";

import { cd, ls, up } from "../modules/commands/moving/index.js";
import { add, cat, cp, mv, rm, rn } from "../modules/commands/filesSystem/index.js";
import { compress, decompress } from "../modules/commands/zip/index.js";
import { getExitApp } from "../modules/commands/exit/index.js";
import { hash } from "../modules/commands/hash/index.js";


export const arrayBasicCommands = [
	{
		condition: "up",
		action: up
	},
	{
		condition: "cd",
		action: cd
	},
	{
		condition: "ls",
		action: ls
	},
	{
		condition: "cat",
		action: cat
	},
	{
		condition: "add",
		action: add
	},
	{
		condition: "rn",
		action: rn
	},
	{
		condition: "cp",
		action: cp
	},
	{
		condition: "mv",
		action: mv
	},
	{
		condition: "rm",
		action: rm
	},
	{
		condition: "os",
		action: os
	},
	{
		condition: "hash",
		action: hash
	},
	{
		condition: "compress",
		action: compress
	},
	{
		condition: "decompress",
		action: decompress
	},
	{
		condition: ".exit",
		action: getExitApp
	},
]