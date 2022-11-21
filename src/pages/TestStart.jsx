import { ArrowBackIcon, CloseIcon, RepeatIcon } from "@chakra-ui/icons";
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";
import { Box, Button, Flex, Grid, GridItem, Image } from "@chakra-ui/react";
import { questions } from "../question1";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import ProgressBar from "../components/ProgressBar";

function TestStart() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [state, setState] = useState(false);
  const [score, setScore] = useState(0);

  const handleClick = (isCorrect) => {
    const nextQuestion = currentQuestion + 1;
    if (isCorrect === true) {
      setState(true);
      setScore(score + 1);
    } else {
      setState(false);
    }
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  const backHandle = () => {
    const backQuestion = currentQuestion - 1;
    setCurrentQuestion(backQuestion);
    if (state === true) {
      setScore(score - 1);
    }
  };
  const closeBtn = () => {
    navigate("/");
  };
  const reStartBtn = () => {
    navigate("/");
  };
  return (
    <div className="mainDiv">
      {showScore ? (
        <>
          <NavBar />

          <Box className="score">
            <h1 className="scoreText">
              IQ Test for kids from 7 to 16 year old
            </h1>
            <button className="reStartbtn" onClick={reStartBtn}>
              <RepeatIcon mr={4} />
              Take the test again
            </button>
            <Box className="score-section">
              <Flex w={1200} minH={500}>
                <Box w={700}>
                  <h1>
                    <b>Your result:</b>
                  </h1>
                  <br />
                  <p>
                    <b>Your IQ is {(score / questions.length) * 100}.</b> This
                    corresponds to a below average level IQ. In this test you
                    have{" "}
                    <b>
                      {" "}
                      {score} correct answers from {questions.length}.
                    </b>{" "}
                    This is not a very good result for your age 16.
                  </p>
                  <br />
                  <p>
                    Please note that the first four questions of the test were
                    only the practice questions and they do not count towards
                    the final result.
                  </p>
                </Box>
                <Box w={200}></Box>
                <Grid
                  templateRows="repeat(1, 1fr)"
                  templateColumns="repeat(5, 1fr)"
                  gap={6}
                  h={70}
                >
                  <GridItem colSpan={5} color={"ActiveBorder"}>
                    {" "}
                    <img src="" alt="" />{" "}
                  </GridItem>
                  <GridItem colSpan={5} color={"ActiveBorder"}>
                    {" "}
                    <h1>4.3</h1>
                  </GridItem>
                  <GridItem colSpan={5} color={"ActiveBorder"}>
                    <b> Our social networks</b>
                  </GridItem>
                  <GridItem>
                    <FaFacebook />
                  </GridItem>
                  <GridItem>
                    <FaTwitter />
                  </GridItem>
                  <GridItem>
                    <FaInstagram />
                  </GridItem>
                  <GridItem>
                    <FaTelegram />
                  </GridItem>
                </Grid>
              </Flex>
            </Box>
          </Box>
        </>
      ) : (
        <>
          <Box className="textHead">
            <span className="countContainer">
              <h1 style={{ color: "rgb(75, 75, 75)" }}>
                {currentQuestion + 1}
              </h1>
              <h1 className="topCount">/{questions.length}</h1>
            </span>
            <button className="closeBtn" onClick={closeBtn}>
              <CloseIcon bgSize={30} />
            </button>
          </Box>
          <Box className="questionAndAnswers">
            <Box>
              <Box className="question-section">
                <Image
                  className="imgs"
                  boxSize=""
                  objectFit="cover"
                  src={questions[currentQuestion].questionImage[0]}
                  alt="img"
                />
              </Box>
              <Box className="questionText">
                <span className="textContainer">
                  <h1 className="text">
                    {currentQuestion + 1}.Which shape should be in the rightmost
                    cell with a question mark?
                  </h1>
                </span>
              </Box>
              <Box>
                {questions[currentQuestion].answerOptions.map(
                  (option, index) => (
                    <button
                      className="btn1"
                      value={option.answerImage}
                      onClick={() => handleClick(option.isCorrect)}
                    >
                      <Image
                        boxSize=""
                        objectFit="cover"
                        src={option.answerImage}
                        alt="img"
                      />
                    </button>
                  )
                )}
              </Box>
              {currentQuestion !== 0 ? (
                <Button
                  className="backBnt"
                  colorScheme="blackAlpha"
                  mt={6}
                  mr={12}
                  w={"130px"}
                  h={"12"}
                  onClick={backHandle}
                >
                  <ArrowBackIcon fontSize={"30px"} colorScheme="#fff" />
                </Button>
              ) : (
                ""
              )}
            </Box>
          </Box>
        </>
      )}
      {!currentQuestion + 1 === 1 ? (
        <ProgressBar currentQuestion={currentQuestion} />
      ) : (
        ""
      )}
    </div>
  );
}

export default TestStart;
