import React from 'react';
import {Button, Text} from 'react-native-elements';
import Theme from '../../../Theme/Theme';
import {heightPercentageToDP as hp,widthPercentageToDP as wp} from 'react-native-responsive-screen';


const ButtonLogin =(props)=>{
    const {color,title,action}=props;
    return(
        <Button
            buttonStyle={{backgroundColor:Theme.COLORS.PRIMARY,width:'100%',height:hp(8),borderRadius:wp(2)}}
            titleStyle={{fontWeight:'bold',fontSize:wp(4.5)}}
            onPress={()=>action()}
            title={title}
        />
    )
};
export default ButtonLogin;
