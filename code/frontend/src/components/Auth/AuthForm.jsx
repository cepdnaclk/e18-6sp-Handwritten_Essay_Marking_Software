
import { Link, Navigate } from "react-router-dom";

import { useCallback, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  AppBar,
} from "@mui/material";
import useForm from "../../Hooks/useForm";
import logo from "../../images/logo.png";
import Footer from "../Footer/Footer";
import axios from '../../API/axios'
import { toast } from "react-hot-toast";

import "./AuthForm.css";

const AuthForm = () => {
  const navigate = useNavigate();

  const getFreshModel = () => ({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { values, setValues, errors, setErrors, handleInputChange } =
    useForm(getFreshModel);

  const [Varient, setVarient] = useState("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const onSubmit = () => {
    if (
      values.username !== "" &&
      isValidEmail(values.email) &&
      values.password === values.confirmPassword
    ) {
      // navigate("/signUpForm", { state: values });
        axios
          .post("/api/auth/register", values)
          .then((response) => {
            if (response.status === 201) {
              toast.success("Registration successful!");
  
              localStorage.setItem("user", JSON.stringify(response.data));
  
              navigate("/home"); // Redirect to login page after successful registration
            } else {
              toast.error("Registration failed. Please check your details.");
            }
          })
          .catch((error) => {
            console.error("Error during registration:", error);
            toast.error("Something went wrong during registration.");
          });
    
    }

    console.log(values);
  };

  return (
    <>
      <div className='auth-background'>
        <AppBar
          sx={{ marginBottom: 2, zIndex: (theme) => theme.zIndex.drawer + 1 }}
          style={{ background: "#EFE7FA" }}
          position='fixed'
          elevation={0}
        >
          <img style={{ maxWidth: 120 }} src={logo} />
        </AppBar>

        <Box
          marginTop={15}
          width={"100%"}
          bgcolor={"#131485"}
          borderRadius={2}
          padding={4}
        >
          <Box
            borderColor={"#0001E4"}
            bgcolor={"white"}
            borderRadius={2}
            padding={4}
            width={"100%"}
          >
            <Stack
              direction='column'
              justifyContent='center'
              alignItems='center'
              spacing={2}
            >
              <Typography color={"#F01F75"} variant='h6'>
                Create Account
              </Typography>
              <Stack
                justifyContent='center'
                alignItems='center'
                spacing={2}
                direction={"column"}
              >
                <Stack spacing={2} direction={"row"}>
                  <TextField
                    id='outlined-basic'
                    label='Username'
                    variant='outlined'
                    value={values.username}
                    name='username'
                    onChange={handleInputChange}
                    error={values.username === ""}
                    required
                    helperText={
                      values.username === "" ? "Username required" : ""
                    }
                  />
                  <TextField
                    id='outlined-basic'
                    label='Email'
                    value={values.email}
                    name='email'
                    type='email'
                    variant='outlined'
                    onChange={handleInputChange}
                    error={!isValidEmail(values.email)}
                    required
                    helperText={
                      !isValidEmail(values.email) ? "Email invalid" : ""
                    }
                  />
                </Stack>
                <Stack spacing={2} direction={"row"}>
                  <TextField
                    name='password'
                    id='outlined-basic'
                    label='Password'
                    value={values.password}
                    variant='outlined'
                    type='password'
                    onChange={handleInputChange}
                    error={values.password === ""}
                    required
                    helperText={
                      values.password === "" ? "Password required" : ""
                    }
                  />
                  <TextField
                    id='outlined-basic'
                    name='confirmPassword'
                    label='Confirm Password'
                    value={values.confirmPassword}
                    variant='outlined'
                    type='password'
                    error={values.password !== values.confirmPassword}
                    required
                    helperText={
                      values.password !== values.confirmPassword
                        ? "Passwords not matching"
                        : ""
                    }
                    onChange={handleInputChange}
                  />
                </Stack>
                <Box padding={2} borderRadius={2} bgcolor={"lightgray"}>
                  <Typography>
                    Passwords must be at least 6 characters and contain at least
                    one letter and one number Passwords are case-sensitive.
                  </Typography>
                </Box>
              </Stack>
              <Button onClick={onSubmit} variant='contained'>
                Continue
              </Button>
              <Typography>
                Existing User?
                <Link to='/login'>Click here to log in</Link>
              </Typography>
            </Stack>
          </Box>
        </Box>
      </div>
      <Footer />
    </>
  );
};

export default AuthForm;
