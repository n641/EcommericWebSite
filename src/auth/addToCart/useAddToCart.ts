import { useMutation } from 'react-query';
import { addToCart } from './addToCart-api';

export const useAddToCart = ({
  onErrorHandler,
  onSuccessHandler,
}: {
  onErrorHandler: (error: any) => void;
  onSuccessHandler: (data: any) => void;
}) => {
  const {
    mutate: AddToCart,
    isLoading,
    isError,
    error,
    data,
    isSuccess,
  } = useMutation(addToCart, {
    onError: (error: any) => {
      onErrorHandler(error);
    },
    onSuccess: (data) => {
      onSuccessHandler(data?.data);
    },
  });
  return { AddToCart, isLoading, error, isError, isSuccess, data };
};
