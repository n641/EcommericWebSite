import { useQuery } from 'react-query';
import { GetRecentlyProducts } from '../services/getRecentlyproducts';

export const useGetRecentlyProducts = ({
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
  } = useQuery('GetAllProducts', GetRecentlyProducts, {
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
  };
};
