import React from 'react'
import { Box, Typography, Stack, Button } from "@mui/material"
import "../App.css"

import HeroBannerImage from "../assets/images/banner.png"

const HeroBanner = () => {
    return (
        <Box sx={{
            mt: { lg: "212px", xs: "70px" },
            ml: { sm: "50px" }
        }} position="relative" p="20px">

            <Typography color="#FF2625" fontWeight={600} fontSize="26px">
                Fittnes club
            </Typography>

            <Typography fontWeight={700} mb="23px" mt="30px"
                sx={{ fontSize: { lg: '44px', xs: '40px' } }}>
                Sweat, Smile <br /> and Repeat
            </Typography>

            <Typography fontSize={"22px"} lineHeight="35px" mb={4}>
                Check out the most effective exercises
            </Typography>

            <Button sx={{backgroundColor:"#ff2625", padding: "15px"}} 
            variant='contained' color='error' >Explore Exercises </Button>


            <Typography fontWeight={600} color="#ff2635" fontSize={"200px"} 
            sx={{
                opacity: 0.1,
                display: { lg: "block", xs: "none"}
            }}>
                Excercise
            </Typography>

            <img src={HeroBannerImage} className="hero-banner-img"/>
        </Box>
    )
}

export default HeroBanner
