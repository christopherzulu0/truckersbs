import ArticleFilter from "@/Components/Article/ArticleForm/ArticleFilter";
import Footer from "@/Components/Footer";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  useBreakpointValue,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { useSwipeable } from "react-swipeable";
import { GoClock } from "react-icons/go";
import ReusableModal from "@/Components/Article/ArticleForm/ModalReusable";
import PostLoader from "@/Components/Post/Loader";
import Articles from "../articles/index";
import { firestore } from "@/firebase/clientApp";
import { getDocs, collection } from "firebase/firestore";

const PaginationBox = ({ articles, activeNumber, setActiveNumber }: any) => {
  const handleNext = () => {
    setActiveNumber((prevNumber: number) => prevNumber + 1);
  };

  const handleNumberClick = (number: any) => {
    setActiveNumber(number);
  };

  const calculatePages = (category: string) => {
    const articlesCount = articles.filter(
      (article: Article) => article.category === category
    ).length;
    return Math.ceil(articlesCount / 2); // Assuming 2 articles per page
  };

  const renderNumbers = (category: string) => {
    const pages = calculatePages(category);
    const numbers = Array.from({ length: pages }, (_, i) => i + 1);

    return numbers.map((number: number, index: number) => (
      <Box display="inline-block" padding="8px" key={index}>
        <Button
          bg={activeNumber === number ? "blue.500" : "transparent"}
          color={activeNumber === number ? "white" : "black"}
          onClick={() => handleNumberClick(number)}
        >
          {number}
        </Button>
      </Box>
    ));
  };

  return (
    <Box mt={10}>
      {activeNumber > 1 && (
        <Box display="inline-block" padding="8px">
          <Button onClick={() => handleNumberClick(activeNumber - 1)}>
            Previous
          </Button>
        </Box>
      )}
      {renderNumbers("Weather")}{" "}
      {/* Replace "Weather" with your default category */}
      <Button onClick={handleNext}>Next</Button>
    </Box>
  );
};

export interface Article {
  featured: unknown;
  id: string;
  title: string;
  imageURL: string;
  description: string;
  category: string;
  reads: number;
  tags: [];
  createdAt?: string;
}

