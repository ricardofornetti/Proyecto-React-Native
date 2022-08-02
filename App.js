import React from "react";
import { StyleSheet, View,SafeAreaView} from "react-native";
import { useFonts} from 'expo-font'
import AppLoading from 'expo-app-loading'
import { StatusBar } from "expo-status-bar";
import ShopNavigator from "./navigation/ShopNavigation";




export default function App() {

  const [loaded] = useFonts({PTSansNarrowBold: require('./assets/fonts/PTSansNarrow-Bold.ttf'), PTSansNarrowRegular: require('./assets/fonts/PTSansNarrow-Regular.ttf')})



  if(!loaded) return <AppLoading />
  
  return (
    
    <ShopNavigator>
      <View style={styles.screen}>
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