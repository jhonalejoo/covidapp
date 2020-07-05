/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import createSagaMiddleware from 'redux-saga'
import {Provider} from "react-redux";
import {applyMiddleware, createStore, compose} from "redux";
import {DrawerComponent} from './src/Components/Drawer';
import HomeScreen from './src/Screens/home';
import TabBottomComponent from './src/Components/TabBottom';
import Theme from './src/Theme/Theme';
const Drawer = createDrawerNavigator();
const composeSetup = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const store = createStore(
    composeSetup(applyMiddleware()),
);

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={Theme.COLORS.PRIMARY}/>
      <SafeAreaView style={{flex:1}}>
        <NavigationContainer>
          <TabBottomComponent/>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};
export default App;
