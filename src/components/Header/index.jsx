import React from "react";
import { Center, Image } from "@chakra-ui/react";
import Logo from "./Logo.png";

function Header() {
  return (
    <div>
      <Center>
        <button href="#">
          <Image src={Logo} h={"23vh"} w={"28vw"} />
        </button>
      </Center>
    </div>
  );
}

export default React.memo(Header);
