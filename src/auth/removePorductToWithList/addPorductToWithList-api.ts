import { apiService } from '../interceptor';

export const removeProductToWishList = async ({ productId }: any) => {
  const data = await apiService({ needsAuth: true }).delete(
    `/api/v1/wishlist/${productId}`
  );
  return data;
};
