import React, { ReactElement, useEffect, useState } from "react";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Container,
  CardBody,
  CardFooter,
  Button,
  Flex,
  Card,
  Image,
} from "@chakra-ui/react";
import { FaArrowCircleRight } from "react-icons/fa";
import { useAuthState } from "react-firebase-hooks/auth";
import Footer from "../../Components/Footer";
import CreateArticleForm from "@/Components/Article/ArticleForm/ArticleForm";
import Link from "next/link";
import PostLoader from "@/Components/Post/Loader";
import { auth } from "@/firebase/clientApp";
import { Article } from '../archives/index';

interface CardProps {
  heading: string;
  description: string;
  image: ReactElement;
  href: string;
}

const Cards = ({ heading, description, image, href }: CardProps) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"center"} spacing={2}>
        <Flex
          align={"center"}
          justify={"center"}
          // objectFit="contain"
          width={"100%"}
          height={"250px"}
          minHeight={"250px"}
          maxHeight={"250px"}
        >
          {image}
        </Flex>
        <Box
          width={"inherit"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexFlow={"column"}
        >
          <Heading
            size="md"
            overflow="hidden"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
            width="200px"
            style={{ marginTop: "20px" }}
            textAlign={"center"}
          >
            {heading}
          </Heading>
          <Text
            fontSize={"sm"}
            textAlign={"center"}
            overflow="hidden"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
            width="200px"
          >
            {description}
          </Text>
          <br />
        </Box>
        <Link href={href}>
          <Button
            variant={"link"}
            colorScheme={"blue"}
            size={"sm"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            width={"inherit"}
          >
            View More
            <FaArrowCircleRight style={{ marginLeft: "5px" }} />
          </Button>
        </Link>
      </Stack>
    </Box>
  );
};

export default function Articles() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [user] = useAuthState(auth);

  useEffect(() => {
    setLoading(true);

    fetch("/api/articles")
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Container>
        <PostLoader />
      </Container>
    );
  }

// Filter articles by featured equal to true
const featured = articles.find((article) => article.featured);

// Sort articles by the createdAt timestamp in descending order (most recent first)
function sortArticlesByRecent(articles: Article[]) {
  return [...articles].sort((a, b) => {
    const timestampA = a.createdAt;
    const timestampB = b.createdAt;

    if (timestampA?.seconds === timestampB?.seconds) {
      // If the seconds are equal, compare the nanoseconds
      return timestampB?.nanoseconds - timestampA?.nanoseconds;
    } else {
      // Compare the seconds
      return timestampB?.seconds - timestampA?.seconds;
    }
  });
}

const recentArticles = sortArticlesByRecent(articles);





// Sort remaining articles by reads in descending order
const sortedArticles = articles.filter((article) => !article.featured).sort((a, b) => b.reads - a.reads);

// Get the most recent article from the sorted list
const featuredArticle = featured || sortedArticles[0];


   

  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Container
        maxW={"5xl"}
        mt={12}
        display={"flex"}
        justifyContent={"flex-start"}
        flexDirection={"column"}
      >
        <Text
          fontSize={"sm"}
          fontWeight={"bold"}
          color={'blue.500'}
          textDecoration={'underline'}
          cursor={'pointer'}
          onClick={() => setIsOpen(true)}
          ml={20}
        >
          create Article
        </Text>
        <CreateArticleForm isOpen={isOpen} onClose={onClose} articleUserId={user?.uid} />
        <Heading
          textAlign={{ base: "center", sm: "center", md: "left", lg: "left" }}
          mb={{ base: 4, md: 6 }}
          ml={{ base: "0", sm: "0", md: "16", lg: "16" }}
        >
          Featured
        </Heading>
        {featuredArticle && (
          <Center>
            <Card
              overflow="hidden"
              variant="outline"
              marginLeft={{ base: "0", sm: "0", md: "0", lg: "-20" }}
              flexDirection={{
                base: "column",
                sm: "column",
                md: "row",
                lg: "row",
              }}
              justifyContent={{ base: "center", sm: "space-between" }}
              alignItems={{ base: "center", sm: "stretch" }}
              width={{ base: "100%", sm: "90%", md: "80%", lg: "80%" }}
            >
              <Image
                objectFit="cover"
                height={{ base: "200px", sm: "170px", md: "350px", lg: "350px" }}
                width={{ base: "100%", sm: "100%", md: "350px", lg: "350px" }}
                src={featuredArticle.imageURL}
                alt={featuredArticle.title}
              />

              <Stack
                flexGrow={{ base: 0, sm: 1 }}
                justifyContent="space-between"
                p={{ base: "4", sm: "6", md: "8" }}
              >
                <CardBody>
                  <Heading
                    size={{ base: "md", sm: "lg", md: "xl", lg: "xl" }}
                    // textAlign={{ base: 'center', sm: 'center' }}

                  >
                    {featuredArticle.title}
                  </Heading>

                  <Text 
                  py={{ base: "2", sm: "4" }}
                  overflow="hidden"
                  textOverflow="ellipsis"
                  whiteSpace="nowrap"
                  width="300px"
                  >
                    {featuredArticle.description}
                  </Text>
                </CardBody>

                <CardFooter display={"flex"} justifyContent={{ base: "center" }}>
                <Link href={`/articles/${featuredArticle.id}`}>
                  <Button variant="solid" colorScheme="blue">
                    View More
                    <FaArrowCircleRight
                      style={{ marginLeft: "5px", margin: "auto" }}
                    />
                  </Button>
                  </Link>
                </CardFooter>
              </Stack>
            </Card>
          </Center>
        )}
        {!featuredArticle && articles.length > 0 && (
          <Text>No featured article available</Text>
        )}
      </Container>
      <br />

      <Container maxW={"5xl"} mt={12}>
        <Heading
          ml={{ base: "0", sm: "0", md: "20", lg: "20" }}
          mb={5}
          textAlign={{ base: "center", sm: "center", md: "left", lg: "left" }}
        >
          Latest Articles
        </Heading>

        <Flex
          flexWrap="wrap"
          gridGap={6}
          justifyContent={"flex-start"}
          alignItems={"center"}
          mb={"2"}
        >
          {recentArticles.length > 0 ? (
            recentArticles?.map((article: any) => (
              <Cards
                key={article.id}
                heading={article.title}
                image={
                  <Image
                    src={article.imageURL}
                    alt={article.title}
                    width={"100%"}
                    minHeight={250}
                    maxHeight={250}
                    objectFit={"cover"}
                  />
                }
                description={article.description}
                href={`/articles/${article.id}`}
              />
            ))
          ) : (
            <Box
              display={"flex"}
              justifyContent={"flex-start"}
              alignItems={"center"}
              py={10}
              pl={20}
              width={"100%"}
            >
              <Text
                color={"red.600"}
                fontSize={20}
                fontWeight={600}
                textAlign={"center"}
              >
                No articles yet
              </Text>
            </Box>
          )}
        </Flex>
      </Container>
      <Footer />
    </>
  );
}
