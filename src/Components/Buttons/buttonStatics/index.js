import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import Theme from '../../../Theme/Theme';

const ButtonStatics =(props)=>{
    const {color,statistic,number,height,width}=props;
    return(
        <View style={{backgroundColor:color,width:width,height:height,borderRadius:10,padding:15,justifyContent:'space-between'}}>
            <Text style={{color:Theme.COLORS.WHITE,fontSize:14,alignSelf:'flex-start'}}>
                {statistic}
            </Text>
            <Text style={{color:Theme.COLORS.WHITE,fontWeight:'bold',fontSize:15,alignSelf:'flex-start'}}>
                {number}
            </Text>
        </View>
    )
};
export default ButtonStatics;
