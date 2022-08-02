import React from "react"
import {TouchableOpacity, StyleSheet, Text} from 'react-native'




const Boton = props => {

    const {onPress, text} = props

    return(
        <TouchableOpacity
        style = {styles.buttonContainer}
        onPress = {onPress}
        >
            <Text style = {styles.buttonText}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

export default Boton;

const styles = StyleSheet.create ({
    buttonContainer:{
        backgroundColor:'#00bfff',
        marginLeft: 10,
        borderRadius:10,
        padding: 15,
        marginTop:50,
    },
    buttonText:{
        fontFamily:'Pop_font',
    },
})