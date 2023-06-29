import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Footer from "@/Components/Footer";
import {
  Box,
  Container,
  Divider,
  Flex,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import DonateComponent, {
  ModalPopup,
} from "@/Components/Article/ArticleForm/DonatePopUp";
import SubscriptionCard from "@/Components/subscription/Subscription";

const SocialMediaLinks = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      shadow={"sm"}
      gap={"8"}
      p={"2"}
      mb={"2"}
    >
      <Flex alignItems="center" mb={2}>
        <Link
          href="https://www.whatsapp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/whatsapp.png"
            alt="WhatsApp"
            boxSize={10}
            mr={2}
            transform="rotate(-90deg)"
          />
        </Link>
      </Flex>
      <Flex alignItems="center" mb={2}>
        <Link
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/in.png"
            alt="LinkedIn"
            boxSize={10}
            mr={2}
            transform="rotate(-90deg)"
          />
        </Link>
      </Flex>
      <Flex alignItems="center" mb={2}>
        <Link
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/insta.png"
            alt="Instagram"
            boxSize={10}
            mr={2}
            transform="rotate(-90deg)"
          />
        </Link>
      </Flex>
      <Flex alignItems="center">
        <Link
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/fb.png"
            alt="Facebook"
            boxSize={10}
            mr={2}
            transform="rotate(-90deg)"
          />
        </Link>
      </Flex>
    </Box>
  );
};

interface Article {
  id: number;
  title: string;
  imageURL: string;
  description: string;
  category: string;
}

function ArticleDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState<Article>();
  const [showSubscription, setShowSubscription] = useState(false);

  useEffect(() => {
    if (id) {
      fetch(`/api/articles/${id}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.article) {
            setArticle(data.article);
          } else {
            console.error("Article not found");
          }
        })
        .catch((error) => {
          console.error("Error fetching article:", error);
        });
    }
  }, [id]);

  if (!article) {
    return <Text>Article not found.</Text>;
  }

    const onClose = () => {
    setShowSubscription(false);
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
        <Box>
          <Text fontSize={"2xl"} fontWeight={"normal"}>
            Post
          </Text>
        </Box>
        <Divider />
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          mt={"4"}
          mb={4}
          maxW={"full"}
        >
          <Box
            display={"flex"}
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
            ml={"20"}
            mb={"4"}
            width={"100%"}
          >
            <Text fontSize={"2xl"} fontWeight={"bold"}>
              {article.title}
            </Text>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"10"}
            width={"100%"}
          >
            <Image
              src={article.imageURL}
              alt={article.title}
              boxSize={700}
              maxH="400px"
              objectFit={"cover"}
              mb={4}
              maxW={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
            />
            <Box>
              <SocialMediaLinks />
            </Box>
          </Box>
          <Box width={"80%"}>
            <Text mt={4} fontSize="20px">
              {article.description}
            </Text>
          </Box>
        </Box>
      </Container>
      {showSubscription && (
        <ModalPopup isOpen={showSubscription} onClose={onClose}>
          <SubscriptionCard />
        </ModalPopup>
      )}
      <DonateComponent setShowSubscription={setShowSubscription} />
      <Footer />
    </>
  );
}

export default ArticleDetailsPage;
