import { View, Text, Image } from 'react-native'
import React from 'react'
import CustomButton from '../../componentes/CustomButton';
import { useNavigation } from "@react-navigation/native";


import logo from '../../imagenes/foto1.png'; 

const HomeScreen = () => {
    const username = 'Juan';
    const navigation = useNavigation();

    const callPolice = () => {
        console.warn('Llamando a la policia');
    }

    const callHospital = () => {
        if (noHayConsultoriosGuardados) {
            navigation.navigate("Hospitals List");
        }
        navigation.navigate("sarasa");
    }

    const callFamilyMember = () => {
        console.warn('Llamando a Martín');
    }

    const callFarmacy = () => {
        console.warn('Llamando a farmacia');
    }

    const handleConfigurationPressed = () => {
        navigation.navigate("Configuration");
    }

    return (
        <View>
            <Text>Bienvenido {username}</Text>
            <CustomButton
                onPress={callPolice}
                text="Llamar al 911"
                backgroundColor="#D50000"
                foregroundColor="#FFFFFF"
            />
            <Image
                    source={logo}
                    style={[styles.logo, {height: height * 0.3}]}
                    resizeMode="contain"
            />

            <CustomButton
                onPress={callHospital}
                text="Llamar a consultorio"
                backgroundColor='#01579B'
                foregroundColor='#FFFFFF'
            />

            <CustomButton
                onPress={callFarmacy}
                text="Llamar a farmacia"
                backgroundColor='#388E3C'
                foregroundColor='#FFFFFF'
            />

            <CustomButton
                onPress={callFamilyMember}
                text="Llamar a familiar"
            />

            <CustomButton
                onPress={handleConfigurationPressed}
                text="Configuración"
                type="tertiary"
            />
        </View>
    )
}

export default HomeScreen;