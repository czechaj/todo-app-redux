import React from "react";
import { Flex, Text } from "@chakra-ui/react";

function TodosHeader() {
  return (
    <div>
      <Flex justify={"space-between"}>
        <Text
          fontWeight={"thin"}
          fontStyle={"italic"}
          fontSize={10}
          align={"left"}
        >
          {" "}
          Click to checkbox to set todos completed{" "}
        </Text>
        <Text
          fontWeight={"thin"}
          fontStyle={"italic"}
          fontSize={10}
          align={"left"}
        >
          {" "}
          Click to close button to remove them{" "}
        </Text>
      </Flex>
    </div>
  );
}

export default React.memo(TodosHeader);
