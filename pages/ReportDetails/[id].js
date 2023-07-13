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
} from "@chakra-ui/react";

import BlogPost from "../../Components/BlogPost";
import { LoadingWidget } from "../Reports";

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
  const { id } = router.query;

  let db = getFirestore();
  const fetchDocument = async () => {
    try {
      const docRef = doc(db, "report", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists) {
        const data = docSnap.data();
        setDocumentData(data);
        console.log(data);
        setThumbnail(data.createdBy.photoURL);
        setLocation(data.location);
        setTitle(data.caption);
        setIsLoading(!isLoading);
      } else {
        console.log("Document not found");
      }
    } catch (error) {
      console.error("Error fetching document:", error);
    }
  };

  const fetchRelatedPosts = async (title) => {
    try {
      const q = query(collection(db, "report"), where("caption", ">=", title));
      let tempArray = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        tempArray.push(doc.data());

        console.log(doc.data());
      });

      setRelatedReports(tempArray);
    } catch (error) {
      console.error("Error fetching related posts:", error);
    }
  };

  useEffect(() => {
    fetchDocument();
    // console.log(relatedReports);
  }, []);

  useEffect(() => {
    fetchRelatedPosts(title);
    console.log(title);
  }, [title]);

  useEffect(() => {
    if (documentData) {
      setIsLoading(!isLoading);
    }
  }, [documentData]);

  return (
    <>
      <Alert status="info" my="30px">
        <AlertIcon />A road report provides real time information on road
        conditions and traffic for drivers to plan their journeys effectively
      </Alert>
      <Grid
        style={{
          marginLeft: "10%",
        }}
        templateColumns="3fr 1fr"
        gap={8}
      >
        <GridItem>
          <Box>
            {isLoading && <LoadingWidget />}
            {/* Blog content */}
            <HStack>
              <Link href="/Reports">
                <IoIosArrowBack size="30px" />{" "}
              </Link>
              <Heading as="h1" size="xl">
                {documentData ? documentData.caption : "title goes here ..."}
              </Heading>
            </HStack>

            <HStack my="20px">
              <Box w="50px" h="50px" bg="gray.200" borderRadius="md">
                {/* Display thumbnail here */}
                <Image src={thumbnail} alt={"Image description"} width={"lg"} />
              </Box>

              <Box color="gray.400">
                <Text>
                  Created by
                  {documentData
                    ? " " + documentData.createdBy.displayName + " "
                    : " "}
                  |
                </Text>
              </Box>

              <Box color="gray.400" borderRadius="md">
                <Text>
                  Published on{" "}
                  {documentData
                    ? documentData.date + " at " + documentData.timeNow
                    : " "}
                </Text>
              </Box>

              <Box color="gray.200" borderRadius="md">
                <Text>| 2 min read</Text>
              </Box>
            </HStack>
            <Box
              h="380px"
              bgImage={
                documentData
                  ? documentData.attachment
                  : "url('/images/bg-reports.png')"
              }
              py="10px"
              pb="60px"
              marginLeft="20px"
              bgSize="cover"
            ></Box>
            <Text my="30px">
              {documentData ? documentData.description : "Blog content..."}
            </Text>
            <hr />

            <Button bg="300.gray">Comment</Button>
          </Box>
        </GridItem>
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
        </GridItem>
      </Grid>
    </>
  );
};

export default ReportDetails;
