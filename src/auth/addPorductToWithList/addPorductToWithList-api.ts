import { apiService } from '../interceptor';

export const addProductToWishList = async ({ productId }: any) => {
  const data = await apiService({ needsAuth: true }).post(
    `/api/v1/wishlist`,
    {
      productId,
    }
  );
  return data;
};
