import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import image from "../../images/signupimg.png";

const LoginMessageSection = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          width={"50%"}
          sx={{
            backgroundColor: "white",
            padding: "50px",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography color={"#0001E4"} variant='h4'>
          Handwritten Essay Marking Software
          </Typography>
          <Stack
            direction='row'
            justifyContent='center'
            alignItems='center'
            spacing={2}
            marginTop={2}
          >
            <Link to='/login'>
                <Button variant='outlined'>Login</Button>
            </Link>
            <Link to='/signup'>
                <Button variant='contained'>SignUp</Button>
            </Link>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default LoginMessageSection;