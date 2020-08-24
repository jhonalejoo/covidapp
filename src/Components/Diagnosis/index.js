import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {CheckBox} from 'react-native-elements';
import styles from "./styles";
import Theme from '../../Theme/Theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const diagnoses = [
    {id: 0, text: 'Fiebre', value: 1},
    {id: 1, text: 'Dolor de garganta', value: 2},
    {id: 2, text: 'Congestión nasal', value: 3},
    {id: 3, text: 'Tos', value: 4},
    {id: 4, text: 'Dificultad para respirar', value: 5},
    {id: 5, text: 'Fatiga', value: 6},
    {id: 6, text: 'Escalofrío', value: 7},
    {id: 7, text: 'Dolor de Músculos', value: 8}
];
const DiagnosisComponent = props => {
    const [checkBox, setCheckBox] = useState([]);
  /*  let diagnosesCheckBox = [];
    diagnosesCheckBox.push(checkBox);
    console.log(diagnosesCheckBox);*/
    return (
        <View>
            <ScrollView >
                {diagnoses.map((diagnosis, index) => (
                    <CheckBox
                        key={index}
                        containerStyle={styles.containerCheckbox}
                        title={diagnosis.text}
                        checked={false}
                       /* onPress={() => {
                            setCheckBox({value: diagnosis.value});
                        }}*/
                    />
                ))}
            </ScrollView>
        </View>
    );
};

export default DiagnosisComponent;
