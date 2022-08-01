import React from "react";
import {View, StyleSheet, FlatList} from 'react-native'
import { useState } from "react";
import CustomModal from "../componentes/Modal";
import AddItem from "../componentes/AddItem";
import List from "../componentes/List"
import Boton from "../constans/Boton";
import {CATEGORIES} from '../Data/Categories'
import GridItem  from "../componentes/GridItem/GridItem";

const CategoryScreen = ({navigation}) => {

    /*
        const [itemList, setItemList] = useState([]);
        const [textItem, setTextItem] = useState("");
        const [modalVisible, setModalVisible] = useState(false);
        const [itemSelected, setItemSelected] = useState({});
     */
    
    
    const handleSelectedCategory = (item) =>{
        navigation.navigate('Products',{
            categoryId: item.id,
            name: item.title,
        });
    }

    const renderGridItem = ({item}) => (
        <GridItem item ={item} onSelected={handleSelectedCategory} />
    );


    


    return (
        <View>
            <FlatList 
                data={CATEGORIES}
                keyExtractor={item =>item.id}
                renderItem={renderGridItem}
                numColumns={2}
            >
            </FlatList>
            {/**
             * <CustomModal
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
             */}
            
            <Boton 
                    onPress={()=> {navigation.navigate('Home')}}
                    text = "Volver a Inicio"
            />  
            
        </View>
    )
}


    


export default CategoryScreen;


/*
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
*/