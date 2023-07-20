import { Box, Textarea, Button } from "@chakra-ui/react";
import { useState } from "react";
import { ref, set, push, child, update } from "firebase/database";
import { rtdb, auth } from "../firebase/clientApp.ts";

// import { auth } from "../firebase/clientApp.ts";

import { useAuthState } from "react-firebase-hooks/auth";
import { getComments } from "./DisplayComments";

const CommentForm = ({ reportId, setComments }) => {
  const [commentText, setCommentText] = useState("");

  const [user] = useAuthState(auth);
  const [createdBy] = user.providerData;
  const { displayName, photoURL, uid } = createdBy;

  const handleCommentSubmit = () => {
    if (commentText.length > 0) {
      const dbReference = ref(rtdb);

      const commentsListRef = ref(rtdb, "report_comments/" + reportId);

      const commentId = push(commentsListRef);

      const report = {
        text: commentText,
        userId: uid,
        ownerPhoto: photoURL,
        ownerUid: uid,
        displayName,
      };

      set(commentId, report);
      const comments = getComments(rtdb, reportId);

      setComments(comments);
      setCommentText("");
    }
  };

  return (
    <Box>
      <Textarea
        placeholder="Write your comment..."
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      <Button onClick={handleCommentSubmit} mt="2">
        Comment
      </Button>
    </Box>
  );
};

export default CommentForm;
