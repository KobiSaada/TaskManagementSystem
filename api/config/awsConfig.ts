import { CognitoUserPool, CognitoUserAttribute, AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import AWS from 'aws-sdk';
import dotenv from 'dotenv';

// Specify the correct path to your .env file
dotenv.config({ path: './env' });

AWS.config.region = 'us-east-2';  // Your Cognito User Pool region

// Ensure USER_POOL_ID and COGNITO_CLIENT_ID are defined
const userPoolId: string = process.env.USER_POOL_ID!;
const clientId: string = process.env.COGNITO_CLIENT_ID!;

if (!userPoolId || !clientId) {
    throw new Error('User Pool ID or Client ID is undefined. Check your .env file.');
}

const poolData = {
    UserPoolId: userPoolId,
    ClientId: clientId
};

const userPool = new CognitoUserPool(poolData);

export { userPool, CognitoUserAttribute, AuthenticationDetails, CognitoUser };
