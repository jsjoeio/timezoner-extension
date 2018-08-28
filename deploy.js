/*
Credit goes to Gokul Kathirvel who wrote the tutorial where this code comes from <3
https://dev.to/gokatz/automate-your-chrome-extension-deployment-in-minutes-48gb
*/
const zipFolder = require('zip-folder')
const exec      = require('child_process').exec

const folderName = 'dist'
const zipName = 'timezoner-extension.zip'

// credentials and IDs from travis.ci environment
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
const EXTENSION_ID = process.env.EXTENSION_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const CLIENT_ID = process.env.CLIENT_ID;

// to fetch it from node_modules
let webstoreLocation = './node_modules/.bin/webstore';


zipFolder(folderName, zipName, function(err) {
    if(err) {
        console.log('oh no! ', err);
    } else {
        console.log(`Successfully zipped the ${folderName} directory and store as ${zipName}`);
    }
});

function uploadZip() {
  let cmd = getUploadCommand();
  exec(cmd, (error, stdout, stderr) => {
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
    if (error !== null) {
      console.log(`exec error: ${error}`);
      process.exit(1);
    } else {
      console.log('Successfully Uploaded the zip to chrome web store');
      publishExtension(); // on successful upload, call publish
    }
  });
}

function publishExtension() {
  let cmd = getPublishCommand();
  exec(cmd, (error, stdout, stderr) => {
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
    if (error !== null) {
      console.log(`exec error: ${error}`);
      process.exit(1);
    } else {
      console.log('Successfully published the newer version');
    }
  });
}

function getUploadCommand() {
  return `${webstoreLocation} upload --source ${zipName} --extension-id ${EXTENSION_ID} --client-id ${CLIENT_ID} --client-secret ${CLIENT_SECRET} --refresh-token ${REFRESH_TOKEN}`;
}

function getPublishCommand() {
  return `${webstoreLocation} publish --extension-id ${EXTENSION_ID} --client-id ${CLIENT_ID} --client-secret ${CLIENT_SECRET} --refresh-token ${REFRESH_TOKEN}`;
}