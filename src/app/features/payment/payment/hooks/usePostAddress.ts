import { useMutation } from 'react-query';
import { postAddress } from '../services/postAddress';

export const useAddAddress = ({
  onErrorHandler,
  onSuccessHandler,
}: {
  onErrorHandler: (error: any) => void;
  onSuccessHandler: (data: any) => void;
}) => {
  const {
    mutate: AddAddress,
    isLoading,
    isError,
    error,
    data,
    isSuccess,
  } = useMutation(postAddress, {
    onError: (error: any) => {
      onErrorHandler(error);
    },
    onSuccess: (data) => {
      onSuccessHandler(data?.data);
    },
  });
  return { AddAddress, isLoading, error, isError, isSuccess, data };
};
