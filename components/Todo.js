import React from "react";
import { View, Button, Text } from "react-native";

export const Todo = (props) => {
  return (
    <View>
      <Text>{props.name}</Text>
    </View>
  );
};
