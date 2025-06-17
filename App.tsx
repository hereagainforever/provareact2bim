import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AdicionarScreen from './screens/AdicionarScreen';
import AlterarScreen from './screens/AlterarScreen';

export type RootStackParamList = {
  Lista: undefined;
  Adicionar: undefined;
  Alterar: { contato_id: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Lista" component={HomeScreen} />
        <Stack.Screen name="Adicionar" component={AdicionarScreen} />
        <Stack.Screen name="Alterar" component={AlterarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
