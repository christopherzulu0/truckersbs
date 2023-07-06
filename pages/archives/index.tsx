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
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { useSwipeable } from "react-swipeable";
import { GoClock } from "react-icons/go";
import ReusableModal from "@/Components/Article/ArticleForm/ModalReusable";
import PostLoader from "@/Components/Post/Loader";

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
  id: number;
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

  const visibleCards = cards.slice(currentIndex, currentIndex + 2);

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
          disabled={currentIndex === 0}
          onClick={() => handleSwipe("right")}
          variant="unstyled"
          color="blue.500"
          colorScheme="blue"
        >
          <BiLeftArrowAlt size={24} />
        </Button>
        <Box 
        display="flex"
        flexDirection={['column', 'column', 'column', 'row']}
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
                <Flex alignItems="center" mt={4}>
                  <Button
                    rightIcon={<BiRightArrowAlt size={24} />}
                    color={"blue.500"}
                    variant={"unstyled"}
                    fontWeight={"normal"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    View
                  </Button>
                </Flex>
              </Box>
            </Box>
          ))}
        </Box>
        {/* Next button */}
        <Button
          disabled={currentIndex === cards.length - 2}
          onClick={() => handleSwipe("left")}
          variant="unstyled"
          colorScheme="blue"
          color="blue.500"
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

  const openModal = () => {
    setIsOpen(true);
  };

  if (loading) {
    return (
      <Container>
        <PostLoader />
      </Container>
    );
  }

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
            {articles.filter((article) => article.category === "technology")
              .length > 0 && (
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
                  articles={articles.filter(
                    (article) => article.category === "technology"
                  )}
                  activeNumber={activeNumber}
                />
              </Container>
            )}

            {articles.filter((article) => article.category === "business")
              .length > 0 && (
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
                  articles={articles.filter(
                    (article) => article.category === "business"
                  )}
                  activeNumber={activeNumber}
                />
              </Container>
            )}

            {articles.filter((article) => article.category === "health")
              .length > 0 && (
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
                  articles={articles.filter(
                    (article) => article.category === "health"
                  )}
                  activeNumber={activeNumber}
                />
              </Container>
            )}

            {articles.filter((article) => article.category === "weather")
              .length > 0 && (
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
                  articles={articles.filter(
                    (article) => article.category === "weather"
                  )}
                  activeNumber={activeNumber}
                />
              </Container>
            )}

            {articles.filter((article) => article.category === "accidents")
              .length > 0 && (
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
                  articles={articles.filter(
                    (article) => article.category === "accidents"
                  )}
                  activeNumber={activeNumber}
                />
              </Container>
            )}

            {articles.filter((article) => article.category === "general")
              .length > 0 && (
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
                  articles={articles.filter(
                    (article) => article.category === "general"
                  )}
                  activeNumber={activeNumber}
                />
              </Container>
            )}
            {articles.length === 0 && (
              <Box
                fontSize="25"
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                color="red.500"
              >
                No articles found.
              </Box>
            )}

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
            <ArticleFilter articles={articles} setArticles={setArticles} />
          </Box>
        </Box>
      </Container>

      <ReusableModal isOpen={isOpen} setIsOpen={setIsOpen}>
        <ArticleFilter articles={articles} setArticles={setArticles} />
      </ReusableModal>
      <Footer />
    </>
  );
};

export default Archives;
