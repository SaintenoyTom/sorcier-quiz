const { spawn } = require('child_process');
const path = require('path');

// Defaults for SonarCloud
const defaultHost = 'https://sonarcloud.io';

const sonarHost = process.env.SONAR_HOST_URL || defaultHost;
const sonarToken = process.env.SONAR_TOKEN || '';

const args = [];
args.push(`-Dsonar.host.url=${sonarHost}`);
if (sonarToken) args.push(`-Dsonar.token=${sonarToken}`);

// If organization/project are in sonar-project.properties, no need to pass them here.

// Resolve local sonar-scanner binary
const scannerPath = path.join(__dirname, '..', 'node_modules', '.bin', process.platform === 'win32' ? 'sonar-scanner.cmd' : 'sonar-scanner');

// Use shell:true to ensure .cmd on Windows runs correctly and to be resilient across platforms
const child = spawn(scannerPath, args, { stdio: 'inherit', shell: true });

child.on('exit', (code) => {
  process.exit(code);
});

child.on('error', (err) => {
  console.error('Failed to spawn sonar-scanner:', err);
  process.exit(1);
});
