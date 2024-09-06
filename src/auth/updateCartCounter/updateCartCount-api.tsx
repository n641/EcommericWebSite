import { apiService } from '../interceptor';

export const UpdateCartCount = async ({ productId, count }: any) => {
  console.warn(productId);
  console.warn(count);
  const body = {
    count: count,
  };
  const data = await apiService({ needsAuth: true }).put(
    `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
    body  
  );
  return data;
};
