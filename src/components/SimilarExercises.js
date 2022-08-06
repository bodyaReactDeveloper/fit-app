import { Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

import HorizontalScrollBar from './HorizontalScrollbar'
import Loading from './Loading'


const SimilarExercises = ({ equipmentExercises, targetMuscleExercises }) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0' } }}>
      <Box m={"50px 0"}>
        <Typography mb={5} variant="h3">
          Exerciss that target the same muscle group
        </Typography>

        <Stack direction={"row"} sx={{ p: '2', position: 'relative' }}>
          {targetMuscleExercises ? <HorizontalScrollBar data={targetMuscleExercises} />
            : <Loading />}
        </Stack>
      </Box>


      <Box m={"50px 0"}>
        <Typography mb={5} variant="h3">
          Exerciss that target the same equipment
        </Typography>

        <Stack direction={"row"} sx={{ p: '2', position: 'relative' }}>
          {equipmentExercises ? <HorizontalScrollBar data={equipmentExercises} />
            : <Loading />}
        </Stack>
      </Box>

    </Box>
  )
}

export default SimilarExercises
