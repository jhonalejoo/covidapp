import React,{useEffect,useState,} from 'react';
import {View, Text} from 'react-native';
import styles from "./styles";
import { Avatar} from 'react-native-elements';
import Theme from '../../Theme/Theme';
import {loginUserRequesting} from "../../redux/user/actions";
import {useDispatch, useSelector} from "react-redux";
import HeaderComponent from "../../Components/Header";


const ProfileScreen = ({navigation},props) => {

    const dispatch = useDispatch();

    const userProfile = useSelector(state => state.user);

    const {user} = userProfile;

    return(
       <View style={styles.container}>
           <HeaderComponent navigation={navigation} title={'Perfil'}/>
           <View>
               <Avatar
                   size={100}
                   containerStyle={styles.avatar}
                   rounded
                   source={{
                       uri:
                           'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                   }}
               />
               <Text style={styles.text}>{user.nombre}</Text>
           </View>
            <View style={styles.containerCard}>
                <Text style={styles.textTitleCard}>Datos personales</Text>
                <Text style={styles.textCard}>Email: {user.email}</Text>
                <Text style={styles.textCard}>Teléfono: {user.telefono}</Text>
            </View>
           <View style={styles.containerCard}>
               <Text style={styles.textTitleCard}>Eps de afilicación</Text>
               <Text style={styles.textCard}>Nombre: {user.eps.nombre}</Text>
               <Text style={styles.textCard}>Teléfono: {user.eps.telefono}</Text>
           </View>
           <View style={styles.containerCard}>
               <Text style={styles.textTitleCard}>Estado de salud</Text>
               {user.covid.estado === 'Sano' && (
                   <View style={{...styles.containerState, backgroundColor: '#abce00'}}>
                       <Text style={styles.textState}>{user.covid.estado}</Text>
                   </View>
               )}
               {user.covid.estado === 'Posible' && (
                   <View style={{...styles.containerState, backgroundColor: '#daa628'}}>
                       <Text style={styles.textState}>{user.covid.estado}</Text>
                   </View>
               )}
               {user.covid.estado === 'Infectado' && (
                   <View style={{...styles.containerState, backgroundColor: '#a40123'}}>
                       <Text style={styles.textState}>{user.covid.estado}</Text>
                   </View>
               )}

           </View>
       </View>
    )
};

export default ProfileScreen;
