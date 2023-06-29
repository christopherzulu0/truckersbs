import { firestore } from "@/firebase/clientApp";
import { doc, getDoc } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { id } = req.query;
  
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
    } catch (error) {
      console.error("Error fetching article:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
  