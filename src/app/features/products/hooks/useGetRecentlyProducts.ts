import { useQuery } from 'react-query';
import { GetAllProducts } from '../services/getAllproducts';

export const useGetAllProducts = ({
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
  } = useQuery('GetAllProducts', GetAllProducts, {
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
