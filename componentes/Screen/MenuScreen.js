import React from "react";
import {View, TouchableOpacity, StyleSheet,Text} from 'react-native'
import Header from '../Header/index'
import Boton from "../../constans/Boton";

const MenuScreen = ({navigation}) => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Mantenimiento</Text>
            <Header 
                //title={'Mantenimiento'}
                style={styles.title}>
            </Header>
            <Boton 
                    onPress={()=> {navigation.navigate('Productos')}}
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
        fontFamily:'PTSansNarrowRegular',
        fontWeight: 'bold',
        justifyContent: 'center',
        textAlign:"center",
    },
    
    

})

export default MenuScreen;