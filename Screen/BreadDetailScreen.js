import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const BreadDetailScreen = ({route}) => {
    const {structure} = route.params
  return (
    <View style={styles.screen}>
            <Text style={styles.title}>{structure.name}</Text>
            <Text>{structure.description}</Text>
    </View>
  )
}

export default BreadDetailScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 20,
        fontFamily:'PTSansNarrowRegular',
        marginBottom: 10
    }
})


