import { Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

import Logo from '../assets/images/Logo-1.png'

const Footer = () => {
  return (
    <Box mt='140px' mb="35px" bgcolor='#fff3f4'>
        <Stack gap="40px" alignItems={"center"} px="40px" pt='24px'>
            <img src={Logo} alt='logo' width={'200px'} height={'40px'}/>
        </Stack>

        <Typography variant="h5">
           "Всі думають що на першому місці <br/> мусить бути сім'я чи ціль досягнути чогось в житті,
           <br/> але насправді - повисіти на турнічках"<br/>
            <div><span style={{ marginBottom: '1000px', marginLeft: '300px'}}>Bohdan Shraier</span></div>
            
        </Typography>
    </Box>
  )
}

export default Footer
