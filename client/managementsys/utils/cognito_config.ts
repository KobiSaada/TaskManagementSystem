import {
    CognitoUserPool,
} from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "YOUR_USER_POOL_ID", // e.g., us-east-1_xxxxxxx
    ClientId: "YOUR_CLIENT_ID" // Your client id here
};

export const userPool = new CognitoUserPool(poolData);
