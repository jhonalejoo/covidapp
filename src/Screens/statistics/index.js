import React,{useEffect,useState,} from 'react';
import {useDispatch,useSelector} from "react-redux";
import {View} from 'react-native';
import styles from "./styles";
import { LinearGradient, Stop, Defs } from 'react-native-svg'
import { BarChart, Grid } from 'react-native-svg-charts'
import HeaderComponent from '../../Components/Header';
import Theme from '../../Theme/Theme';
import ButtonStatics from '../../Components/Buttons/buttonStatics';
import {Text,ButtonGroup} from 'react-native-elements';
import dataCovid from "../../redux/dataCovid/reducer";

const StatisticsScreen = ({navigation}) => {

    const data    = [ 50, 10, 40, 95, 4, 24, 85, 91, 35, 53, 53, 24, 50, 20, 80 ];
    const buttons = ['Total', 'Hoy', 'Ayer'];
    const [index,setIndex] = useState(0);
    const AllData=useSelector(state=>state. dataCovid);
    const covidData=AllData.data;
    const updateIndex =(index)=>{
        setIndex(index)
    };

    const Gradient = () => (
        <Defs key={'gradient'}>
            <LinearGradient id={'gradient'} x1={'0%'} y={'0%'} x2={'0%'} y2={'100%'}>
                <Stop offset={'0%'} stopColor={'rgb(134, 65, 244)'}/>
                <Stop offset={'100%'} stopColor={'rgb(66, 194, 244)'}/>
            </LinearGradient>
        </Defs>
    );

    return(
        <View style={{flex:1,backgroundColor:Theme.COLORS.PRIMARY,height:'100%'}}>
            <HeaderComponent navigation={navigation}/>
            <Text style={{marginHorizontal:20,color:Theme.COLORS.WHITE,fontSize:18,fontWeight:'bold'}}>Estadisticas</Text>
            <View style={{
                height:'80%',
                justifyContent:'space-around'
            }}>
                <View style={{flexDirection: 'row',height:'25%',justifyContent:'space-between',marginHorizontal:20}}>
                    <ButtonStatics width={'47%'}  number={covidData.hasOwnProperty('TotalConfirmed')? covidData.TotalConfirmed: 0} statistic='Infectados' color={Theme.COLORS.YELLOW} />
                    <ButtonStatics width={'47%'}  number={covidData.hasOwnProperty('TotalDeaths')? covidData.TotalDeaths: 0} statistic='Muertos' color={Theme.COLORS.RED} />
                </View>
                <View style={{flexDirection: 'row',height:'25%',justifyContent:'space-between',marginHorizontal:20}}>
                    <ButtonStatics width={'47%'} number={covidData.hasOwnProperty('TotalRecovered')? covidData.TotalRecovered: 0} statistic='Recuperados' color={Theme.COLORS.GREEN} />
                    <ButtonStatics width={'47%'} number={covidData.hasOwnProperty('NewRecovered')? covidData.NewRecovered: 0} statistic='Nuevas Recuperados' color={Theme.COLORS.PURPLE} />
                </View>
                <View style={{flexDirection: 'row',height:'25%',justifyContent:'space-between',marginHorizontal:20}}>
                    <ButtonStatics width={'47%'} number={covidData.hasOwnProperty('NewDeaths')? covidData.NewDeaths: 0} statistic='Nuevas Muertes' color={Theme.COLORS.BLUE} />
                    <ButtonStatics width={'47%'} number={covidData.hasOwnProperty('NewDeaths')? covidData.NewConfirmed: 0} statistic='Nuevos Infectados' color={Theme.COLORS.BLUE} />
                </View>
            </View>
           {/* <View style={{
                height:'35%',
                backgroundColor:Theme.COLORS.WHITE,
                borderTopLeftRadius:30,
                borderTopRightRadius: 30,
                padding: 15
            }}>
                <BarChart
                    style={ { height: 200 } }
                    data={ data }
                    contentInset={ { top: 20, bottom: 20 } }
                    svg={ {
                        strokeWidth: 2,
                        fill: 'url(#gradient)',
                    } }
                >
                    <Grid/>
                    <Gradient/>
                </BarChart>
            </View>*/}
        </View>
    )
};

export default StatisticsScreen;
