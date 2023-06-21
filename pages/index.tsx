import Navbar from "../Components/Navbar/index";
import PageContentLayout from "../Components/Layout/PageContent";
import { Stack } from "@chakra-ui/react";
import CreatePostLink from "../Components/Community/CreatePostLink";
import Premium from "../Components/Community/Premium";
import PersonalHome from "../Components/Community/PersonalHome";
import Footer from "../Components/Footer"
import PostItem from "../Components/Post/PostItem";
import { Post } from "@/atoms/postsAtom";
import { MouseEvent } from "react";
import usePosts from "../hooks/usePosts";

export default function Home() {
  const {
    postStateValue,
    setPostStateValue,
    onVote,
    onSelectPost,
    onDeletePost,
    loading,
    setLoading,
  } = usePosts();
  return (
    <>
     <PageContentLayout>
    {/* <Navbar/> */}
    <>
    <CreatePostLink />
    <Stack>
      <PostItem />
  </Stack>
    </>
    <Stack spacing={5} position="sticky" top="14px">

        <Premium />
        <PersonalHome />
      </Stack>
      
    </PageContentLayout>
    <Footer/>
    </>
  )
}
