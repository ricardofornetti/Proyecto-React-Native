import React from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text  } from "react-native";

export default function AddItem(props) {
    const { onHandlerChangeItem, onHandlerAddItem, textItem } = props;

return (
    <View style={styles.container}>
        <TextInput
        placeholder="Escribe Aqui"
        style={styles.input}
        value={textItem}
        onChangeText={onHandlerChangeItem}
        />
        <TouchableOpacity
            style={styles.buttonAdd}
            onPress={onHandlerAddItem}
            disabled={textItem.length < 1 ? true : false}
        >
            <Text style={styles.texto}>Agregar</Text>
        </TouchableOpacity>
    </View>
    
);
}

const styles = StyleSheet.create({

    container: {
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        
    },
    input: {
    width: "70%",
    height: 45,
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    borderRadius:10,
    fontFamily:'Pop_font',
    marginTop:50,
    },
    buttonAdd:{
        backgroundColor:'#00bfff',
        marginLeft: 10,
        borderRadius:10,
        padding: 15,
        marginTop:50,
    },
    texto:{
        color: 'white',
        fontFamily:'Pop_font',
    },
});