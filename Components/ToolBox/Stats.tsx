import React,{useState} from "react";
import {
   Button, 
  Flex,
  Icon, 
  Stack, 
  Text,
  Card, 
  CardHeader, 
  CardBody,
  CardFooter,
  Image,
  Heading,
  Divider,
  ButtonGroup,
  Box,
  Center

 } from "@chakra-ui/react";
import {FaVideo,FaCommentAlt,FaTasks } from "react-icons/fa";
import {BiCast } from "react-icons/bi";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {AiOutlineHistory } from "react-icons/ai";
import { HiDotsHorizontal } from "react-icons/hi";

const Stats: React.FC = () => {
    const percentage = 40;
    const [startDate, setStartDate] = useState(new Date());

  const handleDateChange = (date: React.SetStateAction<Date> | null) => {
    // Check if date is null and set startDate accordingly
    if (date === null) {
      setStartDate(null);
    } else {
      setStartDate(date);
    }
  };

  return (
    <Flex
      direction="column"
      cursor="pointer"
      position="sticky"
    >
    <Card>
      <Flex direction="column" p="12px">
      
       <Heading>Talk Stats</Heading>
       <Center py={4}>
      <Box style={{ width: 150, height: 150 }}>
        <CircularProgressbar
          value={percentage}
          text={
            <tspan>
              <tspan
                style={{
                  fontSize: "12px", // adjust the font size as needed
                }}
              >
                Active Users
              </tspan>
              <tspan
                x="50%"
                dy="1em"
                style={{
                  fontSize: "18px", // adjust the font size as needed
                 
                }}
              >
                {`${percentage}%`}
              </tspan>
            </tspan>
          }
        />
      </Box>
    </Center>
       <Divider/>
       
       <Text 
       mt={5}>
       Calendar
       <DatePicker
       
       selected={startDate} onChange={handleDateChange} />
       </Text>
       <Divider mt={5}/>

       <Text
       align={'flex'}
       mt={2}
       >
        Top Talks 
        <span 
        style={{marginLeft:"12rem",color:"steelblue"}}
        >
          View All
        </span>
       </Text>
       
       <Card
    bgColor={'ButtonShadow'}
    mt={3}
       >
      <CardBody>
        <Flex
        align={'flex'}
        >
            <AiOutlineHistory
            fontSize={'24px'}
            />
        <Text
        ml={8}
        mt={-1}
   
        >
          Black Ice Montreal <br/>
          3754 Talks
          <span
         
          >
         <HiDotsHorizontal
          style={{marginLeft:"15rem",marginTop:"-2.8rem",marginBottom:"2rem"}}
         />
          </span>
        </Text>
        </Flex>
      </CardBody>
    </Card>


    <Card
    bgColor={'ButtonShadow'}
    mt={3}
       >
      <CardBody>
        <Flex
        align={'flex'}
        >
            <AiOutlineHistory
            fontSize={'24px'}
            />
        <Text
        ml={8}
        mt={-1}
        >
          Quake Ohio <br/>
          1899 Talks
          <span
         
          >
         <HiDotsHorizontal
          style={{marginLeft:"15rem",marginTop:"-2.8rem",marginBottom:"2rem"}}
         />
          </span>
        </Text>
        </Flex>
      </CardBody>
    </Card>

      </Flex>
      </Card>
    </Flex>
  );
};
export default Stats;
