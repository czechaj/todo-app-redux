import React from "react";

import { useSelector } from "react-redux";
import { selectTodos } from "../../redux/todos/todosSlice";

import TodosHeader from "./TodosHeader";
import FilterTodos from "./FilterTodos";
import TodosContent from "./TodosContent";
import TodosLeft from "./TodosLeft";
import Skeletons from "./Skeletons";

function Todos() {
  const allTodos = useSelector(selectTodos);

  return (
    <div style={{ margin: "3vh 10vw 8vh 10vw" }}>
      {allTodos.length > 0 ? (
        <>
          <TodosHeader />
          <FilterTodos />
          <TodosContent />
          <TodosLeft />
        </>
      ) : (
        <Skeletons />
      )}
    </div>
  );
}

export default Todos;
