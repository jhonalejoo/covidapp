import React from 'react';
import {Text, View} from 'react-native';
import {Drawer} from 'react-native-paper';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {DrawerContentScrollView,DrawerItem,createDrawerNavigator} from '@react-navigation/drawer';
import TabBottomComponent from '../TabBottom';
import Theme from "../../Theme/Theme";
import {heightPercentageToDP as hp} from "react-native-responsive-screen";

const DrawerStack = createDrawerNavigator();


const DrawerContent=(props)=>{
    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <Drawer.Section style={{
                    height:hp(18),
                    marginTop:-hp(1),
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor:Theme.COLORS.PRIMARY}}>
                    <Avatar
                        size='large'
                        rounded
                        source={require('../../assets/images/virus.png')}
                    />
                    <Text style={{fontSize:hp(2.5),color:'white',fontWeight:'bold'}}>Covid App</Text>
                </Drawer.Section>
                <Drawer.Section>
                    <DrawerItem
                        inactiveTintColor={'#3D6DCC'}
                        activeBackgroundColor={'#3D6DCC'}
                        icon={({color,size}) => (
                            <Icon
                                name="home"
                                color={Theme.COLORS.PRIMARY}
                                size={size}
                            />
                        )}
                        label={"Inicio"}
                        labelStyle={{color:Theme.COLORS.PRIMARY}}
                        onPress={() => {props.navigation.navigate('HomeScreen')}}
                    />
                    <DrawerItem
                        inactiveTintColor={'#3D6DCC'}
                        activeBackgroundColor={'#3D6DCC'}
                        icon={({color,size}) => (
                            <Icon
                                name="user"
                                color={Theme.COLORS.PRIMARY}
                                size={size}
                            />
                        )}
                        label={"Login"}
                        labelStyle={{color:Theme.COLORS.PRIMARY}}
                        onPress={() => {props.navigation.navigate('Login')}}
                    />
                </Drawer.Section>
            </DrawerContentScrollView>
        </View>
    )
};

const DrawerComponent =()=> {
    return (
        <DrawerStack.Navigator drawerContent={props => <DrawerContent {...props} />}>
            <DrawerStack.Screen name="Home" component={TabBottomComponent}/>
        </DrawerStack.Navigator>
    )
};
export default DrawerComponent;
