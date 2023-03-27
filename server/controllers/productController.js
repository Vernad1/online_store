const uuid = require("uuid");
const path = require("path");
const { Product, ProductInfo, ProductSize } = require("../models/models");
const ApiError = require("../error/ApiError");

class ProductController {
  async create(req, res, next) {
    try {
      let { name, price, typeId, info, size } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));

      const product = await Product.create({
        name,
        price,
        typeId,
        img: fileName,
      });

      if (size) {
        size = JSON.parse(size);
        size.array.forEach((i) => {
          ProductSize.create({
            size: i.size,
            productId: product.id,
          });
        });
      }

      if (info) {
        info = JSON.parse(info);
        info.array.forEach((i) =>
          ProductInfo.create({
            title: i.title,
            description: i.description,
            productId: product.id,
          })
        );
      }

      return res.json(product);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    let { typeId, limit, page } = req.query;
    page = page || 1;
    limit = limit || 12;
    let offset = page * limit - limit;
    let products;
    if (!typeId) {
      products = await Product.findAndCountAll({ limit, offset });
    }
    if (typeId) {
      products = await Product.findAndCountAll({
        where: { typeId },
        limit,
        offset,
      });
    }
    return res.json(products);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const product = await Product.findOne({
      where: { id },
      include: [
        { model: ProductInfo, as: "info" },
        { model: ProductSize, as: "size" },
      ],
    });
    return res.json(product);
  }
}

module.exports = new ProductController();
