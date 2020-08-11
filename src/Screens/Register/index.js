import React,{useEffect,useState,} from 'react';
import {Image, ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import styles from "./styles";
import { Input } from 'react-native-elements';
import ButtonLogin from '../../Components/Buttons/ButtonLogin';
import {heightPercentageToDP as hp,widthPercentageToDP as wp} from 'react-native-responsive-screen';
import DropDownPicker from 'react-native-dropdown-picker';
import Theme from '../../Theme/Theme';


const RegisterScreen = (props) => {
    return(
        <ImageBackground   resizeMode="repeat"
                           style={styles.container}
                           source={require('../../assets/images/background_dot.png')}>
            <View style={{width:wp(85)}}>
                <View style={{alignSelf:'center'}}>
                    <Image
                        resizeMode={'stretch'}
                        style={{width:wp(22),height:hp(15),alignSelf:'center'}}
                        source={require('../../assets/images/virus.png')}/>
                    <Text style={{marginVertical:hp(2),textAlign:'center',fontSize:wp(6),fontWeight:'bold'}}>Covid App</Text>
                </View>
                <Input
                    placeholder='Correo'
                />
                <Input placeholder="Password" secureTextEntry={true} />
                <DropDownPicker
                    items={[
                        {label: 'Nueva Eps', value: 'uk'},
                        {label: 'Sura', value: 'france'},
                    ]}
                    placeholder={'Seleccione un eps'}
                    containerStyle={{height: hp(8),marginBottom:20}}
                    style={{backgroundColor: '#fafafa'}}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                />
                <ButtonLogin  title={'Registrar'}/>
                <View style={{flexDirection: 'row',alignSelf:'center'}}>
                    <Text style={{marginVertical:hp(2)}}>Tienes cuenta </Text>
                    <TouchableOpacity onPress={()=>props.navigation.navigate('Login')}>
                        <Text style={{marginVertical:hp(2),color:Theme.COLORS.PRIMARY,fontWeight:'bold'}}>Iniciar sesion</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
};

export default RegisterScreen;
