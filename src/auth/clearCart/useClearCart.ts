import { useMutation } from 'react-query';
import { clearCart } from './clearCart-api';

export const useclearCart = ({
  onErrorHandler,
  onSuccessHandler,
}: {
  onErrorHandler: (error: any) => void;
  onSuccessHandler: (data: any) => void;
}) => {
  const {
    mutate: clearProductsCart,
    isLoading: isLoadingClearCart,
    isError: isErrorClearCart,
    error: errorClearCart,
    data: ClearCart,
    isSuccess: isSuccessClearCart,
  } = useMutation(clearCart, {
    onError: (error: any) => {
      onErrorHandler(error);
    },
    onSuccess: (data) => {
      onSuccessHandler(data?.data);
    },
  });
  return { clearProductsCart, isLoadingClearCart, isErrorClearCart, errorClearCart, ClearCart, isSuccessClearCart };
};
