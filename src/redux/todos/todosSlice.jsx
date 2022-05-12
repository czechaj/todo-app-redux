import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [
      {
        title: "test1",
        description: "test1 description",
        id: nanoid(),
        isCompleted: true,
      },
      {
        title: "test2",
        description: "test2 description",
        id: nanoid(),
        isCompleted: true,
      },
      {
        title: "test3",
        description: "test3 description",
        id: nanoid(),
        isCompleted: false,
      },
    ],
    activeFilter: "all",
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    checkTodo: (state, action) => {
      const { id } = action.payload;
      const checked = state.items.find((todo) => todo.id === id);
      checked.isCompleted = !checked.isCompleted;
    },
    deleteTodo: (state, action) => {
      const { id } = action.payload;
      const filtered = state.items.filter((todo) => todo.id !== id);
      state.items = filtered;
    },
    changeFilter: (state, action) => {
      const { selectedFilter } = action.payload;
      state.activeFilter = selectedFilter;
    },
  },
});

export const selectTodos = (state) => state.todos.items;
export const selectActiveFilter = (state) => state.todos.activeFilter;
export const selectFilteredTodos = (state) => {
  if (state.todos.activeFilter === "all") {
    return state.todos.items;
  }
  return state.todos.items.filter((todo) =>
    state.todos.activeFilter === "completed"
      ? todo.isCompleted === true
      : todo.isCompleted === false
  );
};

export const { addTodo, checkTodo, deleteTodo, changeFilter } =
  todosSlice.actions;
export default todosSlice.reducer;
