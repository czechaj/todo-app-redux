import React from "react";
import { Button, Flex } from "@chakra-ui/react";
import { useTheme } from "../../contexts/ThemeContext";
function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    setTheme(theme === "#fff" ? "#EFEAD8" : "#fff");
  };
  return (
    <Flex flexDirection={"row-reverse"}>
      <Button
        colorScheme={`${theme === "#fff" ? "teal" : "blackAlpha"}`}
        variant={`${theme === "#fff" ? "ghost" : "solid"}`}
        onClick={changeTheme}
      >
        Change Theme
      </Button>
    </Flex>
  );
}

export default ThemeButton;
