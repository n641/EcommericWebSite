import { apiService } from "../interceptor";

export const getCart = async () => {
  const { data } = await apiService({ needsAuth: true }).get(`api/v1/cart`);
  return data;
};
