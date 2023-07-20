import { useEffect, useState } from "react";
// import { rtdb } from "../firebase/clientApp.ts";
import { rtdb } from "../firebase/clientApp.ts";
import { ref, set, get, child, getDatabase } from "firebase/database";
import { Box, Text, VStack, Divider, Avatar } from "@chakra-ui/react";
import { onValue } from "firebase/database";

export const getComments = (rtdb, reportId) => {
  let commentList = [];

  const reportCommentsRef = ref(rtdb, "report_comments/" + reportId);
  onValue(reportCommentsRef, (snapshot) => {
    const data = snapshot.val();
    for (const objId in data) {
      console.log(data[objId]);
      commentList.push({
        id: objId,
        ...data[`${objId}`],
      });
    }
  });

  // setComments((com) => [...com, ...commentList]);

  // commentList = [];
  return commentList;
};

const CommentsSection = ({ reportId, comments }) => {
  return (
    <VStack align="stretch" spacing="4">
      <Box></Box>
      {comments.map((comment) => (
        <Box
          key={comment.id}
          p="4"
          borderWidth="1px"
          borderRadius="lg"
          display="flex"
          alignItems="flex-start"
        >
          <Avatar src={comment.ownerPhoto} name={comment.displayName} mr="3" />
          <VStack align="start" spacing="1">
            <Text fontWeight="bold">{comment.displayName}</Text>
            <Text>{comment.text}</Text>
          </VStack>
        </Box>
      ))}
    </VStack>
  );
};

export default CommentsSection;
