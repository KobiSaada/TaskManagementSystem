// services/auth.service.ts
import { userPool, CognitoUserAttribute, AuthenticationDetails, CognitoUser } from '../config/awsConfig';
import  User  from '../models/user.model';
import AWS from 'aws-sdk';
import dotenv from 'dotenv';

dotenv.config();
const cognito = new AWS.CognitoIdentityServiceProvider();

export const signUp = (email: string, password: string, username: string, role: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        const attributeList = [
            new CognitoUserAttribute({ Name: 'email', Value: email }),

        ];

        userPool.signUp(email, password, attributeList, [], async (err, result) => {
            if (err) {
                reject(err);
            } else if (result) {
                try {
                    // Create a user record in MongoDB
                    const cognitoUser = result.user;
                    const newUser = new User({
                        email: email,
                        username: username,
                        role: role,
                        cognitoId: cognitoUser.getUsername()  
                    });
                    await newUser.save();
                    resolve(`User created with email: ${email}`);
                } catch (mongoError) {
                    reject(mongoError);
                }
            }
        });
    });
};
export const signIn = (email: string, password: string): Promise<string> => {

    return new Promise((resolve, reject) => {
        const authenticationDetails = new AuthenticationDetails({
            Username: email,
            Password: password,
        });

        const cognitoUser = new CognitoUser({
            Username: email,
            Pool: userPool,
        });
   
        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: (result) => {
                resolve(`Access Token: ${result.getAccessToken().getJwtToken()}`);
            },
            onFailure: (err) => {
                reject(err);
            },
            newPasswordRequired: (userAttributes, requiredAttributes) => {
                resolve(JSON.stringify({
                    message: "New password required",
                    userAttributes,
                    requiredAttributes
                }));
            },
        });
    });
};
// Function to confirm user registration
export const confirmUser = (username: string, verificationCode: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        const cognitoUser = new CognitoUser({
            Username: username,
            Pool: userPool,
        });

        cognitoUser.confirmRegistration(verificationCode, true, (err, result) => {
            if (err) {
                reject(`Confirmation failed: ${err.message}`);
            } else {
                resolve('User confirmed successfully');
            }
        });
    });
};

// Function to delete a user from Cognito
export const deleteUserInCognito = async (email: string): Promise<void> => {
    try {
        // Delete the user from Cognito using their email as the Username
        await cognito.adminDeleteUser({
            UserPoolId: process.env.USER_POOL_ID!, // Ensure this environment variable is set
            Username: email, // Using email as the Cognito Username
        }).promise();

        console.log('User deleted from Cognito');
    } catch (error) {
        console.error('Error deleting user from Cognito:', error);
        throw error;
    }
};