import {arrayOsCommands} from "../../../constants/index.js";

export { eol } from './eol.js';
export { getCpus } from './cpus.js';
export { homedir } from './homedir.js';
export { username } from './username.js';
export { architecture } from './architecture.js';

const findOsCommand = ({ directory, argument: inputCommand, additionalArgument: argument }) =>
	arrayOsCommands.find(({ condition }) => condition === inputCommand)?.action({ directory, argument })

export default findOsCommand