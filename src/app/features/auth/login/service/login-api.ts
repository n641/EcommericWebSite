import axios from 'axios';

export const postLoginUser = async ({ email, password }: any) => {
  const data = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, {
    email,
    password,
  });
  return data;
};
