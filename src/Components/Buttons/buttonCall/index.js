import React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import Theme from '../../../Theme/Theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const ButtonCall =(props)=>{
    const {color,title,action}=props;
    return(
        <Button
         buttonStyle={{backgroundColor:color,borderRadius:15}}
         titleStyle={{fontWeight:'bold',marginHorizontal:20}}
         iconContainerStyle={{marginRight:10}}
         icon={ <Icon
             name="phone"
             color={Theme.COLORS.WHITE}
             size={25}
         />}
         onPress={()=>action()}
         title={title}
        />
    )
};
export default ButtonCall;
