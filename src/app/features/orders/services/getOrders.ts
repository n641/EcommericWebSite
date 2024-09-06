import { apiService } from '../../../../auth/interceptor';

export const getOrders = async ({queryKey}:any) => {
  const userId = queryKey[1];
  const { data } = await apiService({}).get(`api/v1/orders/user/${userId}`);
  return data;
};
