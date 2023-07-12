import { onAuthStateChanged, getAuth, User } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const auth = getAuth(); // Get the Firebase Auth instance
const db = getFirestore(); // Your Firestore instance

const getUserRole = async (user: User) => {
  console.log(user);
  // Get ID Token
  const idTokenResult = await user.getIdTokenResult();

  // Extract data from the ID token result
  const { claims } = idTokenResult;

  return claims.role;
}

export default getUserRole;