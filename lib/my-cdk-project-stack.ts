import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';

export class MyCdkProjectStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // S3 Bucket
    const myBucket = new s3.Bucket(this, 'S3Bucket8985836', {
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY, // Only for dev/test
      autoDeleteObjects: true, // Only for dev/test
    });

    // DynamoDB Table
    const myTable = new dynamodb.Table(this, 'DynamoDBTable8985836', {
      partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
      tableName: 'DynamoDBTable8985836',
      removalPolicy: cdk.RemovalPolicy.DESTROY, // Only for dev/test
    });

    // Lambda Function
    const myLambda = new lambda.Function(this, 'Lambda8985836', {
      runtime: lambda.Runtime.NODEJS_18_X, 
      handler: 'index.handler',
      code: lambda.Code.fromInline(`
        exports.handler = async function(event) {
          console.log('Lambda invoked!');
          return { statusCode: 200, body: 'Hello, 8985836!' };
        }
      `),
      environment: {
        BUCKET_NAME: myBucket.bucketName,
        TABLE_NAME: myTable.tableName,
      },
    });

    // Grant Lambda permissions to access S3 and DynamoDB
    myBucket.grantReadWrite(myLambda);
    myTable.grantReadWriteData(myLambda);
  }
}
