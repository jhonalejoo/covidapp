import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import Theme from '../../../Theme/Theme';
import Numeral from "numeral"
import {heightPercentageToDP as hp} from "react-native-responsive-screen";

const ButtonStatics =(props)=>{
    const {color,statistic,number,height,width}=props;
    return(
        <View style={{backgroundColor:color,width:width,height:height,borderRadius:10,padding:15,justifyContent:'space-between'}}>
            <Text style={{color:Theme.COLORS.WHITE,fontSize:hp(2.7),fontWeight:'bold',alignSelf:'flex-start'}}>
                {statistic}
            </Text>
            <Text style={{color:Theme.COLORS.WHITE,fontWeight:'bold',fontSize:hp(2.7),alignSelf:'flex-start'}}>
                {Numeral(number).format('0,0')}
            </Text>
        </View>
    )
};
export default ButtonStatics;
