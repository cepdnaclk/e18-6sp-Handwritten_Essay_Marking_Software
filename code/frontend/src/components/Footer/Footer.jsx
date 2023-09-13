import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import logo from "../../images/logo.png";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import BusinessIcon from "@mui/icons-material/Business";

function Footer() {
  return (
    // <Box
    //   padding={5}
    //   bgcolor={"#131485"}
    //   width={"100%"}
    //   marginTop={3}
    //   bottom={0}
    //   // component='footer'
    //   // sx={{
    //   //   bottom: 0,
    //   //   width: "100%",
    //   //   marginTop: 3,
    //   // }}
    // >
    <Stack
      direction='row'
      justifyContent='center'
      alignItems='center'
      spacing={5}
      bgcolor={"#131485"}
      width={"100%"}
      marginTop={3}
      bottom={0}
      padding={5}
    >
      <img width={250} src={logo} width={60}/>
      <Typography color={"white"}>
        Experience efficient and reliable <br />
        services tailored to your needs
      </Typography>

      <Stack color={"white"} direction={"column"}>
        <Typography variant='h6'>Our Links</Typography>
        <Typography>Home</Typography>
        <Typography>About Us</Typography>
        <Typography>Services</Typography>
        <Typography>Contact Us</Typography>
        <Typography>Help</Typography>
      </Stack>

      <Stack color={"white"} direction={"column"}>
        <Typography variant='h6'>Contact Us</Typography>
        <Typography>
          <CallIcon /> 011-987827890
        </Typography>
        <Typography>
          <EmailIcon /> info@essaymarker.lk
        </Typography>
        <Typography>
          <BusinessIcon />
          490, Colombo, 00300, Sri Lanka.
        </Typography>
      </Stack>
    </Stack>
    // </Box>
  );
}

export default Footer;
