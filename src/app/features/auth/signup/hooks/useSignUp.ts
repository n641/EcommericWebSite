import {useMutation} from 'react-query';
import { postSignUp } from '../service/SignUp-api';

export const useSignUp = ({
  onErrorHandler,
  onSuccessHandler,
}: {
  onErrorHandler: (error: any) => void;
  onSuccessHandler: (data: any) => void;
}) => {
  const {
    mutate: SignUP,
    isLoading,
    isError,
    error,
    data,
    isSuccess,
  } = useMutation(postSignUp, {
    onError: (error: any) => {
      onErrorHandler(error);
    },
    onSuccess: data => {
      onSuccessHandler(data?.data);
    },
  });
  return {SignUP, isLoading, error, isError, isSuccess, data};
};
