import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import SignInScreen from '../screen/SignInScreen/SignInScreen';
import RegisterScreen from '../screen/RegisterScreen';
import MailConfirmationScreen from '../screen/MailConfirmationScreen';
import ForgotPasswordScreen from '../screen/ForgotPasswordScreen';
import NewPasswordScreen from '../screen/NewPasswordScreen';
import HomeScreen from '../screen/HomeScreen';
import ConfigurationScreen  from '../screen/ConfigurationScreen';
import HospitalListScreen from '../screen/HospitalListScreen';
import FarmacyListScreen from '../screen/FarmacyListScreen';
import FamilyMembersListScreen from '../screen/FamilyMembersListScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Sign In" component={SignInScreen}/>
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation