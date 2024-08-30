import { apiService } from '../../../../auth/interceptor';

export const GetAllBrands = async () => {
  const { data } = await apiService({}).get('/api/v1/brands');
  return data;
};
