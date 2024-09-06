import { useQuery } from 'react-query';
import { getAddress } from '../services/getAddres';

export const useGetAddress = ({
  onErrorHandler,
  onSuccessHandler,
}: {
  onErrorHandler?: (error: any) => void;
  onSuccessHandler?: (data: any) => void;
}) => {
  const {
    isLoading: isLoadingAddress,
    isError: isErrorAddress,
    error: errorAddress,
    data: Address,
    isSuccess: isSuccessAddress,
  } = useQuery(['getAddress'], getAddress, {
    onError: (error: any) => {
      if (onErrorHandler) onErrorHandler(error);
    },
    onSuccess: (data) => {
      if (onSuccessHandler) onSuccessHandler(data?.data);
    },
  });

  return {
    isLoadingAddress,
    errorAddress,
    isErrorAddress,
    isSuccessAddress,
    Address,
  };
};
