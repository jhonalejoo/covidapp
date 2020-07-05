import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';
import Theme from '../../Theme/Theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HeaderComponent= props => {
    return (
        <Header
            containerStyle={{
                backgroundColor: Theme.COLORS.PRIMARY,
                borderBottomColor:Theme.COLORS.PRIMARY

            }}
            leftComponent={
                <TouchableOpacity>
                    <Icon
                        name={'menu'}
                        color={Theme.COLORS.WHITE}
                        size={30}
                    />
                </TouchableOpacity>
            }
            centerComponent={{ text: props.title, style: { color: '#fff' } }}
            rightComponent={
                <TouchableOpacity>
                <Icon
                    name={'bell-outline'}
                    color={Theme.COLORS.WHITE}
                    size={30}
                />
                </TouchableOpacity>
            }
        />
    );
};

export default HeaderComponent;
