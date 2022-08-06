import { Stack } from '@mui/material'
import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'

const Loading = () => {
  return (
    <Stack direction='row' justifyContent={"center"} width="100%">
        <InfinitySpin color='gray'/>
    </Stack>
  )
}

export default Loading
