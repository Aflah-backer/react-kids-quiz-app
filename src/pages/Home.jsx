import { Button, Container, Image, VStack } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

function Home() {
    const navigate = useNavigate()
    const handleClick = ()=>{
        navigate("/testStart")
    }
  return (
    <div
      className="container"
      style={{ backgroundColor: "#7272cc", width: "100%", height: "100vh" }}
    >
      <NavBar />
      <div className="divContainer">
        <VStack style={{marginTop:"6rem"}}>
          <Container maxW="-webkit-fit-content">
            <Image
              borderRadius="full"
              boxSize="150px"
              src="https://en.testometrika.com/upload/uf/066/066f89ecf51a3df5cbb83dcebebe5d7e.svg"
              alt="img"
            />
          </Container>
          <Container maxW="-webkit-fit-content">
            <p style={{ fontSize: "40px", fontWeight: "500", color: "#fff" }}>
              IQ Test
            </p>
          </Container>
          <Container maxW="-webkit-fit-content">
            <Button m={4} onClick={handleClick}>GetStart</Button>
          </Container>
          <Container maxW="1150" style={{marginTop:"3rem"}}>
            <p style={{color:"#fff",fontSize:"18px"}}>
              Surely many have heard about the intelligence quotient, or IQ. The
              easiest way to find out your intelligence level is to take an IQ
              test, which is a modern analogue of the well-known methodology
              "Raven's Progressive Matrix Scale". It is designed to determine
              the IQ of adults aged 14 to 65 years, regardless of nationality,
              religion, and other differences. All questions that you do not
              answer are considered incorrectly answered. You will be presented
              with a picture with a cropped area and several parts that fit into
              this area. Your task is to identify the one and only correct cut
              out picture. Take an IQ test online, find out your intelligence
              level, and be sure to share the results with your friends! Let's
              get started!
            </p>
          </Container>
        </VStack>
      </div>
    </div>
  );
}

export default Home;
