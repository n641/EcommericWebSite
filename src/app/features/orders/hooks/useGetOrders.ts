import { useQuery } from 'react-query';
import { getOrders } from '../services/getOrders';

export const useGetOrders = ({
  onErrorHandler,
  onSuccessHandler,
  userId,
  enabled,
}: {
  onErrorHandler?: (error: any) => void;
  onSuccessHandler?: (data: any) => void;
  userId :string;
  enabled?: boolean;
}) => {
  const {
    isLoading: isLoadingProducts,
    isError: isErrorProducts,
    error: errorProducts,
    data: Products,
    isSuccess: isSuccessProducts,
    refetch: refetchProducts,
  } = useQuery(['getOrders' , userId], getOrders, {
    onError: (error: any) => {
      if (onErrorHandler) onErrorHandler(error);
    },
    onSuccess: (data) => {
      if (onSuccessHandler) onSuccessHandler(data?.data);
    },
    enabled: enabled,
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
