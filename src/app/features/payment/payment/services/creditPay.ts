import { apiService } from '../../../../../auth/interceptor';

export const creditPay = async ({ cartId, body }: any) => {
  const { data } = await apiService({ needsAuth: true }).post(
    `api/v1/orders/checkout-session/${cartId}?url=http://localhost:5173/Home`,
    body
  );
  return data;
};
