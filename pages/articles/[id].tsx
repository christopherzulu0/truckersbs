import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Footer from "@/Components/Footer";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import DonateComponent, {
  ModalPopup,
} from "@/Components/Article/ArticleForm/DonatePopUp";
import SubscriptionCard from "@/Components/subscription/Subscription";
import PostLoader from "../../Components/Post/Loader";
import { BsThreeDots } from "react-icons/bs";
import EditArticleForm from "@/Components/Article/ArticleForm/EditArticle";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/clientApp";

const SocialMediaLinks = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      shadow={"sm"}
      gap={[2, 2, 4, 8]}
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
            boxSize={[8, 8, 10, 10]}
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
            boxSize={[8, 8, 10, 10]}
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
            boxSize={[8, 8, 10, 10]}
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
            boxSize={[8, 8, 10, 10]}
            mr={2}
            transform="rotate(-90deg)"
          />
        </Link>
      </Flex>
    </Box>
  );
};

interface Article {
  featured: boolean;
  articleUserId: string;
  id: number;
  title: string;
  imageURL: string;
  description: string;
  category: string;
  reads: number;
  tags: [];
}

function ArticleDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState<Article>();
  const [reads, setReads] = useState(0);
  const [showSubscription, setShowSubscription] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [user] = useAuthState(auth);
  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
    if (id) {
      setLoading(true);
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
        })
        .finally(() => {
          setLoading(false);
        });
    }

    if (showModal) {
      const timer = setTimeout(() => {
        setShowModal(false);
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [id, showModal]);

  // Increment the reads count when the article is loaded
  useEffect(() => {
    if (article) {
      // Update the reads count in the database
      fetch(`/api/articles/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to update the reads count");
          }
        })
        .catch((error) => {
          console.error("Error updating the reads count:", error);
        });
    }
  }, [article, id]);

  if (loading) {
    return (
      <Container>
        <PostLoader />
      </Container>
    );
  }

  if (!article) {
    return <Text>Article not found.</Text>;
  }

  const onClose = () => {
    setShowSubscription(false);
  };

  // Handle edit functionality
  const handleEdit = () => {
    setIsOpen(true);
  };

  // Handle delete functionality
  const handleDelete = async () => {
    try {
      // Make an API call to delete the article
      const response = await fetch(`/api/articles/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setShowModal(true); // Show the
        console.log("Article deleted successfully");
        // Redirect or perform any additional actions after deleting the article
      } else {
        console.error("Failed to delete the article");
      }
    } catch (error) {
      console.error("Error deleting the article:", error);
    }
    
  };

  const handleOnClose = () => {
    setIsOpen(false);
  };

  const initialValues = {
    title: article.title,
    category: article.category,
    description: article.description,
    imageURL: article.imageURL,
    featured: article?.featured,
  };


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
            ml={[0, 0, 20 , 20]}
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
            gap={[2, 2, 4, 8]}
            width={"100%"}
            height={{ base: "100%", sm: "100%"}}
          >
            <Image
              src={article.imageURL}
              alt={article.title}
              boxSize={[200, 200, 400, 700]}
              maxH={[200, 200, 300, 400]}
              objectFit={"contain"}
              mb={4}
              maxW={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
              width={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
              pl={{base: '27px', sm: '27px'}}
            />
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"flex-start"}
              flexDirection={"column"}
              gap={[2,2,4,4]}
            >
              {user?.uid === article.articleUserId && (
                <Menu>
                  <MenuButton as={Button} variant="ghost" size="sm">
                    <BsThreeDots size={20} />
                  </MenuButton>
                  <MenuList>
                    <MenuItem onClick={handleEdit}>Edit</MenuItem>
                    <MenuItem onClick={handleDelete}>Delete</MenuItem>
                  </MenuList>
                </Menu>
              )}
              <SocialMediaLinks />
            </Box>
          </Box>
          <Box width={['100%', '100%', '80%', '80%']} >
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
      {user?.uid === article.articleUserId && (
        <EditArticleForm
          isOpen={isOpen}
          onClose={handleOnClose}
          articleId={id as any}
          initialValues={initialValues}
        />
      )}{" "}
      <Footer />
    </>
  );
}

export default ArticleDetailsPage;
