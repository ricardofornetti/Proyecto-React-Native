import { View, TextInput, Button, StyleSheet } from "react-native"

export default function AddItem (props){
    const{onHandlerChangeItem, onHandlerAddItem} =(props)

    return(
        <View style={styles.container}>
            <TextInput 
            placeholder='Escribe Aqui' 
            style={styles.input} 
            value={textItem}
            onChangeText={onHandlerChangeItem} >
            </TextInput>
            <Button title='Agregar' onPress={onHandlerAddItem} disabled={textItem.length < 1 ? true :false}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'  
    },
    input: {
        width: '80%',
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
    },
})

