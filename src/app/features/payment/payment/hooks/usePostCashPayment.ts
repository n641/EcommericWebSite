import { useMutation } from 'react-query';
import { CashPayment } from '../services/cashPayment';

export const usePostCashPayment = ({
  onErrorHandler,
  onSuccessHandler,
}: {
  onErrorHandler: (error: any) => void;
  onSuccessHandler: (data: any) => void;
}) => {
  const {
    mutate: PayCash,
    isLoading,
    isError,
    error,
    data,
    isSuccess,
  } = useMutation(CashPayment, {
    onError: (error: any) => {
      onErrorHandler(error);
    },
    onSuccess: (data) => {
      onSuccessHandler(data?.data);
    },
  });
  return { PayCash, isLoading, error, isError, isSuccess, data };
};
