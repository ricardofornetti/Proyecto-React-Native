import React from "react";
import { StyleSheet, View,SafeAreaView} from "react-native";
import { useState } from "react";
import AddItem from "./componentes/AddItem";
import List from "./componentes/List";
import CustomModal from "./componentes/Modal";
import Header from "./componentes/Header";
import { useFonts} from 'expo-font'
import AppLoading from 'expo-app-loading'
import { StatusBar } from "expo-status-bar";
import ShopNavigator from "./navigation/ShopNavigation";



export default function App() {

  const [loaded] = useFonts({PTSansNarrowBold: require('./assets/fonts/PTSansNarrow-Bold.ttf'), PTSansNarrowRegular: require('./assets/fonts/PTSansNarrow-Regular.ttf')})

  const [textItem, setTextItem] = useState("");
  const [itemList, setItemList] = useState([]);
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

  if(!loaded) return <AppLoading />
  
  return (
    <ShopNavigator>
      <View style={styles.screen}>
        
        <Header title={'Mantenimiento'}style={styles.title}>
        </Header>
        
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
      <SafeAreaView style="auto" />
      <StatusBar style="auto" />
    </View>
    </ShopNavigator>
    
    
    
  );
}

const styles = StyleSheet.create({
  screen: {
    marginTop: "10%",
    padding: 30,
    flex:1
  },
  title:{
    fontFamily:'PTSansNarrowBold',
  },
  

  
});