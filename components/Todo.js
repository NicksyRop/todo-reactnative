import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

export const Todo = (props) => {
  return (
    <View style={[{ margin: 8, padding: 8 }, styles.item]}>
      <Text>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",

    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "whitesmoke",
  },
});
