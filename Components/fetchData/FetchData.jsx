import {
  doc,
  deleteDoc,
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";

//fetching all docs from firebase database

export const getReports = async (db) => {
  const report = await getDocs(
    query(collection(db, "report"))
  );
  return report.docs.map((doc) => ({
    id: doc.id,
    data: doc.data(),
  }));
};
