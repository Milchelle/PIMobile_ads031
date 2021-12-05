import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { UserProvider } from './Context/UserContext';
import MainNavigator from './Routes/MainNavigator';
import SplashScreen from './Screens/SplashScreen';

export default function App() {
  const [exibeSplash, setExibeSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setExibeSplash(false);
    }, 5000);
  }, []);

  return (
    <UserProvider>
      <NavigationContainer>
        {exibeSplash ? <SplashScreen /> : <MainNavigator />}
      </NavigationContainer>
    </UserProvider>
  );
}
