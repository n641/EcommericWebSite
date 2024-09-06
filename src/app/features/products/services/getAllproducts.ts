import { apiService } from '../../../../auth/interceptor';

export const GetAllProducts = async ({ queryKey }: any) => {
  const categoryId = queryKey?.[1];
  const BrandId = queryKey?.[2];
  const url = categoryId
    ? `/api/v1/products?category[in]=${categoryId}`
    : BrandId
      ? `/api/v1/products?brand=${BrandId}`
      : `/api/v1/products`;
  const { data } = await apiService({}).get(url);
  return data;
};
