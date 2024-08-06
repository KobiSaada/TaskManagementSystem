import { createContext, useContext, ReactNode, useState, FC } from 'react';
import { CognitoUserPool, CognitoUserAttribute, CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import { userPool } from '../utils/cognito_config';

interface AuthContextType {
    user: User | null;
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => void;
    signUp: (email: string, password: string, username?: string, role?: string) => Promise<void>;
}

interface User {
    email: string;
    token: string;
}

interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    const signIn = async (email: string, password: string) => {
        const authenticationDetails = new AuthenticationDetails({
            Username: email,
            Password: password,
        });

        const cognitoUser = new CognitoUser({
            Username: email,
            Pool: userPool,
        });

        try {
            const result = await new Promise((resolve, reject) => {
                cognitoUser.authenticateUser(authenticationDetails, {
                    onSuccess: result => resolve(result),
                    onFailure: err => reject(err),
                    newPasswordRequired: data => {
                        // Handle newPasswordRequired scenario here if needed
                        console.log('New password is required', data);
                        resolve(data);
                    },
                });
            });

            // Example of setting user info after successful sign-in
            setUser({ email, token: result.idToken.jwtToken });
        } catch (error) {
            console.error(error);
            throw error;  // You may want to handle this more gracefully in a production app
        }
    };

    const signOut = () => {
        if (user) {
            const cognitoUser = new CognitoUser({
                Username: user.email,
                Pool: userPool,
            });
            cognitoUser.signOut();
            setUser(null);
        }
    };

    const signUp = async (email: string, password: string, username?: string, role?: string) => {
        const attributeList = [
            new CognitoUserAttribute({ Name: 'email', Value: email }),
            new CognitoUserAttribute({ Name: 'custom:username', Value: username }),
            new CognitoUserAttribute({ Name: 'custom:role', Value: role }),
        ];

        try {
            const result = await new Promise((resolve, reject) => {
                userPool.signUp(email, password, attributeList, null, (err, result) => {
                    if (err) reject(err);
                    else resolve(result);
                });
            });

            console.log('User registration successful:', result);
            // Follow-up actions post-registration might be needed
        } catch (error) {
            console.error('Signup error:', error);
            throw error;
        }
    };

    return (
        <AuthContext.Provider value={{ user, signIn, signOut, signUp }}>
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth(): AuthContextType {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
