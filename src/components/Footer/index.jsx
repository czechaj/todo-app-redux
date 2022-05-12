import React from "react";
import { Text, Flex } from "@chakra-ui/react";
function Footer() {
  return (
    <Flex className="footer">
      <Text className="footer-text">
        made by <a href="https://github.com/czechaj" target={"blank"} style={{ fontWeight: "bold" }}>czechaj</a>
      </Text>
    </Flex>
  );
}

export default Footer;
