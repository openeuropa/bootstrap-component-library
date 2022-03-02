#!/usr/bin/node

const { spawn } = require('child_process');
const theme = process.argv.slice(2)[0] || 'default';
const branch = process.argv.slice(2)[1] || 'master';

const args = [
	'chromatic',
	'--ci',
	'--force-rebuild',
	'--exit-once-uploaded',
	'--project-token=f44b33745fa7',
	`--build-script-name=build:chromatic:${theme}`,
	`--patch-build ${branch}...development`,
];

const buildPatch = spawn('npx', args, { stdio: "inherit", shell: true });

buildPatch.on('error', (err) => console.log(`${name}: ${err.message}`));
buildPatch.on('exit', () => {
	console.log(`Build patch process completed for the ${theme} styleguide on the ${branch} branch`)
});