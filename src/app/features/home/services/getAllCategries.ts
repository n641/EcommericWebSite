import { apiService } from '../../../../auth/interceptor';

export const GetAllCategries = async () => {
  const { data } = await apiService({}).get('/api/v1/categories');
  return data;
};
