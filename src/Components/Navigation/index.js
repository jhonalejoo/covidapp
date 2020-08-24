import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from '../../Screens/Register';
import DrawerComponent from '../Drawer';
import LoginScreen from '../../Screens/login';
import ProfileScreen from "../../Screens/profile";
const Stack = createStackNavigator();


const StackNavigation =()=>{
  return(
      <Stack.Navigator headerMode={'none'}>
          <Stack.Screen
              name="Drawer"
              component={DrawerComponent}
          />
          <Stack.Screen
              name="Login"
              component={LoginScreen}
          />
          <Stack.Screen
              name="Register"
              component={RegisterScreen}
          />
          <Stack.Screen
              name="Profile"
              component={ProfileScreen}
          />

      </Stack.Navigator>
  )
};

export default StackNavigation;
