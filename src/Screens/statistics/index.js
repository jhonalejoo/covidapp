import React,{useEffect,useState,} from 'react';
import {useDispatch,useSelector} from "react-redux";
import {View} from 'react-native';
import HeaderComponent from '../../Components/Header';
import Theme from '../../Theme/Theme';
import ButtonStatics from '../../Components/Buttons/buttonStatics';
import {Text,ButtonGroup} from 'react-native-elements';

const StatisticsScreen = ({navigation}) => {

    return(
        <View style={{flex:1,backgroundColor:Theme.COLORS.PRIMARY,height:'100%'}}>
            <HeaderComponent navigation={navigation}/>
            <Text style={{marginHorizontal:20,color:Theme.COLORS.WHITE,fontSize:18,fontWeight:'bold'}}>Estadisticas</Text>
            <View style={{
                height:'80%',
                justifyContent:'space-around'
            }}>
                <View style={{flexDirection: 'row',height:'25%',justifyContent:'space-between',marginHorizontal:20}}>
                    <ButtonStatics width={'47%'}  number={AllData.infected.length} statistic='Infectados' color={Theme.COLORS.YELLOW} />
                    <ButtonStatics width={'47%'}  number={AllData.death.length} statistic='Muertos' color={Theme.COLORS.RED} />
                </View>
                <View style={{flexDirection: 'row',height:'25%',justifyContent:'space-between',marginHorizontal:20}}>
                    <ButtonStatics width={'47%'} number={AllData.recovered.length} statistic='Recuperados' color={Theme.COLORS.GREEN} />
                    <ButtonStatics width={'47%'} number={1} statistic='Nuevas Recuperados' color={Theme.COLORS.PURPLE} />
                </View>
                <View style={{flexDirection: 'row',height:'25%',justifyContent:'space-between',marginHorizontal:20}}>
                    <ButtonStatics width={'47%'} number={1} statistic='Nuevas Muertes' color={Theme.COLORS.BLUE} />
                    <ButtonStatics width={'47%'} number={1} statistic='Nuevos Infectados' color={Theme.COLORS.BLUE} />
                </View>
            </View>
        </View>
    )
};

export default StatisticsScreen;
