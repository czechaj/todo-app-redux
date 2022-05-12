import React from "react";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { useTheme } from "../../contexts/ThemeContext";
import {
  checkTodo,
  deleteTodo,
  selectFilteredTodos,
} from "../../redux/todos/todosSlice";
import { useDispatch, useSelector } from "react-redux";

function TodosContent() {
  const { theme } = useTheme();
  const filteredTodos = useSelector(selectFilteredTodos);
  const dispatch = useDispatch();
  return (
    <ul>
      {filteredTodos.map((item, i) => {
        return (
          <Flex key={i} alignItems={"baseline"}>
            <li
              style={{ display: "flex" }}
              className={`todo ${theme === "#fff" ? "light" : "pastel"} ${
                item.isCompleted === true ? "checked" : ""
              }`}
            >
              <input
                className="check"
                type="checkbox"
                checked={item.isCompleted}
                onChange={() => {
                  dispatch(checkTodo({ id: item.id }));
                }}
              />
              <Box>
                <Text
                  className="todoText"
                  pl={3}
                  fontWeight={"bold"}
                  align={"left"}
                  fontSize={15}
                >
                  {item.title}
                </Text>{" "}
                <Text className="todoText" pl={3} align={"left"} fontSize={13}>
                  {item.description}{" "}
                </Text>
              </Box>
            </li>
            <Button
              ml={2}
              bgColor={"burlywood"}
              onClick={() => {
                dispatch(deleteTodo({ id: item.id }));
              }}
            >
              {" "}
              <CloseIcon />
            </Button>
          </Flex>
        );
      })}
    </ul>
  );
}

export default TodosContent;
