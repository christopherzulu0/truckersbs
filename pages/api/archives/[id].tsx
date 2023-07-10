import { firestore } from "@/firebase/clientApp";
import { deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query;

    if (req.method === "GET") {
      // Get the article document based on the ID
      const articleDocRef = doc(firestore, "articles", id as string);
      const articleDocSnapshot = await getDoc(articleDocRef);

      // Check if the article exists
      if (!articleDocSnapshot.exists()) {
        res.status(404).json({ error: "Article not found" });
        return;
      }

      // Extract the article data
      const articleData = articleDocSnapshot.data();

      res.status(200).json({ article: articleData });
    } else if (req.method === "DELETE") {
      // Get the article document based on the ID
      const articleDocRef = doc(firestore, "articles", id as string);

      // Delete the article document
      await deleteDoc(articleDocRef);

      res.status(200).json({ message: `Article with ID ${id} deleted successfully` });
    } else if (req.method === "PATCH") {
      // Get the article document based on the ID
      const articleDocRef = doc(firestore, "articles", id as string);
      const articleDocSnapshot = await getDoc(articleDocRef);

      // Check if the article exists
      if (!articleDocSnapshot.exists()) {
        res.status(404).json({ error: "Article not found" });
        return;
      }

      // Extract the current article data
      const articleData = articleDocSnapshot.data();

      // Update the reads count
      const updatedReads = (articleData.reads || 0) + 1;

      // Update the article document with the new reads count
      await updateDoc(articleDocRef, { reads: updatedReads });

      // Respond with the updated article data
      res.status(200).json({ article: { ...articleData, reads: updatedReads } });
    } else {
      res.status(405).json({ error: "Method Not Allowed" });
    }
  } catch (error) {
    console.error("Error handling API request:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}