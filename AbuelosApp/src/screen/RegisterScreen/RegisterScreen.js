import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image, useWindowDimensions } from 'react-native'; 
import CustomInput from "../../componentes/CustomInput";
import CustomButton from "../../componentes/CustomButton";
import SocialSignInButtons from "../../componentes/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";

import logo from '../../imagenes/pngwing.com 9.png';

const RegisterScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const navigation = useNavigation();
    const { height } = useWindowDimensions(); // Obtiene la altura de la ventana

    const handleCreateAccountPressed = () => {
        navigation.navigate('Mail Confirmation');
    }

    const handleSignInPressed = () => {
        navigation.navigate('Sign In');
    }

    const handleTermsPressed = () => {
        console.warn('terminos');
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} >
            <View style={styles.root} >
              

                <Text style={styles.title} > Crear Cuenta </Text>
                <Image
                    source={logo}
                    style={[styles.logo, { height: height * 0.3 }]} // Usa la altura de la ventana para la imagen
                    resizeMode="contain"
                />

                <CustomInput
                    placeholder='Usuario'
                    value={username}
                    setValue={setUsername}
                />

                <CustomInput
                    placeholder='Correo Electronico'
                    value={email}
                    setValue={setEmail}
                />

                <CustomInput
                    placeholder='Contraseña'
                    value={password}
                    setValue={setPassword}
                    secureTextEntry
                />

                <CustomInput
                    placeholder='Repetir contraseña'
                    value={passwordRepeat}
                    setValue={setPasswordRepeat}
                    secureTextEntry
                />

                <CustomButton
                    onPress={handleCreateAccountPressed}
                    text="Crear cuenta"
                />
               

                <Text style={styles.text}>
                    Al registrar declaro que acepto los{' '}
                    <Text style={styles.link} onPress={handleTermsPressed}>terminos y condiciones</Text>
                </Text>

                <SocialSignInButtons/>

                <CustomButton
                    onPress={handleSignInPressed}
                    text="Ya tengo cuenta"
                    type='tertiary'
                />

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create(
    {
        root: {
            alignItems: 'center',
            padding: 20,
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            color: '#051C60',
            margin: 10,
        },
        text: {
            color: 'grey',
            marginVertical: 10,
        },
        link: {
            color: '#FDB075',
        },
        logo: {
            width: '50%',
            maxHeight: 100,
            
        }
    }
)

export default RegisterScreen;