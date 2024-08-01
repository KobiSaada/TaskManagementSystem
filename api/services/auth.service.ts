// src/auth/signup.ts
import { userPool, CognitoUserAttribute ,AuthenticationDetails, CognitoUser } from '../config/awsConfig';


/**
 * Signs up a new user using their email as the username.
 * @param email The user's email
 * @param password The user's password
 * @returns A promise resolving to a success message or rejecting with an error
 */
export const signUp = (email: string, password: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        const attributeList = [
            new CognitoUserAttribute({
                Name: 'email',
                Value: email
            })
        ];

        userPool.signUp(email, password, attributeList, [], (err, result) => {
            if (err) {
                reject(err);
            } else if (result) {
                const cognitoUser = result.user;
                resolve(`User created: ${cognitoUser.getUsername()}`);
            }
        });
    });
};

/**
 * Signs in a user using their email.
 * @param email The user's email
 * @param password The user's password
 * @returns A promise resolving to the access token or rejecting with an error
 */
export const signIn = (email: string, password: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        const authenticationDetails = new AuthenticationDetails({
            Username: email,
            Password: password
        });

        const cognitoUser = new CognitoUser({
            Username: email,
            Pool: userPool
        });

        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: (result) => {
                resolve(`Access Token: ${result.getAccessToken().getJwtToken()}`);
            },
            onFailure: (err) => {
                reject(err);
            }
        });
    });
};