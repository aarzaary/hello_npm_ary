import chalk from 'chalk';
import random from 'random';

function hellonpm() {
	return chalk.red(`[${random.int(1,1000)}] Hello NPM`);
}

export default hellonpm