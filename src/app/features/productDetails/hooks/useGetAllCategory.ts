import { useQuery } from 'react-query';
import { GetProductOfCategory } from '../services/getProductsOfCategory';

export const useGetProductOfCategory = ({
  onErrorHandler,
  onSuccessHandler,
  categoryId
}: {
  onErrorHandler?: (error: any) => void;
  onSuccessHandler?: (data: any) => void;
  categoryId: string
}) => {
  const {
    isLoading: isLoadingProducts,
    isError: isErrorProducts,
    error: errorProducts,
    data: Products,
    isSuccess: isSuccessProducts,
  } = useQuery(['GetProductOfCategory' , categoryId], GetProductOfCategory, {
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
