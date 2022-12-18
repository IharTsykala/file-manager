import { EOL, cpus } from "os";

import { getCurrentDirectory } from "../../utils/index.js";

const { stdout } = process

export const getCpus = async () => {
	const amountCpus = cpus() ?? []
		
	stdout.write(`Amount of CPUs: ${amountCpus.length} ${EOL}`);
	amountCpus?.forEach(cpu => {
		stdout.write(`${cpu.model} ${cpu.speed / 10} GHz ${EOL}`);;
	});
		
	return getCurrentDirectory()
};
