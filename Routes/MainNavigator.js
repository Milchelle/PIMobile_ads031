import React, { useContext } from 'react';
import { createNativeStackNavigator, createBottomTabNavigator } from '@react-navigation/native-stack';
import { UserContext } from '../Context/UserContext';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../Screens/LoginScreen';
import RegistrarScreen from '../Screens/RegistrarScreen';
import HomeScreen from '../Screens/HomeScreen';
import ComprarScreen from '../Screens/ComprarScreen';
import ComprarScreen2 from '../Screens/ComprarScreen2';
import PesquisarScreen from '../Screens/PesquisarScreen';
import CarrinhoScreen from '../Screens/CarrinhoScreen';
import MeuLivroScreen from '../Screens/MeuLivroScreen';
import PerfilScreen from '../Screens/PerfilScreen';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  const [usuario] = useContext(UserContext);

  return (
    <Stack.Navigator>
      {usuario.logado ? (
        <>
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
            name="perfil"
            component={PerfilScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="pesquisar"
            component={PesquisarScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="carrinho"
            component={CarrinhoScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="comprar"
            component={ComprarScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="comprar2"
            component={ComprarScreen2}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="meuslivros"
            component={MeuLivroScreen}
            options={{ headerShown: false }}
          />
          </>
      ) : (
        <>
          <Stack.Screen
            name="login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="registrar"
            component={RegistrarScreen}
            options={{ headerShown: false }}
          />
         
        </>
      )}
    </Stack.Navigator>
  );
}
