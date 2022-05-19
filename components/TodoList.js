import React, { useState } from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  ScrollView,
  TextInput,
} from "react-native";
import { Todo } from "./Todo";

export const TodoList = () => {
  const [title, setTitle] = useState("Todo list");

  return (
    <View style={{ width: "80%", marginBottom: 60 }}>
      <Text style={[styles.align, styles.font]}>{title}</Text>
      <ScrollView>
        <Todo name="First to do" />
        <Todo name="Second to do" />
      </ScrollView>
      <View>
        <TextInput style={styles.input} />
        <Button title="Add item" onPress={() => setTitle("My List")} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  align: {
    alignSelf: "center",
  },
  font: {
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
  },
});
