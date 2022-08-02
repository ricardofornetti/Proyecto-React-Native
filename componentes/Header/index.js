import React from 'react'
import { View, Text, StyleSheet, ImageBackground} from 'react-native'
import logoEdemsa from "../../assets/img/logoEdemsa.jpg"




const Header = props => {
    const { title } = props

    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
            
            <ImageBackground 
                source={logoEdemsa} 
                style={{width:"100%", height:"80%"}}
            >
            </ImageBackground>
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 400,
        alignItems: 'center',
        backgroundColor:"white",
    },
    headerTitle: {
        color: 'black',
        fontSize: 35,
        fontFamily:'Pop_font',
        fontWeight: 'bold',
        justifyContent: 'center',
        textAlign:"center",
        marginTop:50,
        
    },
    
    
    
    
})

export default Header