import React, { Component } from 'react';
import LoginView from './screens/Login';
import WelcomeView from './screens/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator 
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>

        <Stack.Screen 
        name="Login" 
        options={{title: "Login"}}
        component={LoginView}
         />

        <Stack.Screen 
        name="Welcome" 
        options={{title: "Welcome"}}
        component={WelcomeView} />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default App;
