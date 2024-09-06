import {useMutation} from 'react-query';
import { postLoginUser } from '../service/login-api';

export const useLogin = ({
  onErrorHandler,
  onSuccessHandler,
}: {
  onErrorHandler: (error: any) => void;
  onSuccessHandler: (data: any) => void;
}) => {
  const {
    mutate: loginUser,
    isLoading,
    isError,
    error,
    data,
    isSuccess,
  } = useMutation(postLoginUser, {
    onError: (error: any) => {
      onErrorHandler(error);
    },
    onSuccess: data => {
      onSuccessHandler(data?.data);
    },
  });
  return {loginUser, isLoading, error, isError, isSuccess, data};
};
