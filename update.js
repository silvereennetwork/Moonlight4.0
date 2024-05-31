const { exec } = require('child_process');
const path = require('path');
const os = require('os');

// Function to execute shell commands
function executeCommand(command) {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(stderr);
            } else {
                resolve(stdout);
            }
        });
    });
}

// Function to detect OS type and version
function detectOS() {
    const platform = os.platform();
    switch (platform) {
        case 'linux':
            return detectLinuxDistro();
        case 'darwin':
            return 'macOS';
        case 'win32':
            return 'Windows';
        default:
            return 'unknown';
    }
}

// Function to detect Linux distribution
async function detectLinuxDistro() {
    const osReleaseFile = '/etc/os-release';
    try {
        const data = await executeCommand(`cat ${osReleaseFile}`);
        if (data.includes('Ubuntu')) return 'Ubuntu';
        if (data.includes('Debian')) return 'Debian';
        if (data.includes('Fedora')) return 'Fedora';
        if (data.includes('CentOS')) return 'CentOS';
        // Add more distributions as needed
        return 'Linux';
    } catch {
        return 'Linux';
    }
}

// Function to install crontab on different OSs
async function installCrontab(osType) {
    switch (osType) {
        case 'Ubuntu':
        case 'Debian':
            await executeCommand('sudo apt-get update && sudo apt-get install -y cron');
            break;
        case 'Fedora':
            await executeCommand('sudo dnf install -y cronie');
            break;
        case 'CentOS':
            await executeCommand('sudo yum install -y cronie');
            break;
        case 'macOS':
            await executeCommand('brew install cron');
            break;
        case 'Windows':
            console.log('Please install cron manually on Windows.');
            break;
        default:
            throw new Error('Unsupported OS');
    }
}

// Function to create a cron job
async function createCronJob() {
    const scriptDir = path.resolve(__dirname);
    const cronJob = `0 */6 * * * cd ${scriptDir} && git pull`;

    // Get existing cron jobs
    let existingCronJobs = '';
    try {
        existingCronJobs = await executeCommand('crontab -l');
    } catch (error) {
        console.log('No existing cron jobs.');
    }

    // Check if the cron job already exists
    if (!existingCronJobs.includes(cronJob)) {
        const updatedCronJobs = existingCronJobs + '\n' + cronJob + '\n';
        await executeCommand(`echo "${updatedCronJobs.trim()}" | crontab -`);
        console.log('Cron job created successfully.');
    } else {
        console.log('Cron job already exists.');
    }
}

// Main function to run the script
async function main() {
    try {
        const osType = await detectOS();
        console.log(`Detected OS: ${osType}`);

        if (osType !== 'Windows') {
            await installCrontab(osType);
            await createCronJob();
        } else {
            console.log('Cron jobs are not natively supported on Windows. Please use Task Scheduler or a similar tool.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

main();
