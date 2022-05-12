import React from "react";
import { Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectFilteredTodos } from "../../redux/todos/todosSlice";

function TodosLeft() {
  const filteredTodos = useSelector(selectFilteredTodos);
  const leftTodos = filteredTodos.filter((todo) => !todo.isCompleted).length;

  if (leftTodos === 0) {
    return (
      <Text fontSize={12} fontWeight={"bold"} marginTop={8} textAlign={"left"}>
        You completed all todos 💪{" "}
      </Text>
    );
  }
  return (
    <Text fontSize={12} fontWeight={"bold"} marginTop={8} textAlign={"left"}>
      {leftTodos} thing{leftTodos > 1 && "s"} left to do
    </Text>
  );
}

export default TodosLeft;
