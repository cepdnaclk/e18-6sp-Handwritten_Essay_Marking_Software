import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { Stack, Typography } from "@mui/material";
import stampCollection from "../../images/essay.png";

const About = () => {
  return (
    <>
      <NavBar />
      <Stack direction={"column"}>
        <Typography
          padding={2}
          marginTop={15}
          marginLeft={2}
          marginRight={2}
          marginBottom={2}
          bgcolor={" #F2590033"}
          borderRadius={2}
          variant='h6'
        >
          Who We Are
        </Typography>
        <Stack
          direction='row-reverse'
          justifyContent='center'
          alignItems='center'
          spacing={2}
        >
          <Typography width={"50%"}>
            <h3>Essay Marker</h3>
            We provide a powerful Tool to grade handwritten essays by providing more consistent and objective grading.

            By giving facility by Automates manual grading by using latest technologies.You can relie on us. We give you the best service. Feel free to join with our service !
          </Typography>
          <img width={400} src={stampCollection} alt='' />
        </Stack>
      </Stack>
      <Footer />
    </>
  );
};

export default About;
