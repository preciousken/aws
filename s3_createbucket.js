// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
require('dotenv').config()
// Set the region
// AWS.config.update({region: 'REGION'});

// Create S3 service object
s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.accessKeyId,
}
);

// Create the parameters for calling createBucket
var bucketParams = {
    Bucket : process.argv[2]
};

// call S3 to create the bucket
s3.createBucket(bucketParams, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Location);
  }
});
