import React from 'react'
import { Stack } from "@mui/material"
import { Link } from "react-router-dom"

import Logo from "../assets/images/Logo.png"

const Navbar = () => {
  return (
    <Stack direction={"row"} justifyContent={"space-around"} sx={ {gap: { sm: "122px", xc:"40px"}, mt: {sm: "32x", xc:"20px"},
    justifyContent:"none"}} px={"20px"}>
      <Link to={"/"}>
        <img src={Logo} style={{
          width: "48px", height: "48px", margin: "0 20px"
        }} />
      </Link>

      <Stack direction={"row"} gap={"40px"} fontSize={"20px"} alignItems={"flex-end"}>

        <Link href='#home' to={"/"}>
          <span  style={{ textDecoration: "none", color: "#3A1212", borderBottom: "3px solid #FF2625" }}>
            Home
          </span>
        </Link>

        <Link href='#exercises' to={"/exercises"}>
          <span  style={{ textDecoration: "none", color: "#3A1212",}}>
          exercise
          </span>
        </Link>
      </Stack>

    </Stack>
  )
}

export default Navbar
