import { apiService } from "../../../../../auth/interceptor";

export const postAddress = async (body: any ) => {
  const { data } = await apiService({ needsAuth: true }).post(`api/v1/addresses`, body);
  return data;
};
