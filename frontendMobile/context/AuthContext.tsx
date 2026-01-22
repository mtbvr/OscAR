import { useState } from 'react';

export const useAuth = () => {
    const [isAuthenticated] = useState(false); // Change to true to simulate "connected" state
    return { isAuthenticated };
};