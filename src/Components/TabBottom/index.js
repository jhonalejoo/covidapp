import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../Screens/home';
import StatisticsScreen from '../../Screens/statistics';
import GraphicsScreen from "../../Screens/Graphics";
import MapScreen from '../../Screens/Map';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Theme from '../../Theme/Theme';

const Tab= createBottomTabNavigator();

const TabBottomComponent =()=>{
    return(
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: Theme.COLORS.PRIMARY,
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    switch (route.name) {
                        case "Home":
                            iconName = "home";
                            break;
                        case "Statistics":
                            iconName ="chart-bar";
                            break;
                        case  "Map":
                            iconName="map";
                            break;
                        case  "Graphics":
                            iconName="chart-donut";
                            break;
                        default:
                            break;
                    }

                    return (
                        <Icon
                            name={iconName}
                            color={color}
                            size={35}
                        />

                    );
                },


            })}
                >
            <Tab.Screen
                name="Home"
                component={HomeScreen}

                options={{
                    title:''
                }}
            />
            <Tab.Screen
                name="Statistics"
                component={StatisticsScreen}

                options={{
                    title:''
                }}
            />
            <Tab.Screen
                name="Graphics"
                component={GraphicsScreen}

                options={{
                    title:''
                }}
            />
            <Tab.Screen
                name="Map"
                component={MapScreen}

                options={{
                    title:''
                }}
                />

        </Tab.Navigator>
    )
};
export default TabBottomComponent;
