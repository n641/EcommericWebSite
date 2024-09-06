import { apiService } from '../interceptor';

export const clearCart = async () => {
  const data = await apiService({ needsAuth: true }).delete(`/api/v1/cart`);
  return data;
};
