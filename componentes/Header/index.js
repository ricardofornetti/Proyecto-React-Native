import React from 'react'
import { View, Text, StyleSheet} from 'react-native'




const Header = props => {
    const { title } = props

    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 750,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    headerTitle: {
        color: '#fff',
        fontSize: 28,
        fontFamily:'PTSansNarrowRegular',
        
    },
    
    
})

export default Header