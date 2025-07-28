import { db } from "../../src/data/firestoneData.js";
import { collection, addDoc, query,where,getDocs } from "firebase/firestore";

const usersCollection=collection(db,"users");

export const getUserByEmail = async (email) => {
  try {
    const q = query(usersCollection, where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return null; // o lanzar un error si preferís
    }

    const userDoc = querySnapshot.docs[0];
    return {
      id: userDoc.id,
      ...userDoc.data(),
    };
  } catch (error) {
    console.error("Error al buscar el usuario:", error);
    throw error;
  }
};