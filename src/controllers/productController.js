import * as productsModel from "../models/productsModel.js";

export const getAllProducts = async (req, res) => {
  const products = await productsModel.getAllProducts();
  res.send(products);
};
export const getProductById = async (req, res) => {
  const idProduct = req.params.id;

  try {
    const product = await productsModel.getProductById(idProduct);

    if (!product) {
      return res.status(404).json({
        message: `No se encontró ningún producto con el ID: ${idProduct}`,
      });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error("Error al obtener el producto:", error);
    res
      .status(500)
      .json({ message: "Error del servidor al obtener el producto." });
  }
};

export const createProduct = async (req, res) => {
  const { name, description, price, stock } = req.body;
  const newProduct = await productsModel.createProduct({
    name,
    description,
    price,
    stock,
  });
  if (newProduct) {
    res.status(201).json({
      message: "Producto creado correctamente",
      product: newProduct,
    });
  } else {
    res.status(500).json({
      message: "Error interno del servidor al crear el producto.",
    });
  }
};

export const deleteProduct = async (req, res) => {
  const idProduct = req.params.id;
  console.log(idProduct);

  try {
    const success = await productsModel.deleteProduct(idProduct);

    if (success) {
      return res.status(200).json({
        message: `Producto con ID ${idProduct} eliminado correctamente.`,
      });
    } else {
      return res.status(404).json({
        message: `No se encontró el producto con el ID ${idProduct}.`,
      });
    }
  } catch (error) {
    console.error("Error al eliminar el producto:", error.message);
    res.status(500).json({
      message: "Error al eliminar el producto. Intente nuevamente más tarde.",
    });
  }
};
