import { useQuery } from 'react-query';
import { getWishList } from '../services/getWishList';

export const useGetWishList = ({
  onErrorHandler,
  onSuccessHandler,
}: {
  onErrorHandler?: (error: any) => void;
  onSuccessHandler?: (data: any) => void;
}) => {
  const {
    isLoading: isLoadingProducts,
    isError: isErrorProducts,
    error: errorProducts,
    data: Products,
    isSuccess: isSuccessProducts,
    refetch: refetchProducts,
  } = useQuery(['getWishList'], getWishList, {
    onError: (error: any) => {
      if (onErrorHandler) onErrorHandler(error);
    },
    onSuccess: (data) => {
      if (onSuccessHandler) onSuccessHandler(data?.data);
    },
  });

  return {
    isLoadingProducts,
    errorProducts,
    isErrorProducts,
    isSuccessProducts,
    Products,
    refetchProducts
  };
};
