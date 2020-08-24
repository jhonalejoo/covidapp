import { StyleSheet } from "react-native";
import Theme from '../../Theme/Theme';
import {heightPercentageToDP as hp,widthPercentageToDP as wp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#f8f8f8'
    },
    avatar: {
        alignSelf: 'center',
        marginTop: wp(8)
    },
    text: {
        marginTop: wp(2),
        textAlign: 'center',
        fontSize: hp(3)
    },
    textCard: {
        marginTop: wp(2),
        textAlign: 'left',
        fontSize: hp(1.75)
    },
    textTitleCard:{
        textAlign: 'center'
    },
    textState:{
        textAlign: 'center',
        alignItems: 'center',
        color: Theme.COLORS.WHITE,
        fontSize: hp(2)
    },
    containerCard: {
        width: wp('80%'),
        backgroundColor: Theme.COLORS.WHITE,
        alignSelf: 'center',
        padding: wp(4),
        marginTop: wp(2)
    },
    containerState: {
        width: wp('70%'),
        marginTop: wp(3),
        alignSelf: 'center',
        padding: wp(2),
        borderRadius: wp(1.5)
    }
});

export default styles;
