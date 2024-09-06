import { apiService } from '../interceptor';

export const addToCart = async ({ productId }: any) => {
  const data = await apiService({ needsAuth: true }).post(
    `/api/v1/cart`,
    {
      productId,
    }
  );
  return data;
};
