import { apiService } from '../../../../../auth/interceptor';

export const creditPay = async ({ cartId, body }: any) => {
  const { data } = await apiService({ needsAuth: true }).post(
    `api/v1/orders/checkout-session/${cartId}?url=http://n641.github.io/EcommericWebSite`,
    body
  );
  return data;
};
