import React, { createContext, useState } from 'react';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [HotelClicked, setHotelClicked] = useState(9999);

  return (
    <AuthContext.Provider value={{ HotelClicked, setHotelClicked }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
