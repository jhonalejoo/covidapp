import React from 'react';
import {View,Image} from 'react-native';
import {Button, Text} from 'react-native-elements';
import Theme from '../../../Theme/Theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const ButtonPrevention =(props)=>{
    const {prevention}=props;
    return(
        <View style={{alignItems:'center',marginHorizontal:5}}>
            <Image  style={{width:'100%',height:77}} resizeMode={'stretch'} source={prevention.image}/>
            <Text style={{textAlign:'center',marginTop:2,fontWeight:'bold'}}>
                {prevention.text}
            </Text>
        </View>
    )
};
export default ButtonPrevention;
