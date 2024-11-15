import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { useCsrfToken } from './CrsfTokenContext';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { csrfToken } = useCsrfToken();
  
  const logIn = () => setIsLoggedIn(true);

  const logOut = async () => {
    try {
      const response = await axios.post('https://dengue-watch-backend-f59b9593b035.herokuapp.com/users/logout/', {}, {
        headers: {
          'X-CSRFToken': csrfToken,
        },
        withCredentials: true,
      });
      if (response.status === 200) {
        setIsLoggedIn(false);
        console.log('Logged out successfully');
        window.location.reload();
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
