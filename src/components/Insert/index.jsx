import React, { useState } from "react";
import { FormControl, Text, Input, FormLabel, Button } from "@chakra-ui/react";
import { useTheme } from "../../contexts/ThemeContext";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todos/todosSlice";
import { message } from "antd";

function Insert() {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  const initValues = {
    title: "",
    description: "",
    id: nanoid(),
    isCompleted: false,
  };
  const [values, setValues] = useState(initValues);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (values.title.trim() !== "") {
      dispatch(addTodo(values));
    } else {
      message.warning({
        content: "You can't left blank title section",
        duration: 2,
      });
    }
    setValues(initValues);
  };

  return (
    <div style={{ margin: "2vh 10vw" }}>
      <Text
        fontFamily={"heading"}
        fontWeight={"light"}
        fontStyle={"normal"}
        fontSize={20}
        align={"left"}
      >
        What needs to be done?
      </Text>
      <form onSubmit={handleSubmit}>
        <FormControl mt={5} mb={10}>
          <FormLabel
            color={`${theme === "#fff" ? "black" : "white"}`}
            htmlFor="title"
          >
            {" "}
            Title{" "}
          </FormLabel>
          <Input
            variant={`${theme === "#fff" ? "outline" : "flushed"}`}
            color={`${theme === "#fff" ? "black" : "white"}`}
            name="title"
            value={values.title}
            onChange={handleChange}
            id="title"
          />
          <FormLabel
            color={`${theme === "#fff" ? "black" : "white"}`}
            mt={4}
            htmlFor="description"
          >
            {" "}
            Describe details(optional){" "}
          </FormLabel>
          <Input
            variant={`${theme === "#fff" ? "outline" : "flushed"}`}
            color={`${theme === "#fff" ? "black" : "white"}`}
            name="description"
            value={values.description}
            onChange={handleChange}
            id="description"
          />

          <Button
            colorScheme={`${theme === "#fff" ? "teal" : "blackAlpha"}`}
            variant={`${theme === "#fff" ? "ghost" : "solid"}`}
            marginTop={4}
            type="submit"
          >
            Add
          </Button>
        </FormControl>
      </form>
    </div>
  );
}

export default Insert;
