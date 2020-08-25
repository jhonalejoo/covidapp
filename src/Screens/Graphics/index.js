import React,{useEffect,useState,} from 'react';
import {useDispatch,useSelector} from "react-redux";
import {View,Dimensions,StyleSheet} from 'react-native';
import { TabView,TabBar,SceneMap } from 'react-native-tab-view';
import Theme from "../../Theme/Theme";
import {heightPercentageToDP as hp} from "react-native-responsive-screen";
import {
    LineChart,
} from "react-native-chart-kit";

const data = {
    labels: ["Marzo", "Abril", "Mayo", "Junio","Julio","Agosto"],
    datasets: [
        {
            data: [0, 0, 0, 80, 99, 186],
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
            strokeWidth: 1.5
        }
    ],
    legend: ["Curva contagio"]
};
const dataUci = {
    labels: ["Marzo", "Abril", "Mayo", "Junio","Julio","Agosto"],
    datasets: [
        {
            data: [0, 30, 68, 80, 90, 76],
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
            strokeWidth: 1.5
        }
    ],
    legend: ["Porcentaje Uci"]
};
const dataMuestras = {
    labels: ["Marzo", "Abril", "Mayo", "Junio","Julio","Agosto"],
    datasets: [
        {
            data: [0, 40, 101, 220, 499, 789],
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
            strokeWidth: 1.5
        }
    ],
    legend: ["Muestras procesadas"]
};


const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130d",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 250, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
};

const screenWidth = Dimensions.get("window").width;
const GraphComponent =(props)=>{
    return(
        <LineChart
            data={props.data}
            width={screenWidth}
            height={hp(40)}
            verticalLabelRotation={30}
            chartConfig={chartConfig}
            bezier
        />
    )
};

const FirstRoute = () => (
    <View style={[styles.scene,{backgroundColor:'#43307a',alignItems:'center',justifyContent:'center'}]} >
        <GraphComponent data={data}/>
    </View>
);

const SecondRoute = () => (
    <View style={[styles.scene,{backgroundColor:'#43307a',alignItems:'center',justifyContent:'center'}]} >
        <GraphComponent data={dataUci}/>
    </View>
);
const ThirdRoute = () => (
    <View style={[styles.scene,{backgroundColor:'#43307a',alignItems:'center',justifyContent:'center'}]} >
        <GraphComponent data={dataMuestras}/>
    </View>
);

const renderTabBar = props => (
    <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: 'white' }}
        style={{ backgroundColor: Theme.COLORS.PRIMARY }}
    />
);


const initialLayout = { width: Dimensions.get('window').width };

const GraphicsScreen = ({navigation}) => {

    const [index, setIndex] = useState(0);

    const [routes] = useState([
        { key: 'first', title: 'Contagio' },
        { key: 'second', title: 'Ucis' },
        { key: 'third', title: 'Muestras procesadas' },
    ]);

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute
    });

    return (
        <TabView
            indicatorStyle={{backgroundColor:'white'}}
            renderTabBar={renderTabBar}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
        />
    )
};

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
});

export default GraphicsScreen;
