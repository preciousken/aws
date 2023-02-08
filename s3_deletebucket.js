// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region
// AWS.config.update({region: 'REGION'});

// Create S3 service object
s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    accessKeyId: "AKIAYWJO3BOPETHZSMNI",
    secretAccessKey: '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'
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
