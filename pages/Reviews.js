import Link from 'next/link';
import React from 'react'
import { Button, Center, Container, Flex, Image, Select, Box, Text } from '@chakra-ui/react';

import styles from '../styles/Reviews.module.css'
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@chakra-ui/icons';

function Reviews() {
  return (
    <Container maxWidth={1000} className={styles.mainDivR}>
       
       {/*Brand Box */}
        <Text marginBottom={2} fontSize={20} fontWeight={700}>Select Brand</Text>
         <Flex miniWidth={'max-content'} gap={2}>
            <Select  placeholder='-Select Brand-'>
                <option>Mercedes Benz Truck</option>
                <option>Mercedes Benz Truck</option>
                <option>Mercedes Benz Truck</option>
                <option>Mercedes Benz Truck</option>
            </Select>
            <Button bg={'blue.600'} color={'#fff'} >Drivers</Button> 
         </Flex>
        <Center marginTop={10}>
            <Box 
                width={1000}
                bg={'linear-gradient(180deg, #6385FF -3.21%, #F2A8A8 71.13%)'}
                >
                <Flex>
                    <ChevronLeftIcon  width={20} height={20} className={styles.leftIcon}/>                   
                    <Image
                        margin={10}
                        borderRadius={100} 
                        width={800} 
                        height={400} 
                        src={'/images/truck5.jpg'} />
                    <ChevronRightIcon
                      width={20} 
                      height={20}
                      className={styles.RightIcon}/>
                </Flex>
            </Box>
        </Center>
        <Center marginTop={-15} marginBottom={20}>
            <Button 
                bg={'blue.600'} 
                color={'white'} 
                width={100} 
                fontFamily={'Playfair Display'}
                fontSize={20}>Rate</Button>
        </Center>

        {/* Simila Trucks */}

        <Text fontWeight={700} fontSize={20}>Similar Trucks</Text>
        <Flex gap={20} paddingTop={4}>
            <Box>
                <Image borderRadius={9} width={270} height={200} src='/images/truck1.jpg' />
                <Center>    
                    <Button  fontFamily={'Playfair Display'} bg={'blue.800'} marginTop={-20} color={'white'}>Mercedes-Benz Aroes</Button>
                </Center>
            </Box>
            <Box>
                <Image borderRadius={9} width={270} height={200} src='/images/truck2.jpg' />
                <Center>    
                    <Button  fontFamily={'Playfair Display'} bg={'blue.800'} marginTop={-20} color={'white'}>Mercedes-Benz Aroes</Button>
                </Center>
            </Box>
            <Box>
                <Image borderRadius={9} width={270} height={200}  src='/images/truck5.jpg' />
                <Center>    
                    <Button  fontFamily={'Playfair Display'} bg={'blue.800'} marginTop={-20} color={'white'}>Mercedes-Benz Aroes</Button>
                </Center>
            </Box>
        </Flex>

        {/*Pinned Reviews */}
  
        <Text marginTop={20} fontSize={20} fontWeight={700}>Pinned Reviews</Text>
        <Center>
            <Flex gap={20} marginTop={20}>
                <Box 
                    width={250}
                    bg={'#E6F3FF'} 
                    padding={5} borderRadius={8}  
                    border={ '1px solid #EFEFF0'}
                    boxShadow={" 0px 2px 4px rgba(0, 0, 0, 0.15)"}>
                    <Flex>
                        <Image width={110} height={110} borderRadius={55} marginTop={-20} src='/images/john Doe.jpg' className={styles.img3} />
                        <StarIcon  color={'yellow.400'}/>
                        <StarIcon color={'yellow.400'} />
                        <StarIcon color={'yellow.400'}/>
                        <StarIcon color={'yellow.400'}/>
                        <StarIcon color={'yellow.400'}/>
                    </Flex>
                    <Center>
                        <Text fontWeight={700}  fontFamily={'Playfair Display'} marginTop={2}>Mrs. Hart</Text>
                    </Center>
                    <Center padding={3}>
                        <Text textAlign={'center'} fontWeight={500}>My Husband loves this truck</Text>
                    </Center>
                    <Center marginTop={20}>
                        <Text fontWeight={600}>On <Link  href={''}>Mercedes-Benz Zetros</Link></Text>
                    </Center>
                </Box>
                <Box 
                    width={250}
                    bg={'#E6F3FF'} 
                    padding={5} borderRadius={8}  
                    border={ '1px solid #EFEFF0'}
                    boxShadow={" 0px 2px 4px rgba(0, 0, 0, 0.15)"}>
                    <Flex>
                        <Image width={110} height={110} borderRadius={55} marginTop={-20} src='/images/john Doe.jpg' className={styles.img3} />
                        <StarIcon  color={'yellow.400'}/>
                        <StarIcon color={'yellow.400'} />
                        <StarIcon color={'yellow.400'}/>
                        <StarIcon color={'yellow.400'}/>
                        <StarIcon color={'yellow.400'}/>
                    </Flex>
                    <Center>
                        <Text fontWeight={700}  fontFamily={'Playfair Display'} marginTop={2}>Mrs. Hart</Text>
                    </Center>
                    <Center padding={3}>
                        <Text textAlign={'center'} fontWeight={500}>My Husband loves this truck</Text>
                    </Center>
                    <Center marginTop={20}>
                        <Text fontWeight={600}>On <Link color={''}  href={''}>Mercedes-Benz Zetros</Link></Text>
                    </Center>
                </Box>
                <Box 
                    width={250}
                    bg={'#E6F3FF'} 
                    padding={5} borderRadius={8}  
                    border={ '1px solid #EFEFF0'}
                    boxShadow={" 0px 2px 4px rgba(0, 0, 0, 0.15)"}>
                    <Flex>
                        <Image width={110} height={110} borderRadius={55} marginTop={-20} src='/images/john Doe.jpg' className={styles.img3} />
                        <StarIcon  color={'yellow.400'}/>
                        <StarIcon color={'yellow.400'} />
                        <StarIcon color={'yellow.400'}/>
                        <StarIcon color={'yellow.400'}/>
                        <StarIcon color={'yellow.400'}/>
                    </Flex>
                    <Center>
                        <Text fontWeight={700}  fontFamily={'Playfair Display'} marginTop={2}>Mrs. Hart</Text>
                    </Center>
                    <Center padding={3}>
                        <Text textAlign={'center'} fontWeight={500}>My Husband loves this truck</Text>
                    </Center>
                    <Center marginTop={20}>
                        <Text fontWeight={600}>On <Link color={''}  href={''}>Mercedes-Benz Zetros</Link></Text>
                    </Center>
                </Box>
            </Flex>
        </Center>
    </Container>
  )
}

export default Reviews;