import React from "react";
import { Skeleton, Text } from "@chakra-ui/react";
import { useTheme } from "../../contexts/ThemeContext";
function Skeletons() {
  const { theme } = useTheme();
  return (
    <>
      <Text fontStyle={"italic"}>Let's organize your day</Text>
      <Text fontWeight={"bold"} fontSize={10} marginBottom={5}>
        Type something up!
      </Text>
      <Skeleton
        startColor={`${theme === "#fff" ? "burlywood" : "whiteAlpha.100"}`}
        endColor={`${theme === "#fff" ? "pink.100" : "whiteAlpha.200"}`}
        marginBottom={3}
        height="20px"
      />
      <Skeleton
        startColor={`${theme === "#fff" ? "burlywood" : "whiteAlpha.100"}`}
        endColor={`${theme === "#fff" ? "pink.100" : "whiteAlpha.200"}`}
        marginBottom={3}
        height="20px"
      />
      <Skeleton
        startColor={`${theme === "#fff" ? "burlywood" : "whiteAlpha.100"}`}
        endColor={`${theme === "#fff" ? "pink.100" : "whiteAlpha.200"}`}
        marginBottom={3}
        height="20px"
      />
    </>
  );
}

export default Skeletons;
