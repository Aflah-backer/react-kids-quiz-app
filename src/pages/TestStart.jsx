import { ArrowBackIcon, CloseIcon, RepeatIcon } from "@chakra-ui/icons";
import { Progress } from '@chakra-ui/react'
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter } from 'react-icons/fa'
import { Box, Button, Flex, Grid, GridItem, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

function TestStart() {
  const questions = [
    {
      questionImage: [
        "https://en.testometrika.com/upload/questions/9a3/9a3e5c664c57fefe9781ed343a0b4224.svg",
        "https://en.testometrika.com/upload/questions/9a3/9a3e5c664c57fefe9781ed343a0b4224.svg",
        "https://en.testometrika.com/upload/questions/9a3/9a3e5c664c57fefe9781ed343a0b4224.svg",
        "https://en.testometrika.com/upload/questions/9a3/9a3e5c664c57fefe9781ed343a0b4224.svg",
      ],
      // questionText:
      //   "Which shape should be in the rightmost cell with a question mark?",
      answerOptions: [
        {
          answerImage:
            "https://en.testometrika.com/upload/answers/2ad/2ad96527ff3bdffc254b05985d90e670.svg",
          isCorrect: false,
        },
        {
          answerImage:
            "https://en.testometrika.com/upload/answers/743/743c194ea591850121774bbcea728cb7.svg",
          isCorrect: false,
        },
        {
          answerImage:
            "https://en.testometrika.com/upload/answers/3f4/3f48e60b405fe3a20ae80b4c1effe5be.svg",
          isCorrect: false,
        },
        {
          answerImage:
            "https://en.testometrika.com/upload/answers/af1/af154b81388bbe80d95a6c2d958090d3.svg",
          isCorrect: true,
        },
      ],
    },
    {
      questionImage: [
        "https://en.testometrika.com/upload/questions/61f/61f8311dc95818b190b639bb10e7ff0a.svg",
        "https://en.testometrika.com/upload/questions/61f/61f8311dc95818b190b639bb10e7ff0a.svg",
        "https://en.testometrika.com/upload/questions/61f/61f8311dc95818b190b639bb10e7ff0a.svg",
        "https://en.testometrika.com/upload/questions/61f/61f8311dc95818b190b639bb10e7ff0a.svg",
      ],
      questionText:
        "Which shape should be in the rightmost cell with a question mark?",
      answerOptions: [
        {
          answerImage:
            "https://en.testometrika.com/upload/answers/9a3/9a3eb223416f61ff5b9177914b70bd60.svg",
          isCorrect: false,
        },
        {
          answerImage:
            "https://en.testometrika.com/upload/answers/c4d/c4d606c7c886fc53ecee625417464a02.svg",
          isCorrect: true,
        },
        {
          answerImage:
            "https://en.testometrika.com/upload/answers/b78/b7854d51e6fc99a7051b4eafe549ccdd.svg",
          isCorrect: false,
        },
        {
          answerImage:
            "https://en.testometrika.com/upload/answers/b9d/b9db4988f489cc0410930f09bb287963.svg",
          isCorrect: false,
        },
      ],
    },
    {
      questionImage: [
        "https://en.testometrika.com/upload/questions/56e/56e7575fce5c66102f68965309041c81.svg",
        "https://en.testometrika.com/upload/questions/56e/56e7575fce5c66102f68965309041c81.svg",
        "https://en.testometrika.com/upload/questions/56e/56e7575fce5c66102f68965309041c81.svg",
        "https://en.testometrika.com/upload/questions/56e/56e7575fce5c66102f68965309041c81.svg",
      ],
      questionText:
        "Which shape should be in the rightmost cell with a question mark?",
      answerOptions: [
        {
          answerImage:
            "https://en.testometrika.com/upload/answers/7f1/7f11134a286731f010982d5d79e8cd26.svg",
          isCorrect: false,
        },
        {
          answerImage:
            "https://en.testometrika.com/upload/answers/078/078f9d02c28538a24e685aa90ef651e3.svg",
          isCorrect: false,
        },
        {
          answerImage:
            "https://en.testometrika.com/upload/answers/52e/52e67d35e0f5d7ac65d639f7d74737b1.svg",
          isCorrect: true,
        },
        {
          answerImage:
            "https://en.testometrika.com/upload/answers/110/1108829aabfbc040dee01c20198f57be.svg",
          isCorrect: false,
        },
      ],
    },
    {
      questionImage: [
        "https://en.testometrika.com/upload/questions/857/85779e2ee0f5a8c6874284c8dc7f040a.svg",
        "https://en.testometrika.com/upload/questions/857/85779e2ee0f5a8c6874284c8dc7f040a.svg",
        "https://en.testometrika.com/upload/questions/857/85779e2ee0f5a8c6874284c8dc7f040a.svg",
        "https://en.testometrika.com/upload/questions/857/85779e2ee0f5a8c6874284c8dc7f040a.svg",
      ],
      questionText:
        "Which shape should be in the rightmost cell with a question mark?",
      answerOptions: [
        {
          answerImage:
            "https://en.testometrika.com/upload/answers/81f/81ffd37c5b0c47314c5c35d90cc410f3.svg",
          isCorrect: true,
        },
        {
          answerImage:
            "https://en.testometrika.com/upload/answers/833/8333eeab5e38a9e4cb24412453f29f7b.svg",
          isCorrect: false,
        },
        {
          answerImage:
            "https://en.testometrika.com/upload/answers/292/29281ad823bd13e1f99a39e04685e6ed.svg",
          isCorrect: false,
        },
        {
          answerImage:
            "https://en.testometrika.com/upload/answers/fe5/fe52d92ce882e1571d445b0951b2d887.svg",
          isCorrect: false,
        },
      ],
    },
    {
      questionImage: [
        "https://en.testometrika.com/upload/questions/86c/86c577fabc67aed0dbd84df222f0685a.svg",
        "https://en.testometrika.com/upload/questions/86c/86c577fabc67aed0dbd84df222f0685a.svg",
        "https://en.testometrika.com/upload/questions/86c/86c577fabc67aed0dbd84df222f0685a.svg",
        "https://en.testometrika.com/upload/questions/86c/86c577fabc67aed0dbd84df222f0685a.svg",
      ],
      questionText:
        "Which shape should be in the rightmost cell with a question mark?",
      answerOptions: [
        {
          answerImage:
            "https://en.testometrika.com/upload/answers/4e2/4e23e2df71d493fccae53c20760642c0.svg",
          isCorrect: false,
        },
        {
          answerImage:
            "https://en.testometrika.com/upload/answers/7df/7dfcfdb549c39a7d6c3cde429291bd03.svg",
          isCorrect: true,
        },
        {
          answerImage:
            "https://en.testometrika.com/upload/answers/405/405fc59bd9ca9b483046be0f5641c585.svg",
          isCorrect: false,
        },
        {
          answerImage:
            "https://en.testometrika.com/upload/answers/2f5/2f5bb5003870c7d81339a60fc9ee0abf.svg",
          isCorrect: false,
        },
      ],
    },
  ];
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
            <Box className="score-section" >
              <Flex w={1200} minH={500} >
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

                <Grid templateRows='repeat(1, 1fr)' templateColumns='repeat(5, 1fr)' gap={6} h={70} >
                <GridItem colSpan={5} color={"ActiveBorder"}> <img src="" alt="" /> </GridItem>  
                <GridItem colSpan={5} color={"ActiveBorder"}> <h1>4.3</h1></GridItem>  
                <GridItem colSpan={5} color={"ActiveBorder"}><b> Our social networks</b></GridItem>
                <GridItem ><FaFacebook/></GridItem>
                <GridItem ><FaTwitter/></GridItem>
                <GridItem ><FaInstagram/></GridItem>
                <GridItem ><FaTelegram/></GridItem>
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
      <Grid className="prgressContainer">
      <Progress bgColor={"#5555b5"} colorScheme={"whiteAlpha"} className="progressBar" 
      value={80} 
      />
      </Grid>
      
    </div>
  );
}

export default TestStart;
