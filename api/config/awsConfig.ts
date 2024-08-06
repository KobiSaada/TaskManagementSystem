import { CognitoUserPool, CognitoUserAttribute, AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import AWS from 'aws-sdk';
import winston from 'winston';
import dotenv from 'dotenv';

dotenv.config();

AWS.config.region = 'us-east-2';  // Cognito User Pool region


// Create a logger using winston
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => `${timestamp} ${level}: ${message}`)
  ),
  transports: [
    new winston.transports.Console()
  ]
});
// Ensure USER_POOL_ID and COGNITO_CLIENT_ID are defined
const userPoolId: string = process.env.USER_POOL_ID!;
const clientId: string = process.env.COGNITO_CLIENT_ID! ;
// Check if the environment variables are defined

//console.log("userPoolId:",process.env.USER_POOL_ID)

if (!userPoolId || !clientId) {
  logger.error('User Pool ID or Client ID is undefined. Check your .env file.');
  throw new Error('User Pool ID or Client ID is undefined. Check your .env file.');
}
const poolData = {
    UserPoolId: userPoolId,
    ClientId: clientId
};

const userPool = new CognitoUserPool(poolData);
logger.info('AWS Cognito User Pool initialized successfully.');

export { userPool, CognitoUserAttribute, AuthenticationDetails, CognitoUser };
