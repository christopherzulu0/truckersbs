import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import {
  doc,
  getDoc,
  getFirestore,
  query,
  collection,
  limit,
  getDocs,
  where,
} from "firebase/firestore";

import Link from "next/link";

import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Alert,
  AlertIcon,
  Button,
  HStack,
  Image,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

//for comment section
import { ref, set, get, child, getDatabase } from "firebase/database";
// end of comment section

import Comments from "../../Components/Comments.jsx";
import BlogPost from "../../Components/BlogPost";
import { LoadingWidget } from "../Reports";
import { rtdb } from "../../firebase/clientApp.ts";
import CommentsSection from "../../Components/DisplayComments";
import { getComments } from "../../Components/DisplayComments.jsx";

// component starts here
const ReportDetails = () => {
  const [documentData, setDocumentData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [relatedReports, setRelatedReports] = useState([]);
  const [description, setDescription] = useState("");


  const router = useRouter();
  const { id, target } = router.query;
  let db = getFirestore();

  const fetchDocument = async () => {
    setIsLoading(!isLoading);
    const docRef = doc(db, target, id);

    try {
      const docSnap = await getDoc(docRef);

      if (docSnap.exists) {
        const data = docSnap.data();
        setDocumentData(data);
        console.log(data);
        setThumbnail(data.createdBy.photoURL);
        setLocation(data.location);
        setTitle(data.caption);
        setIsLoading((current) => {
          if (current) {
            return true;
          }
          return true;
        });
      } else {
        console.log("Document not found");
      }
    } catch (error) {
      console.error("Error fetching document:", error);
    }
  };

  const fetchRelatedPosts = async (title) => {
    try {
      const q = query(
        collection(db, "report"),
        where("caption", ">=", title),
        limit(3)
      );
      let tempArray = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        if (doc.id !== id) {
          tempArray.push(doc.data());
        }
      });

      setRelatedReports(tempArray);
    } catch (error) {
      console.error("Error fetching related posts:", error);
    }
  };

  useEffect(() => {});

  useEffect(() => {
    fetchDocument(id);
  }, []);

  useEffect(() => {
    fetchRelatedPosts(title);
  }, [title]);

  useEffect(() => {
    if (documentData) {
      setIsLoading((current) => {
        if (current) {
          return false;
        }
        return false;
      });
    }
    setIsLoading((current) => {
      if (current) {
        return true;
      }
      return true;
    });
  }, [documentData]);

  // comments section
  const [comments, setComments] = useState(getComments(rtdb, id));

  return (
    <>
      <Alert status="info" my="30px">
        <AlertIcon />A road report provides real time information on road
        conditions and traffic for drivers to plan their journeys effectively
      </Alert>
      <Grid
        style={{
          marginLeft: "10%",
          marginRight: "10%",
        }}
        templateColumns={{ base: "1fr", md: "3fr 1fr" }}
        gap={8}
      >
        {documentData ? (
          <GridItem>
            <Box>
              {/* Blog content */}
              <HStack>
                <Link href="/Reports">
                  <IoIosArrowBack size="30px" />{" "}
                </Link>
                <Heading as="h1" size="xl">
                  {documentData.caption}
                </Heading>
              </HStack>

              <HStack fontSize="12px" my="20px">
                <Box w="40px" h="40px" bg="gray.200" borderRadius="md">
                  <Image
                    src={thumbnail}
                    alt={"Image description"}
                    width={"lg"}
                  />
                </Box>

                <Box color="gray.400">
                  <Text>
                    {"  Created by " + documentData.createdBy.displayName}|
                  </Text>
                </Box>

                <Box color="gray.400" borderRadius="md">
                  <Text>
                    Published on{" "}
                    {documentData.date + " at " + documentData.timeNow}
                  </Text>
                </Box>

                <Box color="gray.200" borderRadius="md">
                  <Text>| 2 min read</Text>
                </Box>
              </HStack>
              <Box
                h="380px"
                bgImage={documentData.attachment}
                py="10px"
                pb="60px"
                marginLeft="20px"
                bgSize="cover"
              ></Box>
              <Text my="30px">{documentData.description}</Text>

              <hr />

              <Heading bg="300.gray">Comments</Heading>
              <hr />

              <Box>
                <CommentsSection comments={comments} reportId={id} />
              </Box>

              <Box>
                <hr />
                <Comments setComments={setComments} reportId={id} />
              </Box>
            </Box>
          </GridItem>
        ) : (
          <LoadingWidget />
        )}
        <GridItem>
          <Box>
            {/* Related posts */}
            <Heading as="h3" size="lg" mb={4}>
              Related Posts
            </Heading>
            {relatedReports.map((report) => (
              <BlogPost
                key={report.id}
                title={report.caption}
                thumbnail={report.attachment}
              />
            ))}
          </Box>

          <Box
            p="4"
            maxW="md"
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="lg"
            color="white"
            bg="#FBA13D"
            mr="30px"
          >
            <Heading as="h2" size="md" mb="4">
              Subscribe to Live Feed
            </Heading>

            <FormControl mb={4}>
              <FormLabel>
                {" "}
                <Text mb="4">
                  Stay up-to-date with the latest news and updates.
                </Text>{" "}
              </FormLabel>
              <Input bg="white" type="email" placeholder="email@email.com" />
            </FormControl>

            <Button
              colorScheme="gray"
              color="gray"
              size="sm"
              onClick="subscribe"
            >
              Subscribe Now
            </Button>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};

export default ReportDetails;
