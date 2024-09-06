import { useMutation } from 'react-query';
import { CashPayment } from '../services/cashPayment';
import { creditPay } from '../services/creditPay';

export const usePostPayCreadit = ({
  onErrorHandler,
  onSuccessHandler,
}: {
  onErrorHandler: (error: any) => void;
  onSuccessHandler: (data: any) => void;
}) => {
  const {
    mutate: PayCredit,
    isLoading : isLoadingPayCredit,
    isError : isErrorPayCredit,
    error : errorPayCredit,
    data : dataPayCredit,
    isSuccess : isSuccessPayCredit,
  } = useMutation(creditPay, {
    onError: (error: any) => {
      onErrorHandler(error);
    },
    onSuccess: (data) => {
      onSuccessHandler(data);
    },
  });
  return { PayCredit, isLoadingPayCredit , isErrorPayCredit , errorPayCredit , dataPayCredit , isSuccessPayCredit };
};
