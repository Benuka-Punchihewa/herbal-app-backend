const { StatusCodes } = require("http-status-codes");
const BadRequestError = require("../error/error.classes/BadRequestError");
const Product = require("./product.model");
const ProductService = require("./product.service");

const createProduct = async (req, res) => {
  const { strigifiedBody } = req.body;
  const auth = req.auth;

  // // validate image
  // if (!req.file) throw new BadRequestError("Image is Required!");

  // // parse strigifiedBody
  // let parsedBody;
  // if (strigifiedBody) {
  //   try {
  //     parsedBody = JSON.parse(strigifiedBody);
  //   } catch (err) {
  //     throw new BadRequestError("Invalid JSON body!");
  //   }
  // }

  // // save product
  // const product = new Product({});
  // const dbProduct = await ProductService.save(product);

  // // upload & set image
  // const path = `products/${product._id}`;
  // let mimeType;
  // mimeType = req.file.mimetype;
  // // validate file type
  // if (mimeType.split("/")[0] !== "image")
  //   throw new BadRequestError("Only Image Files are Permitted!");

  // // upload image to firebase
  // await CommonService.uploadToFirebase(req.file, path);

  // // update image
  // dbProduct.image = {
  //   mimeType: mimeType,
  //   firebaseStorageRef: path,
  // };
  // const dbUpdatedProduct = await ProductService.save(dbProduct);

  // return res.status(StatusCodes.CREATED).json(dbUpdatedProduct);
};

module.exports = {
  createProduct,
};
