import React,{useEffect,useState,} from 'react';
import {Image, ImageBackground, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from "./styles";
import { Input } from 'react-native-elements';
import ButtonLogin from '../../Components/Buttons/ButtonLogin';
import {heightPercentageToDP as hp,widthPercentageToDP as wp} from 'react-native-responsive-screen';
import DropDownPicker from 'react-native-dropdown-picker';
import Theme from '../../Theme/Theme';
import {useDispatch, useSelector} from "react-redux";
import {registerRequesting} from "../../redux/user/actions";

const RegisterScreen = (props) => {
    const eps = useSelector(state => state.eps);

    const [emailRegister, setEmailRegister] = useState('');
    const [passwordRegister, setPasswordRegister] = useState('');
    const [nameRegister, setNameRegister] = useState('');
    const [phoneRegister, setPhoneRegister] = useState('');
    const [epsRegister, setEpsRegister] = useState('');
    const dispatch = useDispatch();

    let selectEps = eps.eps.map((eps) => {
        return {value: eps.id, label: eps.nombre}
    })

    const createUser = () =>{
        let values = {
            email: emailRegister,
            password: passwordRegister,
            name: nameRegister,
            phone: phoneRegister,
            eps: epsRegister
        };
       // console.log(values, 'values');
       dispatch(registerRequesting(values));
    };

    return(
        <ImageBackground   resizeMode="repeat"
                           style={styles.container}
                           source={require('../../assets/images/background_dot.png')}>
            <ScrollView style={{flex: 1}}>
                <View style={{width:wp(85)}}>
                    <View style={{alignSelf:'center'}}>
                        <Image
                            resizeMode={'stretch'}
                            style={{width:wp(22),height:hp(15),alignSelf:'center'}}
                            source={require('../../assets/images/virus.png')}/>
                        <Text style={{marginVertical:hp(2),textAlign:'center',fontSize:wp(6),fontWeight:'bold'}}>Covid App</Text>
                    </View>
                    <Input
                        onChangeText={(text) => setNameRegister(text)}
                        placeholder='Nombre'
                    />
                    <Input
                        onChangeText={(text) => setEmailRegister(text)}
                        placeholder='Correo'
                    />
                    <Input
                        onChangeText={(text) => setPasswordRegister(text)}
                        placeholder="Password" secureTextEntry={true} />
                    <Input
                        keyboardType={'numeric'}
                        onChangeText={(text) => setPhoneRegister(text)}
                        placeholder='Teléfono'
                    />
                    <DropDownPicker
                        onChangeItem={(text) => setEpsRegister(text.value)}
                        items={selectEps}
                        placeholder={'Seleccione un eps'}
                        containerStyle={{height: hp(8),marginBottom:20}}
                        style={{backgroundColor: '#fafafa'}}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        dropDownStyle={{backgroundColor: '#fafafa'}}
                    />
                    <ButtonLogin  title={'Registrar'} action={() => createUser()}/>
                    <View style={{flexDirection: 'row',alignSelf:'center'}}>
                        <Text style={{marginVertical:hp(2)}}>Tienes cuenta </Text>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('Login')}>
                            <Text style={{marginVertical:hp(2),color:Theme.COLORS.PRIMARY,fontWeight:'bold'}}>Iniciar sesion</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    )
};

export default RegisterScreen;
