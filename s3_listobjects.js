// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
// AWS.config.update({region: 'REGION'});

// Create S3 service object
s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    accessKeyId: "irktgqP7lT8sqaHO4G7cQWCRnPuTc5HEamorQS9e",
    secretAccessKey: 'AKIAYWJO3BOPETHZSMNI'
}
);

// Create the parameters for calling listObjects
var bucketParams = {
  Bucket : 'BUCKET_NAME',
};

// Call S3 to obtain a list of the objects in the bucket
s3.listObjects(bucketParams, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});
