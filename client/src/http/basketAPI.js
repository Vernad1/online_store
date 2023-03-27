import { $authHost, $host } from ".";

export const createBasket = async (userId, productId, size) => {
  const { data } = await $authHost.post("api/basket/", {
    userId,
    productId,
    size,
  });
  return data;
};

export const fetchBasket = async (userId) => {
  const { data } = await $authHost.get(`api/basket/${userId}`);
  return data;
};
