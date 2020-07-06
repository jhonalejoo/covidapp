import React, {useEffect, useState} from 'react';
import {View, Linking, ScrollView, TouchableOpacity,Image} from 'react-native';
import styles from './styles';
import ButtonCall from '../../Components/Buttons/buttonCall';
import {Text} from 'react-native-elements';
import HeaderComponent from '../../Components/Header';
import Theme from '../../Theme/Theme';
import ButtonPrevention from '../../Components/Buttons/buttonPrevention';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from "react-redux";
import {getDataCovidRequesting} from "../../redux/dataCovid/actions";

const HomeScreen = ({navigation}) => {
    const callAction = () => {
        Linking.openURL(`tel:${195}`);
    };

    const dispatch = useDispatch();


    useEffect(()=> {
        dispatch(getDataCovidRequesting());
    }, []);

    const prevention = [
        {
            image: require('../../assets/images/codo.png'),
            text: 'Cubrase al toser',
        },
        {
            image: require('../../assets/images/casa.png'),
            text: 'Quedate en casa',
        },
        {
            image: require('../../assets/images/distancia.png'),
            text: 'Distanciamiento social',
        },
        {
            image: require('../../assets/images/limpiar.png'),
            text: 'Desinfectar',
        },
        {
            image: require('../../assets/images/manos.png'),
            text: 'Lavarse las manos',
        },
        {
            image: require('../../assets/images/tapabocas.png'),
            text: 'Usar tapabocas',
        },
    ];

    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <HeaderComponent navigation={navigation}/>
            <View style={{
                height: '34%',
                backgroundColor: Theme.COLORS.PRIMARY,
                borderBottomLeftRadius: 35,
                borderBottomRightRadius: 35,
            }}>
                <View style={{marginHorizontal: 20}}>
                    <Text style={{color: Theme.COLORS.WHITE, fontWeight: 'bold', fontSize: 22}}>
                        Covid-19
                    </Text>
                    <Text style={{color: Theme.COLORS.WHITE, fontWeight: 'bold', fontSize: 20, marginTop: 20}}>
                        ¿Te sientes enfermo?
                    </Text>
                    <Text style={{color: Theme.COLORS.WHITE, fontSize: 14, marginTop: 10,textAlign:'justify'}}>
                        Si te sientes enfermo con cualquiera de los sintomas del covid-19, llame de inmediato para
                        obtener ayuda.

                    </Text>
                    <View style={{width: '50%', marginTop: 15}}>
                        <ButtonCall title='Llamar' action={callAction} color={Theme.COLORS.RED}/>
                    </View>
                </View>
            </View>
            <View style={{height:'64%'}}>
                <ScrollView contentContainerStyle={{height:'100%'}}>
                    <View style={{height:'50%'}}>
                    <Text style={{
                        marginHorizontal: 12,
                        marginTop: 20,
                        fontSize: 22,
                        fontWeight: 'bold',
                    }}>Prevención</Text>
                    <ScrollView horizontal={true} contentContainerStyle={{marginTop: 10}}
                                showsHorizontalScrollIndicator={false}>
                        {
                            prevention.map((prevention, index) => (
                                <View style={{width: '14%',marginHorizontal: 10}} key={index}>
                                    <ButtonPrevention prevention={prevention}/>
                                </View>
                            ))
                        }

                    </ScrollView>
                    </View>
                    <View style={{height:'50%'}}>
                    <TouchableOpacity>
                        <LinearGradient
                            start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                            colors={['rgba(100,91,233,0.69)', Theme.COLORS.PRIMARY]}
                            style={{marginHorizontal: 12,height:'75%',borderRadius: 10}}>
                            <Image style={{position:'absolute',marginLeft:30,width:'30%',height:'120%',bottom:0}}
                                   source={require('../../assets/images/autodiagnostico.png')}
                                   resizeMode={'stretch'}
                            />
                            <Text style={
                                {
                                    fontSize: 18,
                                    textAlign: 'right',
                                    margin: 20,
                                    color: '#ffffff',
                                    fontWeight: 'bold',
                                    backgroundColor: 'transparent',
                                }
                            }>
                                Auto diagnostico !
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

export default HomeScreen;
