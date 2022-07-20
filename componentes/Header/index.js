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
            style={{width:"100%", height:"100%", alignItems:"center", justifyContent:"center"}}
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
    },
    headerTitle: {
        color: 'black',
        fontSize: 35,
        fontFamily:'PTSansNarrowRegular',
        fontWeight: 'bold',
        
        justifyContent: 'center',
        textAlign:"center",
    },
    
    
    
    
})

export default Header