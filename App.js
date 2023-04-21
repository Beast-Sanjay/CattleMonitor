import React from 'react';
import HomePage from './Screens/HomePage';
import Login from './Screens/Login';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Register from './Screens/Register';
import Robot from './Screens/Robot';

const Stack=createStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="HomePage" component={HomePage} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Robot" component={Robot}/>
        
      </Stack.Navigator>
      </NavigationContainer>
  );
}