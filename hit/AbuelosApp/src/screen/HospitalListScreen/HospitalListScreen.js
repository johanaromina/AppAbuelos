import { View, Text } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../componentes/CustomButton/CustomButton';
import CustomInput from '../../componentes/CustomInput/CustomInput';
import { useNavigation } from '@react-navigation/native';

const HospitalListScreen = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigation = useNavigation();

    const handleSavePressed = () => {
        navigation.goBack();
    }

    const handleReturnPressed = () => {
        navigation.goBack();
    }

    return (
        <View>
            <Text>Lista de consultorios</Text>

            <CustomInput
                placeholder="Ingrese numero de telefono"
                value={phoneNumber}
                setValue={setPhoneNumber}
            />

            <CustomButton
                onPress={handleSavePressed}
                text="Guardar"
            />

            <CustomButton
                onPress={handleReturnPressed}
                text="Volver"
                type="tertiary"
            />
        </View>
    )
}

export default HospitalListScreen;