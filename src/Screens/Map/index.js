import React,{useEffect,useState,} from 'react';
import {View} from 'react-native';
import styles from "./styles";
import HeaderComponent from '../../Components/Header';
import MapboxGL from "@react-native-mapbox-gl/maps";
import Theme from '../../Theme/Theme';
MapboxGL.setAccessToken("pk.eyJ1IjoiamhvbjE5OTMiLCJhIjoiY2tiemRoa3hmMThhazJ0cWR1bXRjcXFobiJ9.NgRRkDEEntk_rRRDHy5y_A");

const MapScreen = ({navigation}) => {
    return(
        <View style={styles.page}>
            <View style={styles.container}>
                <MapboxGL.MapView style={styles.map}>
                </MapboxGL.MapView>
            </View>
        </View>
    )
};

export default MapScreen;
