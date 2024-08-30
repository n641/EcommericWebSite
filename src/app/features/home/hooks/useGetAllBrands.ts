import { useQuery } from 'react-query';
import { GetAllBrands } from '../services/getAllBrands';

export const useGetAllBrands = ({
  onErrorHandler,
  onSuccessHandler,
}: {
  onErrorHandler?: (error: any) => void;
  onSuccessHandler?: (data: any) => void;
}) => {
  const {
    isLoading: isLoadingBrands,
    isError: isErrorBrands,
    error: errorBrands,
    data: Brands,
    isSuccess: isSuccessBrands,
  } = useQuery('getAllBrands', GetAllBrands, {
    onError: (error: any) => {
      if (onErrorHandler) onErrorHandler(error);
    },
    onSuccess: (data) => {
      if (onSuccessHandler) onSuccessHandler(data?.data);
    },
  });

  return {
    isLoadingBrands,
    errorBrands,
    isErrorBrands,
    isSuccessBrands,
    Brands,
  };
};
