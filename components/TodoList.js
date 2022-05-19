import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import { Todo } from "./Todo";

export const TodoList = () => {
  const [title, setTitle] = useState("todo list");

  return (
    <View>
      <Text>{title}</Text>
      <Todo name="First to do" />
      <Todo name="Second to do" />
      <Button title="change me" onPress={() => setTitle("My List")} />
    </View>
  );
};
