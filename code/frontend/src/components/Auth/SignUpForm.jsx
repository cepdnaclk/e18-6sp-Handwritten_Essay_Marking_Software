// import "./AuthForm.css";
import { useState } from "react";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  AppBar,
} from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";
import useForm from "../../Hooks/useForm";
import axios from "../../API/axios";
import logo from "../../images/logo.png";
import Footer from "../Footer/Footer";

function SignUpForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const info = location.state;
  const [isLoading, setIsLoading] = useState(false);

  const userModel = () => ({
    firstName: "",
    lastName: "",
    username: info.username,
    email: info.email,
    password: info.password,
    nearByPostOffice: "",
    domainName: "",
    nationalIdNumber: "",
    permanentAddress: "",
    currentAddress: "",
    thirdPartyAddress: "",
  });

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const { values, setValues, errors, setErrors, handleInputChange } =
    useForm(userModel);

  const validate = () => {
    let temp = {};
    if (values.firstName === "") {
      temp.firstName = "Invalid name";
    }

    if (values.lastName === "") {
      temp.lastName = "Invalid last name";
    }

    if (values.username === "") {
      temp.username = "Username is required";
    }

    if (values.email === "") {
      temp.email = "Email is required";
    } else if (!isValidEmail(values.email)) {
      temp.email = "Invalid email format";
    }

    if (values.password === "") {
      temp.password = "Password is required";
    } else if (values.password.length < 8) {
      temp.password = "Password should be at least 8 characters long";
    }

    if (values.nearByPostOffice === "") {
      temp.nearByPostOffice = "Nearby post office is required";
    }

    if (values.domainName === "") {
      temp.domainName = "Domain name is required";
    }

    if (values.nationalIdNumber === "") {
      temp.nationalIdNumber = "National ID number is required";
    }

    if (values.permanentAddress === "") {
      temp.permanentAddress = "Permanent address is required";
    }

    if (values.currentAddress === "") {
      temp.currentAddress = "Current address is required";
    }

    setErrors(temp);
    return Object.values(temp).every((x) => x === "");
  };

  const siguUp = () => {
    console.log(values);

    if (validate()) {
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
    // .finally(() => setIsLoading(false))
  };

  return (
    // <div className='auth-background'>
    <>
      <AppBar
        sx={{ marginBottom: 2, zIndex: (theme) => theme.zIndex.drawer + 1 }}
        style={{ background: "#EFE7FA" }}
        position='fixed'
        elevation={0}
      >
        <img style={{ maxWidth: 120 }} src={logo} />
      </AppBar>
      <Box
        width={"100%"}
        bgcolor={"white"}
        borderRadius={2}
        marginTop={15}
        //   borderColor={"#0001E4"}
        //   border={2}
        padding={4}
        sx={{ border: 1, borderColor: "#0001E4" }}
      >
        <Stack
          direction='column'
          justifyContent='center'
          alignItems='center'
          spacing={2}
        >
          <Typography color={"#F01F75"} variant='h6'>
            Sign Up
          </Typography>
          <Stack spacing={2} direction={"column"}>
            <Stack spacing={2} direction={"row"}>
              <TextField
                id='outlined-basic'
                label='Firstname'
                variant='outlined'
                value={values.firstName}
                onChange={handleInputChange}
                name='firstName'
                required
                {...(errors.firstName && {
                  error: true,
                  helperText: errors.firstName,
                })}
              />
              <TextField
                id='outlined-basic'
                label='LastName'
                variant='outlined'
                value={values.lastName}
                onChange={handleInputChange}
                name='lastName'
                required
                {...(errors.lastName && {
                  error: true,
                  helperText: errors.lastName,
                })}
              />
            </Stack>
            <Stack spacing={2} direction={"row"}>
              <TextField
                id='outlined-basic'
                label='Username'
                variant='outlined'
                value={values.username}
                onChange={handleInputChange}
                name='username'
                required
                {...(errors.username && {
                  error: true,
                  helperText: errors.username,
                })}
              />
              <TextField
                id='outlined-basic'
                label='Email Address'
                variant='outlined'
                value={values.email}
                onChange={handleInputChange}
                name='email'
                required
                {...(errors.email && { error: true, helperText: errors.email })}
              />
            </Stack>
            <Stack spacing={2} direction={"row"}>
              <TextField
                id='outlined-basic'
                label='Nearby Post Office'
                variant='outlined'
                value={values.nearByPostOffice}
                onChange={handleInputChange}
                name='nearByPostOffice'
                required
                {...(errors.nearByPostOffice && {
                  error: true,
                  helperText: errors.nearByPostOffice,
                })}
              />
              <TextField
                id='outlined-basic'
                label='Domain Name'
                variant='outlined'
                value={values.domainName}
                onChange={handleInputChange}
                name='domainName'
                required
                {...(errors.domainName && {
                  error: true,
                  helperText: errors.domainName,
                })}
              />
            </Stack>
            <TextField
              id='outlined-basic'
              label='National Id Number'
              variant='outlined'
              value={values.nationalIdNumber}
              onChange={handleInputChange}
              name='nationalIdNumber'
              required
              {...(errors.nationalIdNumber && {
                error: true,
                helperText: errors.nationalIdNumber,
              })}
            />
            <TextField
              id='outlined-basic'
              label='Permanent Address'
              variant='outlined'
              value={values.permanentAddress}
              onChange={handleInputChange}
              name='permanentAddress'
              required
              {...(errors.permanentAddress && {
                error: true,
                helperText: errors.permanentAddress,
              })}
            />
            <TextField
              id='outlined-basic'
              label='Current Address'
              variant='outlined'
              value={values.currentAddress}
              onChange={handleInputChange}
              name='currentAddress'
              required
              {...(errors.currentAddress && {
                error: true,
                helperText: errors.currentAddress,
              })}
            />
            <TextField
              id='outlined-basic'
              label='Third Party Address'
              variant='outlined'
              value={values.thirdPartyAddress}
              onChange={handleInputChange}
              name='thirdPartyAddress'
            />
          </Stack>
          <Button variant='contained' onClick={siguUp}>
            Sign Up
          </Button>
          <Typography>
            Existing User?
            <Link to='/login'>Click here to log in</Link>
          </Typography>
        </Stack>
      </Box>
      <Footer />
    </>
    // </div>
  );
}

export default SignUpForm;
