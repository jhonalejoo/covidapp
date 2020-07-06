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
import createSagaMiddleware from 'redux-saga';
import IndexSagas from "./src/redux/index-saga";
import IndexReducer from "./src/redux/index-reducer";
import {Provider} from "react-redux";
import {applyMiddleware, createStore, compose} from "redux";
import TabBottomComponent from './src/Components/TabBottom';
import Theme from './src/Theme/Theme';

const composeSetup = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();


const store = createStore(
    IndexReducer,
    composeSetup(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(IndexSagas);

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
