
import { useState } from 'react';

export function useAuthForm() {
    const [isLoginMode, setIsLoginMode] = useState(true);

    const toggleMode = () => {
        setIsLoginMode(prev => !prev);
    };

    return {
        isLoginMode,
        toggleMode,
    };
}