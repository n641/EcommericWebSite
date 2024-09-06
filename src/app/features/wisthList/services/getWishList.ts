import { apiService } from '../../../../auth/interceptor';

export const getWishList = async () => {
  const { data } = await apiService({ needsAuth: true }).get('/api/v1/wishlist');
  return data;
};
