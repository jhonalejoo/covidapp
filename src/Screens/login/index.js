import React,{useEffect,useState,} from 'react';
import {View,ImageBackground,Image,Text,TouchableOpacity} from 'react-native';
import styles from "./styles";
import { Input} from 'react-native-elements';
import ButtonLogin from '../../Components/Buttons/ButtonLogin';
import {heightPercentageToDP as hp,widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Theme from '../../Theme/Theme';
import {loginUserRequesting} from "../../redux/user/actions";
import {useDispatch} from "react-redux";

const LoginScreen = (props) => {

    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');
    const dispatch = useDispatch();

    const createUser = () => {
        let values = {
            email: emailLogin,
            password: passwordLogin
        };
        dispatch(loginUserRequesting(values));
    };

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
                        onChangeText={(text) => setEmailLogin(text)}
                        placeholder='Correo'
                    />
                    <Input placeholder="Password" secureTextEntry={true}
                        onChangeText={(text) => setPasswordLogin(text)}
                    />
                    <ButtonLogin  title={'Iniciar sesion'} action={() => createUser()}/>
                    <View style={{flexDirection: 'row',alignSelf:'center'}}>
                        <Text style={{marginVertical:hp(2)}}>No tienes cuenta </Text>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('Register')}>
                            <Text style={{marginVertical:hp(2),color:Theme.COLORS.PRIMARY,fontWeight:'bold'}}>registrate</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
    )
};

export default LoginScreen;
