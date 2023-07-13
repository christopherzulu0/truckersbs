import { Grid, GridItem, Box, Heading, Image } from "@chakra-ui/react";

const BlogPost = ({ title, thumbnail }) => {
  return (
    <Grid templateColumns="50px auto" my="10px" gap={4} alignItems="center">
      <GridItem>
        <Box w="50px" h="50px" bg="gray.200" borderRadius="md">
          {/* Display thumbnail here */}
          <Image src={thumbnail} alt={"Image description"} width={"lg"} />
        </Box>
      </GridItem>
      <GridItem>
        <Heading as="h3" size="md">
          {title}
        </Heading>
      </GridItem>
    </Grid>
  );
};

export default BlogPost;
