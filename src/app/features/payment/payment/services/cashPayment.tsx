import { apiService } from "../../../../../auth/interceptor";

export const CashPayment = async ({cartId , body}:any) => {
  const { data } = await apiService({ needsAuth: true }).post(`api/v1/orders/${cartId }`, body);
  return data;
};
