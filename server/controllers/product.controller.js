const Product = require("../models/Product");
const productCtrl = {};

productCtrl.getProducts = async (req, res) => {
  let count = await Product.find();
  if (count.length == 0) {
    for (let index = 1; index <= 10; index++) {
      const productName = "Product" + " " + index;
      const price = Math.floor(Math.random() * 100) + 1;

      const newProduct = new Product({
        productName: productName,
        price: price,
      });

      await newProduct.save();
    }
    const tableGroups = await TableGroup.find();
    res.send(tableGroups);
  } else {
    const products = await Product.find();
    res.send(products);
  }
};

module.exports = productCtrl;
