import React from "react";
import {View, TouchableOpacity, StyleSheet,Text, FlatList} from 'react-native'
import Header from '../componentes/Header/index'
import Boton from "../constans/Boton";


const MenuScreen = ({navigation}) => {

    


    return (
        
        <View style={styles.screen}>
            <Text style={styles.title}>Mantenimiento</Text>
            
            <Header 
                //title={'Mantenimiento'}
                style={styles.title}>
            </Header>
            <Boton 
                    onPress={()=> {navigation.navigate('Products')}}
                    text = "Productos"
            /> 
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        color: 'black',
        fontSize: 35,
        fontFamily:'Pop_font',
        fontWeight: 'bold',
        justifyContent: 'center',
        textAlign:"center",
    },
    
    

})

export default MenuScreen;