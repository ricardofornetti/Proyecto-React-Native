import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CategoryScreen from '../componentes/Screen/CategoryScreen';
import MenuScreen from '../componentes/Screen/MenuScreen';

const Stack = createNativeStackNavigator()

const ShopNavigator = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName = "Home"
                screenOptions={{
                    headerStyle:{
                        backgroundColor: "#00bfff",
                    },
                    headerTinColor:'black',
                    headerTitleStyle:{
                        fontWeight: 'bold',
                    },
                    
                }}
                >
                <Stack.Screen 
                    name="Home" 
                    component = {MenuScreen}
                    options={{title:"Inicio"}}
                />
                <Stack.Screen 
                    name="Productos" 
                    component = {CategoryScreen} 
                />    
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default ShopNavigator;