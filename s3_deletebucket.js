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

// Create params for S3.deleteBucket
var bucketParams = {
  Bucket : process.argv[2]
};

// Call S3 to delete the bucket
s3.deleteBucket(bucketParams, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});
