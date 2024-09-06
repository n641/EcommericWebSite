import { apiService } from '../../../../../auth/interceptor';

export const postSignUp = async ({
  name,
  email,
  password,
  rePassword,
  phone,
}: any) => {
  const data = await apiService({}).post(`/api/v1/auth/signup`, {
    name,
    email,
    password,
    rePassword,
    phone,
  });
  return data;
};
