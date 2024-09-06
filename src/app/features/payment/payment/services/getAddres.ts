import { apiService } from "../../../../../auth/interceptor";

export const getAddress = async () => {
  const { data } = await apiService({ needsAuth: true }).get(`/api/v1/addresses`);
  return data;
};
