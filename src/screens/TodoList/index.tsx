import React, { useState } from "react";
import { View } from "react-native";

import Form from "../../components/TodoScreen/Form";
import TodoList from "../../components/TodoScreen/TodoList";

const TodoListScreen = () => {
  const [formView, setFormView] = useState<boolean>(false);
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      {formView ? (
        <Form switchView={setFormView} />
      ) : (
        <TodoList switchView={setFormView} />
      )}
    </View>
  );
};

export default TodoListScreen;
