import { View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import CustomButton from '../../componentes/CustomButton';
import CustomInput from '../../componentes/CustomInput';
import { useNavigation } from '@react-navigation/native';

import logo from '../../imagenes/pngwing.com (4).png'

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
            
            <Image
                    source={logo}
                    style={[styles.logo, {height: height * 0.3}]}
                    resizeMode="contain"
                />
            
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
const styles = StyleSheet.create(
    {
        root: {
            alignItems: 'center',
            padding: 20,
        },
        logo: {
            width: '70%',
            maxHeight: 200,
        }
    }
)

export default HospitalListScreen;