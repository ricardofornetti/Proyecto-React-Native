import React from "react";
import { FlatList } from "react-native";

import { STRUCTURE } from "../Data/Structure";
import BreadItem from "../componentes/BreadItem/BreadItem";

export const CategoryBreadScreen = ({ navigation, route }) => {
  const Stucture = STRUCTURE.filter(
    (stucture) => stucture.category === route.params.categoryId
  );
   console.log(Stucture) 
  const handleSelected = (item) => {
    navigation.navigate("Detail", {
      structure: item,
    });
  };

  const renderItemBread = ({ item }) => (
    <BreadItem item={item} onSelected={handleSelected} />
  );

  return (
    <FlatList
      data={Stucture}
      keyExtractor={(item) => item.id}
      renderItem={renderItemBread}
    />
  );
};
