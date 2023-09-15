import AuthForm from "../../components/Auth/AuthForm";

import ServiceCard from "../Services/ServiceCard";
import imageOne from "../../images/a.png";
import imageTwo from "../../images/Isolation_Mode(1).png";
import imageThree from "../../images/Isolation_Mode.png";
import imageFour from "../../images/Isolation_Mode(2).png";
import { Stack,Typography, Button, TextField} from "@mui/material";
import whoWe from "../../images/probSol.jpg";
import frame from "../../images/Frame.png";
import mailSent from "../../images/mcs.png";
import "./home.css";
import axios from "../../API/axios"
import { toast } from "react-hot-toast";
import useForm from "../../Hooks/useForm";
import LoginMessageSection from "../LoginMessageSection/LoginMessageSection";
import Footer from "../../components/Footer/Footer";
import AppBar from "@mui/material/AppBar";
import logo from "../../images/logo.png";



export default function Home() {

  const getFreshModel = () => ({
    userName: "",
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
    <AppBar
      sx={{ marginBottom: 2, zIndex: (theme) => theme.zIndex.drawer + 1 }}
      style={{ background: "#EFE7FA" }}
      position='fixed'
      elevation={0}
    >
      <img style={{ maxWidth: 120 }} src={logo} width={50} />
    </AppBar>
      {/* <NavBar isUser={true} /> */}
      {/* <div className='home-background'> */}
        {/* <div className='home-background-wrap'> */}
          {/* <AuthForm /> */}
          <LoginMessageSection />
          <Stack direction={"column"}>
        <Typography
          padding={2}
          marginTop={15}
          marginLeft={2}
          marginRight={2}
          marginBottom={2}
          bgcolor={" #F2590033"}
          borderRadius={2}
          variant='h4'
        >
          Who We Are
        </Typography>
        <Stack
          direction='row-reverse'
          justifyContent='center'
          alignItems='center'
          spacing={2}
        >
          <Stack direction={"column"} spacing={2}>
          <Typography marginLeft={10} variant={"h6"} width={"70%"}>
            Traditional manual marking is a time-consuming and labor-intensive process, 
            often leading to inefficiencies in grading. Educators spend significant amounts of time 
            reviewing and evaluating each student's essay, which can be impractical and burdensome. 
            Also, grading is often influenced by the mood or biases of the marker, 
            leading to inconsistencies in evaluation. Moreover, as the class size increases, 
            the task becomes more challenging and time-consuming for educators.

          </Typography>

            <Typography marginLeft={4} variant={"h6"} width={"80%"}>
            Imagine, your students' words are transformed into digital, 
            giving a consistent and objective grading!
            Handwritten Essay Marking Software is a sophisticated tool designed to address 
            the challenges of manual grading by providing a more consistent and objective 
            evaluation of students' handwritten essays. 
            
          </Typography>
          </Stack>
          <img width={"100%"} src={whoWe} alt='' />
        </Stack>
      </Stack>
      <Stack direction={"column"}>
        <Typography
          padding={2}
          marginTop={15}
          marginLeft={2}
          marginRight={2}
          marginBottom={2}
          bgcolor={" #F2590033"}
          borderRadius={2}
          variant='h4'
        >
          Our Services
        </Typography>
        <Stack
          direction='row'
          justifyContent='center'
          alignItems='center'
          spacing={2}
        >
          <Stack direction={"column"} spacing={2}>
            <ServiceCard
              title={"Marking based on valuable approach"}
              description={
                "Give efficient, consistent, fairness marking based on more identical features"
              }
              imageUrl={imageOne}
            />
            <ServiceCard
              title={"Consistent Marking"}
              description={
                "Provide high accurate marking without bias."
              }
              imageUrl={imageThree}
            />
          </Stack>
          <Stack direction={"column"} spacing={2}>
            <ServiceCard
              title={"Handle large number of long essays"}
              description={
                "When marker get bunch of essays with number of pages, it takes much time to do manually, So our platform gives best solution for that."
              }
              imageUrl={imageTwo}
            />
            <ServiceCard
              title={"Feedback for students"}
              description={
                "Providing detailed feedback to students"
              }
              imageUrl={imageFour}
            />
          </Stack>
        </Stack>
      </Stack>
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
        <Typography variant='h6'>If you want to contact us, leave a message</Typography>
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


          <img
            style={{ marginLeft: 50, borderRadius: 20 }}
            width={400}
            src={mailSent}
          />
        </Stack>
      </Stack>
        {/* </div> */}
      {/* </div> */}
      <Footer />
    </>
  );
}
