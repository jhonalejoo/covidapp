/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect} from 'react';
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
import Theme from './src/Theme/Theme';
import StackNavigation from './src/Components/Navigation';
const composeSetup = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';

const store = createStore(
    IndexReducer,
    composeSetup(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(IndexSagas);

const App: () => React$Node = () => {


    useEffect(() => {
        // Assume a message-notification contains a "type" property in the data payload of the screen to open

        const unsubscribe = messaging().onMessage(async remoteMessage => {
            Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
        });

        messaging().onNotificationOpenedApp(remoteMessage => {
            console.log(
                'Notification caused app to open from background state:',
                remoteMessage.notification,
            );
           // navigation.navigate(remoteMessage.data.type);
        });

        // Check whether an initial notification is available
        messaging()
            .getInitialNotification()
            .then(remoteMessage => {
                if (remoteMessage) {
                    console.log(
                        'Notification caused app to open from quit state:',
                        remoteMessage.notification,
                    );
                   // setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
                }
               // setLoading(false);
            });

        return unsubscribe;
    }, []);


    return (
    <Provider store={store}>
      <StatusBar backgroundColor={Theme.COLORS.PRIMARY}/>
      <SafeAreaView style={{flex:1}}>
        <NavigationContainer>
            <StackNavigation/>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};
export default App;
