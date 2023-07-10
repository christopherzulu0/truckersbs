import { firestore } from "@/firebase/clientApp";
import { collection, getDocs } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";

const GetArticles = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const articlesSnapshot = await getDocs(collection(firestore, "articles"));
    const articlesData = articlesSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));


   
    
    res.status(200).json({ articles: articlesData });
  } catch {
    res.status(400).end();
  }
};

export default GetArticles;