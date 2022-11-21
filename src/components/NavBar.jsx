import { HamburgerIcon, Search2Icon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import React from "react";

function NavBar({page}) {
  return (
    <div
      className="nav"
      style={{ 
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "80px",
        backgroundColor: "#fff",
        zIndex:page==="home" ?"":"1",
        position:page==="home" ?"":"fixed",
      }}
    >
      <Stack direction="row">
        <Box>
          <HamburgerIcon fontSize={40} color="blue" marginLeft={4} />
        </Box>
        <Box className="logoBox">
          <img
            className="logoImg"
            src="https://en.testometrika.com/local/templates/main/img/testometrika.svg"
            alt="logo"
          />
        </Box>
      </Stack>
      <Stack direction="row" mr={6}>
        <Box className="searchBar">
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type="text"
              placeholder="Search among 337 tests..."
            />
            <InputRightElement width="4.5rem">
              <Search2Icon color={"ActiveBorder"} />
            </InputRightElement>
          </InputGroup>
        </Box>
        <Avatar src="https://bit.ly/broken-link" />
      </Stack>
    </div>
  );
}

export default NavBar;
