import React from "react";
import { Flex, Button } from "@chakra-ui/react";
import { changeFilter, selectActiveFilter } from "../../redux/todos/todosSlice";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "../../contexts/ThemeContext";

function FilterTodos() {
  const { theme } = useTheme();
  const activeFilter = useSelector(selectActiveFilter);
  const dispatch = useDispatch();
  return (
    <Flex mt={4} justify={"right"}>
      <Button
        bgColor={`${theme === "#fff" ? "whiteAlpha" : "gray"} `}
        border={`${activeFilter === "all" && "1px"}`}
        size={"sm"}
        onClick={() => {
          dispatch(changeFilter({ selectedFilter: "all" }));
        }}
      >
        All todos
      </Button>
      <Button
        bgColor={`${theme === "#fff" ? "whiteAlpha" : "gray"} `}
        size={"sm"}
        onClick={() => {
          dispatch(changeFilter({ selectedFilter: "completed" }));
        }}
        border={`${activeFilter === "completed" && "1px"}`}
      >
        Completed
      </Button>
      <Button
        bgColor={`${theme === "#fff" ? "whiteAlpha" : "gray"} `}
        size={"sm"}
        onClick={() => {
          dispatch(changeFilter({ selectedFilter: "active" }));
        }}
        border={`${activeFilter === "active" && "1px"}`}
      >
        Active
      </Button>
    </Flex>
  );
}

export default FilterTodos;
