import React from 'react'
import PersonalHome from "../Components/ToolBox/PersonalHome"
import Recommendations from "../Components/ToolBox/Recommendations"
import {
    Stack,
    Card, 
    CardHeader, 
    CardBody,
    CardFooter,
    Text,
    Image,
    Heading,
    Button,
    Flex
}from '@chakra-ui/react'
import PageContentLayout from "../Components/Layout/PageContent";
import { BsBookmarks } from "react-icons/bs";
import Footer from "../Components/Footer"
import Stats from "../Components/ToolBox/Stats"
export default function TalkHome() {
  return (
    <>
    <PageContentLayout>
    <Flex
    display={'row'}
    >
    <Heading>ToolBox Talks</Heading>
    <Text color={'blue.600'}  mb={3}>Talks</Text>
    <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
   >
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://th.bing.com/th/id/R.e137d3ebd04f7a933b95ff8cf0b2b967?rik=iUXo2gKYiW2Cjg&pid=ImgRaw&r=0'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md' color={'blue.600'}>ToolBox Talk</Heading>
      <Text 
      display={'flex'}
      fontWeight={'bold'} 
      mt={2}>
        Accident on Highway 16 north bay <Flex style={{marginTop:"5px",marginLeft:"2rem",color:"blue"}}><BsBookmarks/></Flex>
    </Text>
      <Text py='2' color={'blackAlpha.600'}>
        Accident
      </Text>
      <Text py='2'>
        Canada Express Logistics Limited
      </Text>
      <Text py='2' display={'flex'} >
       Montreal
       <Flex style={{marginLeft:"6rem"}}>
        Fri 08 2022 - 10:00 am
       </Flex>
      </Text>
    </CardBody>
  </Stack>
</Card>

<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  mt={5}
   >
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://th.bing.com/th/id/OIP.79yzX-QBXvctvhg_WH1FRwHaEe?w=294&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md' color={'blue.600'}>ToolBox Talk</Heading>
      <Text 
      display={'flex'}
      fontWeight={'bold'} 
      mt={2}>
       San Francisco sunlight <Flex style={{marginTop:"5px",marginLeft:"2rem",color:"blue"}}><BsBookmarks/></Flex>
    </Text>
      <Text py='2' color={'blackAlpha.600'}>
      Scorching sun in sun fransisco
      </Text>
      <Text py='2'>
      Canada Express Logistics Limited
      </Text>
      <Text py='2' display={'flex'} >
      San Francisco Bay
       <Flex style={{marginLeft:"6rem"}}>
        Fri 08 2022 - 10:00 am
       </Flex>
      </Text>
    </CardBody>
  </Stack>
</Card>


<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  mt={5}
   >
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://th.bing.com/th/id/OIP.RrQAojKgT6eD37TsxT_wGAHaEK?w=321&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md' color={'blue.600'}>ToolBox Talk</Heading>
      <Text 
      display={'flex'}
      fontWeight={'bold'} 
      mt={2}>
        Quake Ohio <Flex style={{marginTop:"5px",marginLeft:"2rem",color:"blue"}}><BsBookmarks/></Flex>
    </Text>
      <Text py='2' color={'blackAlpha.600'}>
      Earth quakes and land slides in Ohio
      </Text>
      <Text py='2'>
      Ohio Valley Logistics Limited
      </Text>
      <Text py='2' display={'flex'} >
      Ohio
       <Flex style={{marginLeft:"6rem"}}>
        Fri 08 2022 - 10:00 am
       </Flex>
      </Text>
    </CardBody>
  </Stack>
</Card>

<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  mt={5}
   >
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://th.bing.com/th/id/R.e137d3ebd04f7a933b95ff8cf0b2b967?rik=iUXo2gKYiW2Cjg&pid=ImgRaw&r=0'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md' color={'blue.600'}>ToolBox Talk</Heading>
      <Text 
      display={'flex'}
      fontWeight={'bold'} 
      mt={2}>
        Accident on Highway 16 north bay <Flex style={{marginTop:"5px",marginLeft:"2rem",color:"blue"}}><BsBookmarks/></Flex>
    </Text>
      <Text py='2' color={'blackAlpha.600'}>
        Accident
      </Text>
      <Text py='2'>
        Canada Express Logistics Limited
      </Text>
      <Text py='2' display={'flex'} >
       Montreal
       <Flex style={{marginLeft:"6rem"}}>
        Fri 08 2022 - 10:00 am
       </Flex>
      </Text>
    </CardBody>
  </Stack>
</Card>

<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  mt={5}
   >
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://th.bing.com/th/id/OIP.79yzX-QBXvctvhg_WH1FRwHaEe?w=294&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md' color={'blue.600'}>ToolBox Talk</Heading>
      <Text 
      display={'flex'}
      fontWeight={'bold'} 
      mt={2}>
       San Francisco sunlight <Flex style={{marginTop:"5px",marginLeft:"2rem",color:"blue"}}><BsBookmarks/></Flex>
    </Text>
      <Text py='2' color={'blackAlpha.600'}>
      Scorching sun in sun fransisco
      </Text>
      <Text py='2'>
      Canada Express Logistics Limited
      </Text>
      <Text py='2' display={'flex'} >
      San Francisco Bay
       <Flex style={{marginLeft:"6rem"}}>
        Fri 08 2022 - 10:00 am
       </Flex>
      </Text>
    </CardBody>
  </Stack>
</Card>


<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  mt={5}
   >
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://th.bing.com/th/id/OIP.RrQAojKgT6eD37TsxT_wGAHaEK?w=321&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md' color={'blue.600'}>ToolBox Talk</Heading>
      <Text 
      display={'flex'}
      fontWeight={'bold'} 
      mt={2}>
        Quake Ohio <Flex style={{marginTop:"5px",marginLeft:"2rem",color:"blue"}}><BsBookmarks/></Flex>
    </Text>
      <Text py='2' color={'blackAlpha.600'}>
      Earth quakes and land slides in Ohio
      </Text>
      <Text py='2'>
      Ohio Valley Logistics Limited
      </Text>
      <Text py='2' display={'flex'} >
      Ohio
       <Flex style={{marginLeft:"6rem"}}>
        Fri 08 2022 - 10:00 am
       </Flex>
      </Text>
    </CardBody>
  </Stack>
</Card>


</Flex>


<Stack spacing={5} position="sticky" top="14px">
     <Recommendations/>
    <PersonalHome />
    <Stats/>
    </Stack>
   </PageContentLayout>

   <Footer />
    </>
  )
}
