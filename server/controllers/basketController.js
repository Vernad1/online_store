const { Basket } = require("../models/models");

class BasketController {
  async create(req, res) {
    const { userId, productId, size } = req.body;
    const basket = await Basket.create({ productId, userId, size });
    return res.json(basket);
  }

  async getAll(req, res) {
    const { id } = req.params;
    const baskets = await Basket.findAll({ where: { userId: id } });
    return res.json(baskets);
    // console.log(id);
    // return res.json(id);
  }
}

module.exports = new BasketController();
