import { useQuery } from 'react-query';
import { getCart } from './getCart-api';

export const useGetCart = ({
  onErrorHandler,
  onSuccessHandler,
  enabled = true,
}: {
  onErrorHandler?: (error: any) => void;
  onSuccessHandler?: (data: any) => void;
  enabled?: boolean;
}) => {
  const {
    isLoading: isLoadingCartData,
    isError: isErrorCartData,
    error: errorCartData,
    data: CartData,
    isSuccess: isSuccessCartData,
  } = useQuery(['Cart'], getCart, {
    onError: (error: any) => {
      if (onErrorHandler) onErrorHandler(error);
    },
    onSuccess: (data) => {
      if (onSuccessHandler) onSuccessHandler(data?.data);
    },
    enabled: enabled,
  });

  return {
    isLoadingCartData,
    errorCartData,
    isErrorCartData,
    isSuccessCartData,
    CartData,
  };
};
