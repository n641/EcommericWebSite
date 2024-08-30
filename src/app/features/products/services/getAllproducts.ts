import { apiService } from '../../../../auth/interceptor';

export const GetAllProducts = async () => {
  const { data } = await apiService({}).get('/api/v1/products');
  return data;
};
