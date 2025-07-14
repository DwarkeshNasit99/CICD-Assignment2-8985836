# AWS CDK CI/CD Assignment 2 – Student ID: 8985836

## Project Overview

This project was created as part of a CI/CD assignment. It demonstrates the use of AWS CDK (Cloud Development Kit) with TypeScript to provision AWS resources and implements a complete CI/CD pipeline using AWS CodePipeline, CodeBuild, and GitHub integration.

---

## Features & Resources

The stack provisions the following AWS resources, all named with the student ID for uniqueness:

- **S3 Bucket**: For general storage, named with the stack and student ID.
- **Lambda Function**: A Node.js 18.x Lambda function, deployed via CDK.
- **DynamoDB Table**: For persistent storage, also named with the student ID.

---

## CI/CD Pipeline

A fully automated pipeline is set up using AWS CodePipeline with the following stages:

1. **Source**: GitHub repository ([DwarkeshNasit99/CICD-Assignment2-8985836](https://github.com/DwarkeshNasit99/CICD-Assignment2-8985836)) is used as the source.
2. **Build**: AWS CodeBuild runs `npm install` and `npx cdk synth` to build and synthesize the CDK app. The buildspec.yml ensures the correct template is output and available for deployment.
3. **Deploy**: AWS CloudFormation deploys the synthesized template, creating/updating the stack and all resources.

---

## Implementation Steps

### 1. AWS Account & CLI Setup
- Created a new AWS account and configured the AWS CLI with IAM user credentials.
- Resolved issues with credentials, CLI path, and account activation.

### 2. CDK Project Initialization
- Initialized a new CDK project in TypeScript.
- Added S3, Lambda, and DynamoDB resources with names including the student ID.
- Updated Lambda runtime to Node.js 18.x for compatibility.

### 3. CDK Deployment
- Bootstrapped the environment and deployed the stack using `cdk deploy`.
- Verified resource creation in the AWS Console.

### 4. GitHub Integration
- Created a public GitHub repository and pushed all project files.
- Added a `buildspec.yml` to define the build and synth steps for CodeBuild.

### 5. CodePipeline Setup
- Created a pipeline in AWS CodePipeline:
  - Source: GitHub
  - Build: CodeBuild (using `buildspec.yml`)
  - Deploy: CloudFormation (using the correct template file from the build artifact)
- Resolved IAM permission issues and ensured all roles had the necessary access.

### 6. Debugging & Finalization
- Used build logs and `ls -lR cdk.out` to ensure the correct template file was referenced.
- Updated the Deploy stage in CodePipeline to use the exact template file name.
- Successfully ran the pipeline end-to-end, with all stages succeeding.

---

## How to Use

### Build & Deploy Locally
```bash
npm install
npx cdk synth
npx cdk deploy
```

### CI/CD Pipeline
- Any push to the GitHub repository triggers the pipeline.
- CodeBuild runs the build and synth steps.
- CloudFormation deploys the stack automatically.

---

## Screenshots (You can see it in the screenshots folder)

- S3 bucket, Lambda function, and DynamoDB table verified in AWS Console.
- CodePipeline execution with all stages succeeded.
- CodeBuild logs showing build and synth steps.
- GitHub repository with code and `buildspec.yml`.

---

