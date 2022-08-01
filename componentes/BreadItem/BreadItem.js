import React from 'react'
import{TouchableOpacity, View, StyleSheet, Text} from 'react-native'


const BreadItem = ({item, onSelected}) => {
    return (
        <TouchableOpacity
            onPress={() => onSelected(item)}
        >
            <View style={styles.breadItem}>
                <View>
                    <Text style={styles.title}>{item.name}</Text>
                </View>
                <View>
                    <Text style={styles.details}>{item.description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default BreadItem

const styles = StyleSheet.create({
    breadItem:{
        padding: 20,
        margin: 10,
        borderRadius:3,
        backgroundColor:'#ccc'
    },
    title:{
        fontSize:20,
        fontFamily:'PTSansNarrowRegular',
    },
    details:{
        fontSize:18,
    },

})