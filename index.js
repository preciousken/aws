const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    accessKeyId: "irktgqP7lT8sqaHO4G7cQWCRnPuTc5HEamorQS9e",
    secretAccessKey: 'AKIAYWJO3BOPETHZSMNI'
});

// configuring aws sdk
// Set the Region 
AWS.config.update({region: 'us-west-2'});