import { Center, Grid, GridItem, Container, VStack, Box } from "@chakra-ui/react";
import React from "react";
// body {
//     background-image: url("./images/forest.jpg");

//     height: 100%;
//     width: 100%;

//     background-position: center;
//     background-size: cover;
// }
const HomePage = () => {
  return (
    <div>
      
      <VStack>
       <center>
       <Container maxW="container.xxl" >
          <Center
            h="300px"
            color="white"
            w="1308px"
            backgroundImage={
              "url(https://th.bing.com/th/id/OIP._0ebgEJ1TLM5Z7t0ggIL0QHaD3?pid=ImgDet&w=946&h=493&rs=1)"
            }
            backgroundSize={"cover"}
            backgroundPosition={"center center"}
          >
            hello
            {/* <Grid
          h="295px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={4}
          textAlign="center"
        >
          <GridItem colSpan={4} bg="tomato" />
        </Grid> */}
          </Center>
        </Container>
       </center>
      </VStack>
    </div>
  );
};

export default HomePage;
