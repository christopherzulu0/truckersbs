/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import ReactPlayer from 'react-player/lazy'
import { ChatIcon } from '@chakra-ui/icons'
import {
  Flex,
  Icon,
  Image,
  Skeleton,
  Spinner,
  Stack,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import moment from "moment";
import { NextRouter } from "next/router";
import { AiOutlineDelete } from "react-icons/ai";
import { BsChat, BsDot } from "react-icons/bs";
import { FaReddit } from "react-icons/fa";
import {
  IoArrowDownCircleOutline,
  IoArrowDownCircleSharp,
  IoArrowRedoOutline,
  IoArrowUpCircleOutline,
  IoArrowUpCircleSharp,
  IoBookmarkOutline,
} from "react-icons/io5";
import { Post } from "../../../atoms/postsAtom";
import Link from "next/link";
import { RWebShare } from "react-web-share";

export type PostItemContentProps = {
  post: Post;
  onVote: (
    event: React.MouseEvent<SVGElement, MouseEvent>,
    post: Post,
    vote: number,
    communityId: string,
    postIdx?: number
  ) => void;
  onDeletePost: (post: Post) => Promise<boolean>;
  userIsCreator: boolean;
  onSelectPost?: (value: Post, postIdx: number) => void;
  router?: NextRouter;
  postIdx?: number;
  userVoteValue?: number;
  homePage?: boolean;
};

const PostItem: React.FC<PostItemContentProps> = ({
  post,
  postIdx,
  onVote,
  onSelectPost,
  router,
  onDeletePost,
  userVoteValue,
  userIsCreator,
  homePage,
}) => {
  const [loadingImage, setLoadingImage] = useState(true);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const singlePostView = !onSelectPost; // function not passed to [pid]
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  const handleDelete = async (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setLoadingDelete(true);
    try {
      const success = await onDeletePost(post);
      if (!success) throw new Error("Failed to delete post");

      console.log("Post successfully deleted");
      if (router) router.back();
    } catch (error: any) {
      console.log("Error deleting post", error.message);
      /**
       * Don't need to setLoading false if no error
       * as item will be removed from DOM
       */
      setLoadingDelete(false);
      // setError
    }
  };

  return (
    <><Flex
      border="1px solid"
      bg="white"
      borderColor={singlePostView ? "white" : "gray.300"}
      borderRadius={singlePostView ? "4px 4px 0px 0px" : 4}
      cursor={singlePostView ? "unset" : "pointer"}
      _hover={{ borderColor: singlePostView ? "none" : "gray.500" }}

    >
      <Flex
        direction="column"
        align="center"
        bg="gray.300"
        p={2}
        width="40px"
        borderRadius={singlePostView ? "0" : "3px 0px 0px 3px"}
      >
        <ChatIcon
          as={userVoteValue === 1 ? IoArrowUpCircleSharp : IoArrowUpCircleOutline}
          color={userVoteValue === 1 ? "brand.100" : "gray.400"}
          fontSize={22}
          cursor="pointer"
          onClick={(event) => onVote(event, post, 1, post.communityId, postIdx)} />
        <Text fontSize="9pt" fontWeight={600}>
          status
        </Text>
        <ChatIcon
          as={userVoteValue === -1
            ? IoArrowDownCircleSharp
            : IoArrowDownCircleOutline}
          color={userVoteValue === -1 ? "#4379FF" : "gray.400"}
          fontSize={22}
          cursor="pointer"
          onClick={(event) => onVote(event, post, -1, post.communityId, postIdx)} />
      </Flex>
      <Flex direction="column" width="100%">
        {/* <Image
borderRadius='full'
boxSize='150px'
src='https://bit.ly/dan-abramov'
alt='Dan Abramov'
/> */}
        <Stack spacing={1} p="10px 10px" bg="whiteAlpha.900"
        >

          <Stack direction="row" spacing={0.6} align="center" fontSize="9pt">

            <>

              <Image
                borderRadius="full"
                boxSize="18px"
                src=""
                mr={2} />

              <Icon as={FaReddit} fontSize={18} mr={1} color="blue.500" />

              <Link href="/">
                <Text
                  fontWeight={700}
                  _hover={{ textDecoration: "underline" }}

                >By Chris</Text>
              </Link>
              <Icon as={BsDot} color="gray.500" fontSize={8} />
            </>

            <Text color="gray.500">
              Posted by  Chris
              20:00
            </Text>
          </Stack>

          <Text fontSize="12pt" fontWeight={600}>
            Truckers

          </Text>
          <Text fontSize="10pt"
          >Heh</Text>
          <Flex justify="center" align="center" p={2}>

            {/* <Skeleton height="200px" width="100%" borderRadius={4} /> */}

            <Image

              maxHeight="460px"
              src="data:image/jpeg;base64,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"


              alt="Post Image" />
          </Flex>



        </Stack>


        <Flex ml={1} mb={0.5} color="gray.500" fontWeight={600} bg="whiteAlpha.900">
          <Flex
            align="center"
            p="8px 10px"
            borderRadius={4}
            _hover={{ bg: "gray.200" }}
            cursor="pointer"

          >
            <ChatIcon mr={2} />
            <Text fontSize="9pt">5</Text>
          </Flex>
          <Flex
            align="center"
            p="8px 10px"
            borderRadius={4}
            _hover={{ bg: "gray.200" }}
            cursor="pointer"
          >

            <Icon as={IoArrowRedoOutline} mr={2} />
            <RWebShare
              data={{
                text: "Join Our Community & Share",
                url: "https://peelingonion.vercel.app",
                title: "Sharing Platform",
              }}
              onClick={() => console.log("shared successfully!")}
            >
              <Text fontSize="9pt">Share</Text>
            </RWebShare>
          </Flex>
          {/* <Flex
      align="center"
      p="8px 10px"
      borderRadius={4}
      _hover={{ bg: "gray.200" }}
      cursor="pointer"
    >
      <Icon as={IoBookmarkOutline} mr={2} />
      <Text fontSize="9pt">Save</Text>
    </Flex> */}


          <Flex
            align="center"
            p="8px 10px"
            borderRadius={4}
            _hover={{ bg: "gray.200" }}
            cursor="pointer"

          >

            <>
              <Icon as={AiOutlineDelete} mr={2} />
              <Text fontSize="9pt">Delete</Text>
            </>

          </Flex>



          <Flex

          >

            <>

              <Button onClick={onOpen} className="bgcolor">
                <svg width={20} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </Button>

              <></>

            </>



            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
              {/* <ModalOverlay /> */}
              <ModalContent style={{ marginLeft: "-35px" }} width={448} height={300}>

                <ModalCloseButton className="modal-close-button" />
                <ModalBody id="player">
                  <ReactPlayer controls={true} style={{ marginLeft: "-28px", marginTop: "-8px" }} width={452} height={300} url="" />
                </ModalBody>
              </ModalContent>
            </Modal>
          </Flex>
        </Flex>


      </Flex>
    </Flex><Flex
      border="1px solid"
      bg="white"
      borderColor={singlePostView ? "white" : "gray.300"}
      borderRadius={singlePostView ? "4px 4px 0px 0px" : 4}
      cursor={singlePostView ? "unset" : "pointer"}
      _hover={{ borderColor: singlePostView ? "none" : "gray.500" }}

    >
        <Flex
          direction="column"
          align="center"
          bg="gray.300"
          p={2}
          width="40px"
          borderRadius={singlePostView ? "0" : "3px 0px 0px 3px"}
        >
          <ChatIcon
            as={userVoteValue === 1 ? IoArrowUpCircleSharp : IoArrowUpCircleOutline}
            color={userVoteValue === 1 ? "brand.100" : "gray.400"}
            fontSize={22}
            cursor="pointer"
            onClick={(event) => onVote(event, post, 1, post.communityId, postIdx)} />
          <Text fontSize="9pt" fontWeight={600}>
            status
          </Text>
          <ChatIcon
            as={userVoteValue === -1
              ? IoArrowDownCircleSharp
              : IoArrowDownCircleOutline}
            color={userVoteValue === -1 ? "#4379FF" : "gray.400"}
            fontSize={22}
            cursor="pointer"
            onClick={(event) => onVote(event, post, -1, post.communityId, postIdx)} />
        </Flex>
        <Flex direction="column" width="100%">
          {/* <Image
borderRadius='full'
boxSize='150px'
src='https://bit.ly/dan-abramov'
alt='Dan Abramov'
/> */}
          <Stack spacing={1} p="10px 10px" bg="whiteAlpha.900"
          >

            <Stack direction="row" spacing={0.6} align="center" fontSize="9pt">

              <>

                <Image
                  borderRadius="full"
                  boxSize="18px"
                  src=""
                  mr={2} />

                <Icon as={FaReddit} fontSize={18} mr={1} color="blue.500" />

                <Link href="/">
                  <Text
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}

                  >By Chris</Text>
                </Link>
                <Icon as={BsDot} color="gray.500" fontSize={8} />
              </>

              <Text color="gray.500">
                Posted by  Chris
                20:00
              </Text>
            </Stack>

            <Text fontSize="12pt" fontWeight={600}>
              Truckers

            </Text>
            <Text fontSize="10pt"
            >Heh</Text>
            <Flex justify="center" align="center" p={2}>

              {/* <Skeleton height="200px" width="100%" borderRadius={4} /> */}

              <Image

                maxHeight="460px"
                src="https://th.bing.com/th/id/OIP.1-w3OF7nAhZEOZlc1mKQZgF8Ck?w=350&h=151&c=7&r=0&o=5&dpr=1.3&pid=1.7"

                alt="Post Image" />
            </Flex>



          </Stack>


          <Flex ml={1} mb={0.5} color="gray.500" fontWeight={600} bg="whiteAlpha.900">
            <Flex
              align="center"
              p="8px 10px"
              borderRadius={4}
              _hover={{ bg: "gray.200" }}
              cursor="pointer"

            >
              <ChatIcon mr={2} />
              <Text fontSize="9pt">5</Text>
            </Flex>
            <Flex
              align="center"
              p="8px 10px"
              borderRadius={4}
              _hover={{ bg: "gray.200" }}
              cursor="pointer"
            >

              <Icon as={IoArrowRedoOutline} mr={2} />
              <RWebShare
                data={{
                  text: "Join Our Community & Share",
                  url: "https://peelingonion.vercel.app",
                  title: "Sharing Platform",
                }}
                onClick={() => console.log("shared successfully!")}
              >
                <Text fontSize="9pt">Share</Text>
              </RWebShare>
            </Flex>
            {/* <Flex
      align="center"
      p="8px 10px"
      borderRadius={4}
      _hover={{ bg: "gray.200" }}
      cursor="pointer"
    >
      <Icon as={IoBookmarkOutline} mr={2} />
      <Text fontSize="9pt">Save</Text>
    </Flex> */}


            <Flex
              align="center"
              p="8px 10px"
              borderRadius={4}
              _hover={{ bg: "gray.200" }}
              cursor="pointer"

            >

              <>
                <Icon as={AiOutlineDelete} mr={2} />
                <Text fontSize="9pt">Delete</Text>
              </>

            </Flex>



            <Flex

            >

              <>

                <Button onClick={onOpen} className="bgcolor">
                  <svg width={20} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </Button>

                <></>

              </>



              <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                {/* <ModalOverlay /> */}
                <ModalContent style={{ marginLeft: "-35px" }} width={448} height={300}>

                  <ModalCloseButton className="modal-close-button" />
                  <ModalBody id="player">
                    <ReactPlayer controls={true} style={{ marginLeft: "-28px", marginTop: "-8px" }} width={452} height={300} url="" />
                  </ModalBody>
                </ModalContent>
              </Modal>
            </Flex>
          </Flex>


        </Flex>
      </Flex>
      
      <Flex
      border="1px solid"
      bg="white"
      borderColor={singlePostView ? "white" : "gray.300"}
      borderRadius={singlePostView ? "4px 4px 0px 0px" : 4}
      cursor={singlePostView ? "unset" : "pointer"}
      _hover={{ borderColor: singlePostView ? "none" : "gray.500" }}
     
    >
      <Flex
        direction="column"
        align="center"
        bg="gray.300"
        p={2}
        width="40px"
        borderRadius={singlePostView ? "0" : "3px 0px 0px 3px"}
      >
        <ChatIcon
          as={
            userVoteValue === 1 ? IoArrowUpCircleSharp : IoArrowUpCircleOutline
          }
          color={userVoteValue === 1 ? "brand.100" : "gray.400"}
          fontSize={22}
          cursor="pointer"
          onClick={(event) => onVote(event, post, 1, post.communityId, postIdx)}
        />
        <Text fontSize="9pt" fontWeight={600}>
         status
        </Text>
        <ChatIcon
          as={
            userVoteValue === -1
              ? IoArrowDownCircleSharp
              : IoArrowDownCircleOutline
          }
          color={userVoteValue === -1 ? "#4379FF" : "gray.400"}
          fontSize={22}
          cursor="pointer"
          onClick={(event) =>
            onVote(event, post, -1, post.communityId, postIdx)
          }
        />
      </Flex>
      <Flex direction="column" width="100%">
      {/* <Image
  borderRadius='full'
  boxSize='150px'
  src='https://bit.ly/dan-abramov'
  alt='Dan Abramov'
/> */}
        <Stack spacing={1} p="10px 10px" bg="whiteAlpha.900"
        >
         
            <Stack direction="row" spacing={0.6} align="center" fontSize="9pt">
          
                <>
                
                    <Image
                      borderRadius="full"
                      boxSize="18px"
                      src=""
                      mr={2}
                    />
                
                    <Icon as={FaReddit} fontSize={18} mr={1} color="blue.500" />
            
                  <Link href="/">
                    <Text
                      fontWeight={700}
                      _hover={{ textDecoration: "underline" }}
                    
                    >By Chris</Text>
                  </Link>
                  <Icon as={BsDot} color="gray.500" fontSize={8} />
                </>
             
              <Text color="gray.500">
                Posted by  Chris
               20:00
              </Text>
            </Stack>
          
          <Text fontSize="12pt" fontWeight={600} >
            Truckers
         
          </Text>
          <Text fontSize="10pt"  
      >Heh</Text>
            <Flex justify="center" align="center" p={2} >
              
                {/* <Skeleton height="200px" width="100%" borderRadius={4} /> */}
            
              <Image
              
                maxHeight="460px"
              src="data:image/jpeg;base64,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"
                alt="Post Image"
              />
            </Flex>
        


        </Stack>

      
        <Flex ml={1} mb={0.5} color="gray.500" fontWeight={600} bg="whiteAlpha.900">
          <Flex
            align="center"
            p="8px 10px"
            borderRadius={4}
            _hover={{ bg: "gray.200" }}
            cursor="pointer"
            
          >
            <ChatIcon mr={2}/>
            <Text fontSize="9pt">5</Text>
          </Flex>
          <Flex
            align="center"
            p="8px 10px"
            borderRadius={4}
            _hover={{ bg: "gray.200" }}
            cursor="pointer"
          >
            
            <Icon as={IoArrowRedoOutline} mr={2} />
            <RWebShare
        data={{
          text: "Join Our Community & Share",
          url: "https://peelingonion.vercel.app",
          title: "Sharing Platform",
        }}
        onClick={() => console.log("shared successfully!")}
      >
            <Text fontSize="9pt">Share</Text>
            </RWebShare>
          </Flex>
          {/* <Flex
            align="center"
            p="8px 10px"
            borderRadius={4}
            _hover={{ bg: "gray.200" }}
            cursor="pointer"
          >
            <Icon as={IoBookmarkOutline} mr={2} />
            <Text fontSize="9pt">Save</Text>
          </Flex> */}
          
       
            <Flex
              align="center"
              p="8px 10px"
              borderRadius={4}
              _hover={{ bg: "gray.200" }}
              cursor="pointer"
             
            >
             
                <>
                  <Icon as={AiOutlineDelete} mr={2} />
                  <Text fontSize="9pt">Delete</Text>
                </>
            
            </Flex>
          


           <Flex
          
          >
            
            <>
         
            <Button onClick={onOpen}  className="bgcolor">
            <svg width={20} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
</svg>
            </Button>
            
                <></>
                
</>

            

<Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} >
  {/* <ModalOverlay /> */}
  <ModalContent style={{marginLeft:"-35px"}} width={448} height={300} >
   
    <ModalCloseButton className="modal-close-button"/>
    <ModalBody id="player" >
    <ReactPlayer controls={true} style={{marginLeft:"-28px",marginTop:"-8px"}} width={452} height={300}  url="" />
    </ModalBody>
  </ModalContent>
</Modal>
          </Flex>
        </Flex>
       

      </Flex>
    </Flex>

    <Flex
      border="1px solid"
      bg="white"
      borderColor={singlePostView ? "white" : "gray.300"}
      borderRadius={singlePostView ? "4px 4px 0px 0px" : 4}
      cursor={singlePostView ? "unset" : "pointer"}
      _hover={{ borderColor: singlePostView ? "none" : "gray.500" }}
     
    >
      <Flex
        direction="column"
        align="center"
        bg="gray.300"
        p={2}
        width="40px"
        borderRadius={singlePostView ? "0" : "3px 0px 0px 3px"}
      >
        <ChatIcon
          as={
            userVoteValue === 1 ? IoArrowUpCircleSharp : IoArrowUpCircleOutline
          }
          color={userVoteValue === 1 ? "brand.100" : "gray.400"}
          fontSize={22}
          cursor="pointer"
          onClick={(event) => onVote(event, post, 1, post.communityId, postIdx)}
        />
        <Text fontSize="9pt" fontWeight={600}>
         status
        </Text>
        <ChatIcon
          as={
            userVoteValue === -1
              ? IoArrowDownCircleSharp
              : IoArrowDownCircleOutline
          }
          color={userVoteValue === -1 ? "#4379FF" : "gray.400"}
          fontSize={22}
          cursor="pointer"
          onClick={(event) =>
            onVote(event, post, -1, post.communityId, postIdx)
          }
        />
      </Flex>
      <Flex direction="column" width="100%">
      {/* <Image
  borderRadius='full'
  boxSize='150px'
  src='https://bit.ly/dan-abramov'
  alt='Dan Abramov'
/> */}
        <Stack spacing={1} p="10px 10px" bg="whiteAlpha.900"
        >
         
            <Stack direction="row" spacing={0.6} align="center" fontSize="9pt">
          
                <>
                
                    <Image
                      borderRadius="full"
                      boxSize="18px"
                      src=""
                      mr={2}
                    />
                
                    <Icon as={FaReddit} fontSize={18} mr={1} color="blue.500" />
            
                  <Link href="/">
                    <Text
                      fontWeight={700}
                      _hover={{ textDecoration: "underline" }}
                    
                    >By Chris</Text>
                  </Link>
                  <Icon as={BsDot} color="gray.500" fontSize={8} />
                </>
             
              <Text color="gray.500">
                Posted by  Chris
               20:00
              </Text>
            </Stack>
          
          <Text fontSize="12pt" fontWeight={600} >
            Truckers
         
          </Text>
          <Text fontSize="10pt"  
      >Heh</Text>
            <Flex justify="center" align="center" p={2} >
              
                {/* <Skeleton height="200px" width="100%" borderRadius={4} /> */}
            
              <Image
              
                maxHeight="460px"
              src="https://th.bing.com/th/id/R.c97452837dae6c06b4961effcd62a53f?rik=3cTIFTd97nhv1A&pid=ImgRaw&r=0"
           
               
                alt="Post Image"
              />
            </Flex>
        


        </Stack>

      
        <Flex ml={1} mb={0.5} color="gray.500" fontWeight={600} bg="whiteAlpha.900">
          <Flex
            align="center"
            p="8px 10px"
            borderRadius={4}
            _hover={{ bg: "gray.200" }}
            cursor="pointer"
            
          >
            <ChatIcon mr={2}/>
            <Text fontSize="9pt">5</Text>
          </Flex>
          <Flex
            align="center"
            p="8px 10px"
            borderRadius={4}
            _hover={{ bg: "gray.200" }}
            cursor="pointer"
          >
            
            <Icon as={IoArrowRedoOutline} mr={2} />
            <RWebShare
        data={{
          text: "Join Our Community & Share",
          url: "https://peelingonion.vercel.app",
          title: "Sharing Platform",
        }}
        onClick={() => console.log("shared successfully!")}
      >
            <Text fontSize="9pt">Share</Text>
            </RWebShare>
          </Flex>
          {/* <Flex
            align="center"
            p="8px 10px"
            borderRadius={4}
            _hover={{ bg: "gray.200" }}
            cursor="pointer"
          >
            <Icon as={IoBookmarkOutline} mr={2} />
            <Text fontSize="9pt">Save</Text>
          </Flex> */}
          
       
            <Flex
              align="center"
              p="8px 10px"
              borderRadius={4}
              _hover={{ bg: "gray.200" }}
              cursor="pointer"
             
            >
             
                <>
                  <Icon as={AiOutlineDelete} mr={2} />
                  <Text fontSize="9pt">Delete</Text>
                </>
            
            </Flex>
          


           <Flex
          
          >
            
            <>
         
            <Button onClick={onOpen}  className="bgcolor">
            <svg width={20} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
</svg>
            </Button>
            
                <></>
                
</>

            

<Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} >
  {/* <ModalOverlay /> */}
  <ModalContent style={{marginLeft:"-35px"}} width={448} height={300} >
   
    <ModalCloseButton className="modal-close-button"/>
    <ModalBody id="player" >
    <ReactPlayer controls={true} style={{marginLeft:"-28px",marginTop:"-8px"}} width={452} height={300}  url="" />
    </ModalBody>
  </ModalContent>
</Modal>
          </Flex>
        </Flex>
       

      </Flex>
    </Flex>
      </>
  );
};

export default PostItem;
