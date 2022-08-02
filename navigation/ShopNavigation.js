import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryScreen from "../Screen/CategoryScreen";
import MenuScreen from "../Screen/MenuScreen";
import { CategoryBreadScreen } from "../Screen/CategoryBreadScreen";
import BreadDetailScreen from "../Screen/BreadDetailScreen";
import { Platform } from "react-native";
import { Color } from "../constans/Color";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? Color.primary : Color.accent,
          },
          headerTinColor: Platform.OS === "android" ? Color.accent : "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={MenuScreen}
          options={{ title: "Inicio" }}
        />
        <Stack.Screen
          name="Products"
          component={CategoryScreen}
          options={{ title: "Productos" }}
          //options={({route}) => ({ title: route.params.name})}
        />
        <Stack.Screen
          name="CategoryProblems"
          component={CategoryBreadScreen}
          options={({ route }) => ({
            title: route.params.name,
          })}
        />
        <Stack.Screen
          name="Detail"
          component={BreadDetailScreen}
          options={({ route }) => ({
            title: route.params.name,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ShopNavigator;
