import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import useForm from "../../Hooks/useForm";
import frame from "../../images/Frame.png";
// import mailSent from "../../images/29630388_2206_w023_n003_2530b_p1_2530 1.png";
import axios from "../../API/axios";
import { toast } from "react-hot-toast";
import mailSent from "../../images/mcs.png";
import React, { useState, useEffect } from "react";
import { set } from "react-hook-form";

const Contact = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const userJSON = localStorage.getItem("user");
    
    if (userJSON) {
      console.log("User JSON:")
      try {
        // Parse the JSON string into a JavaScript object
        const userObject = JSON.parse(userJSON);
        
          // Access the username property
          const userUsername = userObject.username;  
          // Set the username in the state
          setUsername(userUsername);
        } catch (error) {
          console.error("Error parsing user JSON:", error);
        }
      } 
      console.log(username);
      setValues(getFreshModel)
}, [username]);



  const getFreshModel = () => ({
    userName: username,
    address: "",
    message: "",
  });

  const { values, setValues, errors, setErrors, handleInputChange } =
    useForm(getFreshModel);


    const onSendClick = () => {

      axios.post('/api/userfeedback', values)
      .then(response => {
              console.log(response)
          if (response.status === 200) {
              toast.success('Add successful!');
              setValues(getFreshModel)
    
          } else {
              toast.error('Invalid credentials. Please try again.');
          }
          })
          .catch(error => {
          console.error('Error during login:', error);
          toast.error('Something went wrong .');
          })
    
    };

   

  return (
    <>
      <NavBar />
      <Stack
        direction='column'
        justifyContent='center'
        alignItems='center'
        spacing={2}
        marginTop={16}
      >
        <Typography color={"#131485"} variant='h4'>
          Contact Us
        </Typography>
        <Typography>If you want to contact us, leave a message</Typography>
        <Stack
          borderRadius={2}
          borderColor={"#131485"}
          border={2}
          padding={2}
          direction='row'
          justifyContent='center'
          alignItems='center'
          spacing={1}
        >
          <Stack spacing={2} direction={"column"}>
            <Typography
              bgcolor={"#131485"}
              borderRadius={2}
              padding={2}
              width={"100%"}
              color={"white"}
              variant='h7'
              align='center'
            >
              Send Feedback
            </Typography>
            <TextField
              id='outlined-basic'
              label='Username'
              variant='outlined'
              name='userName'
              value={values.userName}
              onChange={handleInputChange}
            />
            <TextField
              id='outlined-basic'
              label='Address'
              variant='outlined'
              name='address'
              value={values.address}
              onChange={handleInputChange}
            />

            {/* <TextField
              id='outlined-basic'
              label='Phone Number'
              variant='outlined'
              name='phoneNumber'
              value={values.phoneNumber}
              onChange={handleInputChange}
            /> */}

            <TextField
              id='outlined-basic'
              label='Message'
              variant='outlined'
              name='message'
              value={values.message}
              onChange={handleInputChange}
            />

            <Button variant='contained' onClick={onSendClick}>
              Submit Feedback
            </Button>
          </Stack>

          <img
            style={{ marginLeft: 50, borderRadius: 20 }}
            width={300}
            src={mailSent}
          />
        </Stack>
      </Stack>
      <Footer />
    </>
  );
};

export default Contact;
