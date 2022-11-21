import { Grid } from '@chakra-ui/react'
import { Progress } from '@chakra-ui/react'
import React from 'react'

function ProgressBar({currentQuestion}) {
  return (
    <Grid className="prgressContainer">
    <Progress
      bgColor={"#5555b5"}
      colorScheme={"whiteAlpha"}
      className="progressBar"
      value={
        currentQuestion + 1 === 1
          ? 0
          : currentQuestion + 1 === 2
          ? 20
          : currentQuestion + 1 === 3
          ? 40
          : currentQuestion + 1 === 4
          ? 60
          : currentQuestion + 1 === 5
          ? 80
          : 100
      }
    />
  </Grid>
  )
}

export default ProgressBar