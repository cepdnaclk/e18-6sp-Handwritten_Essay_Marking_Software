import "./AuthForm.css";
import { useState , useContext} from "react";
import { Box, Button, Link, Stack, TextField, Typography ,AppBar} from "@mui/material";
import { Navigate, Link as RouterLink, useNavigate } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import { toast } from "react-hot-toast";
import axios from '../../API/axios'
import UserContext from "../../userContext";
import logo from "../../images/logo.png";
import Footer from "../Footer/Footer";

function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const {setUserData} = useContext(UserContext)

  const userModel = () =>({
    username: "",
    password: ""
  })

  const { values, setValues, errors, setErrors, handleInputChange } =
    useForm(userModel);

  const loginOnSubmit = (e) => {
    console.log(values);
    axios.post('/api/auth/login', values)
        .then(response => {
                console.log(response)
            if (response.status === 200) {

              localStorage.setItem('user', JSON.stringify(response.data));
              setUserData(response.data)

                toast.success('Login successful!');
                if (response.data.isAdmin) {
                  navigate('/admin/dashboard')
                } else {
                    navigate('/home')
                }
            } else {
                toast.error('Invalid credentials. Please try again.');
            }
            })
            .catch(error => {
            console.error('Error during login:', error);
            toast.error('Something went wrong during login.');
            })
            // .finally(() => setIsLoading(false));
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
          sx={{ marginTop: 15 }}
          borderColor={"#0001E4"}
          bgcolor={"white"}
          borderRadius={2}
          padding={4}
          width={"100%"}
        >
          <Stack direction={"row"}>
            <Stack
              direction='column'
              justifyContent='center'
              alignItems='center'
              spacing={2}
              width={500}
            >
              <Typography color={"#F01F75"} variant='h6'>
                Don't have an account
              </Typography>
              <RouterLink to='/signup'>
                <Button variant='contained'>Sign Up</Button>
              </RouterLink>
            </Stack>
            <Stack
              direction='column'
              justifyContent='center'
              alignItems='center'
              spacing={2}
            >
              <Typography color={"#F01F75"} variant='h6'>
                Login to your account
              </Typography>
              <Stack
                justifyContent='center'
                alignItems='center'
                spacing={2}
                direction={"column"}
              >
                <TextField
                  id='outlined-basic'
                  label='Username'
                  variant='outlined'
                  name="username"
                  value={values.username}
                  onChange={handleInputChange}
                />

                <TextField
                  id='outlined-basic'
                  label='Password'
                  variant='outlined'
                  name="password"
                  value={values.password}
                  type='password'
                  onChange={handleInputChange}
                />

                <Typography> 
                  <Link href='/forgotPassword'>Forgot Password ?</Link>
                </Typography>
              </Stack>
              <Button disabled={isLoading} variant='contained'  onClick={loginOnSubmit}>Login</Button>
            </Stack>
          </Stack>
        </Box>
      </div>
        <Footer />
    </>
  );
}

export default LoginForm;
