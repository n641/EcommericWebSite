import { useQuery } from 'react-query';
import { GetAllProducts } from '../services/getAllproducts';

export const useGetAllProducts = ({
  onErrorHandler,
  onSuccessHandler,
  categoryId , BrandId
}: {
  onErrorHandler?: (error: any) => void;
  onSuccessHandler?: (data: any) => void;
  categoryId?: string;
  BrandId?: string;
}) => {
  const {
    isLoading: isLoadingProducts,
    isError: isErrorProducts,
    error: errorProducts,
    data: Products,
    isSuccess: isSuccessProducts,
  } = useQuery(['GetAllProducts', categoryId , BrandId], GetAllProducts, {
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
