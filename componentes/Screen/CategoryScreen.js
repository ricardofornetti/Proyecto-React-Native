import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { useState } from "react";
import CustomModal from "../Modal";
import AddItem from "../AddItem";
import List from "../List"
import Boton from "../../constans/Boton";


const CategoryScreen = ({navigation}) => {
    const [itemList, setItemList] = useState([]);
    const [textItem, setTextItem] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [itemSelected, setItemSelected] = useState({});
    
    const onHandlerChangeItem = (text) => setTextItem(text);
    const onHandlerAddItem = () => {
        setItemList((currentItems) => [
            ...currentItems,
            { id: Date.now(), value: textItem, completed: false },
        ]);
        setTextItem("");
        };

    const onHandlerDeleteItem = (id) => {
        setItemList((currentItems) =>
            currentItems.filter((item) => item.id !== id)
        );
        setItemSelected({});
        setModalVisible(!modalVisible);
    };
        
    const onHandlerModal = (id) => {
        setItemSelected(itemList.find((item) => item.id === id));
        setModalVisible(!modalVisible);
    };
        
    const onHandlerCompleteItem = (id) => {
        let itemCompleted = itemList.findIndex((item) => item.id === id);
        itemList[itemCompleted].completed = true;
        setItemList([...itemList]);
        setModalVisible(!modalVisible);
    };

    return (
        <View style={styles.screen}>
            <CustomModal
                modalVisible={modalVisible}
                onHandlerDeleteItem={onHandlerDeleteItem}
                itemSelected={itemSelected}
                onHandlerCompleteItem={onHandlerCompleteItem}
            />
            <AddItem 
                textItem={textItem}
                onHandlerAddItem={onHandlerAddItem}
                onHandlerChangeItem={onHandlerChangeItem}
            />
            <List 
                itemList={itemList}
                onHandlerModal={onHandlerModal}
            />
            <Boton 
                    onPress={()=> {navigation.navigate('Home')}}
                    text = "Volver a Inicio"
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
    
})

export default CategoryScreen;