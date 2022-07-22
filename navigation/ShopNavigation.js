import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CategoryScreen from '../componentes/Screen/CategoryScreen';
import MenuScreen from '../componentes/Screen/MenuScreen';

const Stack = createNativeStackNavigator()

const ShopNavigator = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName = "Home">
                <Stack.Screen name="Category" component = {CategoryScreen} />
                <Stack.Screen name="Home" component = {MenuScreen} 
                screenOption={{
                    headerStyle:{
                        backgroundColor: '#00bfff',
                    },
                    headerTinColor:'#fff',
                    headerTitleStyle:{
                        fontWeight: 'bold'
                    },
                }}
                />

                
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default ShopNavigator;