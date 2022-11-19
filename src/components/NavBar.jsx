import { HamburgerIcon } from "@chakra-ui/icons";
import { Avatar, Stack } from "@chakra-ui/react";
import React from "react";

function NavBar() {
  return (
    <div
      className="nav"
      style={{
        width:"100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems:"center",
        height: "80px",
        backgroundColor:"#fff"
      }}
    >
      <Stack direction='row'>
      <HamburgerIcon fontSize={50}/>
      </Stack>
      <Stack direction='row' mr={2}>
      <Avatar src='https://bit.ly/broken-link' />
      </Stack>
    
    </div>
  );
}

export default NavBar;
