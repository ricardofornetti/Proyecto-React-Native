import React from "react";
import {View, Text, StyleSheet} from 'react-native'

const MenuScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>Menu Screen</Text>
            <Text>La concha de la lora</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default MenuScreen;