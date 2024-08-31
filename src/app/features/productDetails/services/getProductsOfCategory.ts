import { apiService } from '../../../../auth/interceptor';

export const GetProductOfCategory = async ({queryKey}:any) => {
  const CategoryId = queryKey[1];
  console.warn(CategoryId)
  const { data } = await apiService({}).get(`/api/v1/products?category[in]=${CategoryId}`);
  return data;
};
