import { FormEvent, useState } from 'react';
import { useAuth } from '../contex/AuthContext';

interface RegisterFormData {
    email: string;
    password: string;
    username?: string;
    role?: string;
}

export default function Register() {
    const [formData, setFormData] = useState<RegisterFormData>({ email: '', password: '', username: '', role: '' });
    const { signUp } = useAuth();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        await signUp(formData.email, formData.password, formData.username, formData.role);
        // Additional logic after successful registration
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Form fields */}
        </form>
    );
}
