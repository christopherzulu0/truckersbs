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
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
  }, [id]);

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
      method: 'DELETE',
    });

    if (response.ok) {
      console.log('Article deleted successfully');
      // Redirect or perform any additional actions after deleting the article
    } else {
      console.error('Failed to delete the article');
    }
  } catch (error) {
    console.error('Error deleting the article:', error);
  }
};


  const handleOnClose = ()=> {
    setIsOpen(false);
  }

  const initialValues = {
    title: article.title,
    category: article.category,
    description: article.description,
    imageURL: article.imageURL
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
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"flex-start"}
              flexDirection={"column"}
              gap={"4"}
            >
              <Menu>
                <MenuButton as={Button} variant="ghost" size="sm">
                  <BsThreeDots size={20} />
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={handleEdit}>Edit</MenuItem>
                  <MenuItem onClick={handleDelete}>Delete</MenuItem>
                </MenuList>
              </Menu>
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
      < EditArticleForm isOpen={isOpen} onClose={handleOnClose} articleId={id as any} initialValues={initialValues}/>
      <Footer />
    </>
  );
}

export default ArticleDetailsPage;
