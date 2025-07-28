import { db } from "../../src/data/firestoneData.js";
import {
  collection,
  addDoc,
  deleteDoc,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";

const productsCollection = collection(db, "products");

export const getAllProducts = async () => {
  const products = [];
  const querySnapshot = await getDocs(productsCollection);
  querySnapshot.forEach((doc) => {
    products.push({ id: doc.id, ...doc.data() });
  });
  return products;
};

export const getProductById = async (idProduct) => {
  const productRef = doc(db, "products", idProduct);
  const productDoc = await getDoc(productRef);
  if (!productDoc.exists()) {
    return null;
  }

  return { id: productDoc.id, ...productDoc.data() };
};

export const createProduct = async (productData) => {
  try {
    const { name, description, price, stock } = productData;

    const newProductRef = await addDoc(productsCollection, {
      name,
      price: Number(price),
      stock: Number(stock),
      description,
    });

    return {
      id: newProductRef.id,
      name,
      description,
      price: Number(price),
      stock: Number(stock),
    };
  } catch (error) {
    console.error("Error al crear el producto:", error.message);
    throw error;
  }
};

export const deleteProduct = async (idProduct) => {
  try {
    const productRef = doc(db, "products", idProduct);
    await deleteDoc(productRef);
    return true; // Indica que se borró correctamente
  } catch (error) {
    console.error("Error al eliminar el producto:", error.message);
    throw new Error("No se pudo eliminar el producto.");
  }
};
