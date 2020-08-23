import React,{useEffect,useState,} from 'react';
import {useDispatch,useSelector} from "react-redux";
import {View,Dimensions,StyleSheet} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);

const SecondRoute = () => (
    <View style={[{flex:1}, { backgroundColor: '#673ab7' }]} />
);


const initialLayout = { width: Dimensions.get('window').width };

const GraphicsScreen = ({navigation}) => {

    const [index, setIndex] = useState(0);

    const [routes] = useState([
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
    ]);

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
        />
    )
};

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
});

export default GraphicsScreen;