const CardSwiper = ({ articles, activeNumber }: any) => {
  const [currentIndex, setCurrentIndex] = useState((activeNumber - 1) * 2);
  const cards = articles;
  const [isSmallScreen] = useMediaQuery("(max-width: 768px)");

  console.log('isSmallScreen :', isSmallScreen);


  useEffect(() => {
    setCurrentIndex((activeNumber - 1) * 2);
  }, [activeNumber]);

  const handleSwipe = (direction: string) => {
    if (direction === "left" && currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (direction === "right" && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("left"),
    onSwipedRight: () => handleSwipe("right"),
  });


  type Articles = Article[];

   let visibleCards: Articles = [];

   if(isSmallScreen) {
    visibleCards = cards.slice(currentIndex, currentIndex + 1);
   } else {
   visibleCards = cards.slice(currentIndex, currentIndex + 2);
   }

  return (
    <>
      <Box
        display="flex"
        mt={10}
        width="full"
        justifyContent="start"
        alignItems="center"
        {...swipeHandlers}
      >
        {/* Previous button */}
        <Button
          display={'flex'}
          justifyContent={'center'}
          alignContent={'center'}
          disabled={currentIndex === 0}
          onClick={() => handleSwipe("right")}
          variant="unstyled"
          color="blue.500"
          colorScheme="blue"
          bg={'gray.200'}
          borderRadius={'full'}
          shadow={'md'}
          mr={-30}
        >
          <BiLeftArrowAlt size={24} />
        </Button>
        <Box
          display="flex"
          flexDirection={["column", "column", "row", "row"]}
          width="full"
        >
          {visibleCards.map((card: Article) => (
            <Box
              key={card.id}
              width={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
              height="412px"
              bg="white"
              border="1px solid #E2E8F0"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              m={2}
              borderRadius="md"
            >
              <Image
                src={card.imageURL}
                alt={card.title}
                maxWidth={"full"}
                minWidth={"full"}
                height="250"
                objectFit={"contain"}
                pt={"2"}
              />
              <Box
                p={2}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                flexDirection={"column"}
              >
                <Heading
                  as="h2"
                  size="md"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  whiteSpace="nowrap"
                  width="200px"
                  style={{ marginTop: "20px" }}
                  textAlign={"center"}
                >
                  {card.title}
                </Heading>
                <Text
                  fontSize={"sm"}
                  textAlign={"center"}
                  overflow="hidden"
                  textOverflow="ellipsis"
                  whiteSpace="nowrap"
                  width="200px"
                >
                  {card.description}
                </Text>
                <Flex alignItems="center" mt={4} textDecoration={'none'}>
                  <Link href={`/archives/${card?.id}`} textDecoration={'none'}>
                  <Button
                    rightIcon={<BiRightArrowAlt size={24} />}
                    color={"blue.500"}
                    variant={"unstyled"}
                    fontWeight={"normal"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    textDecoration={'none'}
                  >
                    View
                  </Button>
                  </Link>
                </Flex>
              </Box>
            </Box>
          ))}
        </Box>
        {/* Next button */}
        <Button
          display={'flex'}
          justifyContent={'center'}
          alignContent={'center'}
          disabled={currentIndex === cards.length - 2}
          onClick={() => handleSwipe("left")}
          variant="unstyled"
          colorScheme="blue"
          color="blue.500"
          bg={'gray.200'}
          borderRadius={'full'}
          shadow={'md'}
          ml={-30}
        >
          <BiRightArrowAlt size={24} />
        </Button>
      </Box>
    </>
  );
};


const Archives = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeNumber, setActiveNumber] = useState(1);

  const getArchives = async() => {
    const articlesSnapshot = await getDocs(collection(firestore, "articles"));
    const articlesData = articlesSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

   setArticles(articlesData as unknown as Article[])
  }

  useEffect(() => {
   getArchives()
  },[])
  

  

  const openModal = () => {
    setIsOpen(true);
  };

  // if (loading) {
  //   return (
  //     <Container>
  //       <PostLoader />
  //     </Container>
  //   );
  // }

  return (
    <>
      <Container
        maxW={"6xl"}
        mt={8}
        display={"flex"}
        flexDirection={"column"}
        gap={"4"}
        justifyContent={"center"}
      >
        <Box width={"full"}>
          <Text fontSize={"2xl"} fontWeight={"normal"}>
            Archive
          </Text>
          <Divider my={4} borderWidth={1} />
          <Box
            display={{ sm: "flex", md: "none", lg: "none" }}
            ml={2}
            justifyContent={"end"}
            alignItems={"center"}
            color={"blue.500"}
          >
            <GoClock size={25} onClick={openModal} />
          </Box>
        </Box>

        <Box
          width={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
          mt={4}
          display={"flex"}
          justifyContent={"between"}
          gap={"2"}
        >
          <Box
            width={{ base: "100%", sm: "100%", md: "100%", lg: "70%" }}
            mt={12}
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
          >
            {articles
              .filter((article) => article.category === "technology")
              .map((article) => ({ ...article, id: article.id })).length >
              0 && (
              <Container
                width={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
                maxWidth={"full"}
                mt={12}
                display={"flex"}
                justifyContent={"center"}
                flexDirection={"column"}
              >
                <Button
                  variant="solid"
                  colorScheme="blue"
                  width={"100px"}
                  ml={"12"}
                >
                  Technology
                </Button>
                <CardSwiper
                  articles={articles
                    .filter((article) => article.category === "technology")
                    .map((article) => ({ ...article, id: article.id }))}
                  activeNumber={activeNumber}
                />
              </Container>
            )}

            {articles
              .filter((article) => article.category === "business")
              .map((article) => ({ ...article, id: article.id })).length >
              0 && (
              <Container
                width={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
                maxWidth={"full"}
                mt={12}
                display={"flex"}
                justifyContent={"center"}
                flexDirection={"column"}
              >
                <Button
                  variant="solid"
                  colorScheme="blue"
                  width={"100px"}
                  ml={"12"}
                >
                  Business
                </Button>
                <CardSwiper
                  articles={articles
                    .filter((article) => article.category === "business")
                    .map((article) => ({ ...article, id: article.id }))}
                  activeNumber={activeNumber}
                />
              </Container>
            )}

            {articles
              .filter((article) => article.category === "health")
              .map((article) => ({ ...article, id: article.id })).length >
              0 && (
              <Container
                width={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
                maxWidth={"full"}
                mt={12}
                display={"flex"}
                justifyContent={"center"}
                flexDirection={"column"}
              >
                <Button
                  variant="solid"
                  colorScheme="blue"
                  width={"100px"}
                  ml={"12"}
                >
                  Health
                </Button>
                <CardSwiper
                  articles={articles
                    .filter((article) => article.category === "health")
                    .map((article) => ({ ...article, id: article.id }))}
                  activeNumber={activeNumber}
                />
              </Container>
            )}

            {articles
              .filter((article) => article.category === "weather")
              .map((article) => ({ ...article, id: article.id })).length >
              0 && (
              <Container
                width={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
                maxWidth={"full"}
                mt={12}
                display={"flex"}
                justifyContent={"center"}
                flexDirection={"column"}
              >
                <Button
                  variant="solid"
                  colorScheme="blue"
                  width={"100px"}
                  ml={"12"}
                >
                  Weather
                </Button>
                <CardSwiper
                  articles={articles
                    .filter((article) => article.category === "weather")
                    .map((article) => ({ ...article, id: article.id }))}
                  activeNumber={activeNumber}
                />
              </Container>
            )}

            {articles
              .filter((article) => article.category === "accidents")
              .map((article) => ({ ...article, id: article.id })).length >
              0 && (
              <Container
                width={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
                maxWidth={"full"}
                mt={12}
                display={"flex"}
                justifyContent={"center"}
                flexDirection={"column"}
              >
                <Button
                  variant="solid"
                  colorScheme="blue"
                  width={"100px"}
                  ml={"12"}
                >
                  Accidents
                </Button>
                <CardSwiper
                  articles={articles
                    .filter((article) => article.category === "accidents")
                    .map((article) => ({ ...article, id: article.id }))}
                  activeNumber={activeNumber}
                />
              </Container>
            )}

            {articles
              .filter((article) => article.category === "general")
              .map((article) => ({ ...article, id: article.id })).length >
              0 && (
              <Container
                width={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
                maxWidth={"full"}
                mt={12}
                display={"flex"}
                justifyContent={"center"}
                flexDirection={"column"}
              >
                <Button
                  variant="solid"
                  colorScheme="blue"
                  width={"100px"}
                  ml={"12"}
                >
                  General
                </Button>
                <CardSwiper
                  articles={articles
                    .filter((article) => article.category === "general")
                    .map((article) => ({ ...article, id: article.id }))}
                  activeNumber={activeNumber}
                />
              </Container>
            )}

            {
              articles.length === 0 && (
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  flexDirection={"column"}
                >
                  <Heading as="h2" size="md" textAlign={"center"}>
                    No articles found in the search category
                  </Heading>
                  <Text fontSize={"sm"} textAlign={
                    "center"
                  }>
                    Please try again later
                  </Text>
                </Box>
              )
            }


            {/* <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <PaginationBox
                articles={articles}
                activeNumber={activeNumber}
                setActiveNumber={setActiveNumber}
              />
            </Box> */}
          </Box>
          <Box display={{ base: "none", sm: "none", md: "flex", lg: "flex" }}>
            <ArticleFilter articles={articles} setArticles={setArticles} setIsOpen={setIsOpen}/>
          </Box>
        </Box>
      </Container>

      <ReusableModal isOpen={isOpen} setIsOpen={setIsOpen}>
        <ArticleFilter articles={articles} setArticles={setArticles} setIsOpen={setIsOpen}/>
      </ReusableModal>
      <Footer />
    </>
  );
};

export default Archives;
