import { Button, Card, CardBody, CardFooter, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

interface FullName {
  artical: string;
  description: string;
}

const CardInfo = (props: FullName) => {
  return (
    <div>
      <GridItem w="300px" h="10">
        {/* <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="md"
        /> */}
        <Heading size="md">{props.artical} </Heading>
          <Text textAlign="center">{props.description}</Text>
        {/* <CardBody mt="6">
          
        </CardBody> */}
        {/* <CardFooter>
                    <Button variant="ghost" colorScheme="blue">
                      view
                      <ArrowForwardIcon />
                    </Button>
                  </CardFooter> */}
      </GridItem>
    </div>
  )
}

export default CardInfo