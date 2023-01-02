import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TelaInicial from '../Paraty/paginas/Tela Inicial/index';
import Restaurantes from '../Paraty/paginas/Restaurantes/index';
import Hoteis from '../Paraty/paginas/Hoteis';
import Passeios from '../Paraty/paginas/Passeios';




const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>

       <Stack.Screen name= 'Tela Inicial' component ={TelaInicial} />
       <Stack.Screen name= 'Restaurantes' component ={Restaurantes} />
       <Stack.Screen name= 'Passeios' component ={Passeios} />
       <Stack.Screen name= 'Hoteis' component ={Hoteis} />
       
    </Stack.Navigator>
    </NavigationContainer>
  
  );
}
//finalizado
