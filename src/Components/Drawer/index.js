import React from 'react';
import {View} from 'react-native';
import {Drawer} from 'react-native-paper';
import { Avatar } from 'react-native-elements';
import styles from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome5';
import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer';

export function DrawerComponent(props) {
    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <Drawer.Section>
                    <Avatar
                     size='large'
                     rounded
                     source={{
                         uri:
                             'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                     }}
                    />
                </Drawer.Section>
                <Drawer.Section>
                    <DrawerItem
                        inactiveTintColor={'#3D6DCC'}
                        activeBackgroundColor={'#3D6DCC'}
                        icon={({color,size}) => (
                            <Icon
                                name="home"
                                color={color}
                                size={size}
                            />
                        )}
                        label={"Inicio"}
                        onPress={() => {props.navigation.navigate('Home')}}
                    />
                </Drawer.Section>
            </DrawerContentScrollView>
        </View>
    )
}
