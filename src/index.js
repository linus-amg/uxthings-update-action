const core = require("@actions/core");
const https = require('https');

const serviceHost = 'https://api.uxthings.io';
const servicePath = '/service/app-version-modification'

const apiKey = core.getInput('apiKey');
const apiSecret = core.getInput('apiSecret');
const newVersion = core.getInput('newVersion');

const callUrl = `${serviceHost}${servicePath}?apiKey=${apiKey}&apiSecret=${apiSecret}&newVersion=${newVersion}`;

https.get(callUrl, {
  method: 'POST'
}, res => {
  res.on('end', () => {
    console.log(res.statusCode === 200 ? 'success' : 'failure');
  });
}).on('error', err => {
  console.log('Error: ', err.message);
});
