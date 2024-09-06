import { useMutation } from 'react-query';
import {  UpdateCartCount } from './updateCartCount-api';

export const useUpdateCartCount = ({
  onErrorHandler,
  onSuccessHandler,
}: {
  onErrorHandler: (error: any) => void;
  onSuccessHandler: (data: any) => void;
}) => {
  const {
    mutate: UpdateProductCartCount,
    isLoading : isLoadingUpdateCart,
    isError: isErrorUpdateCart,
    error : errorUpdateCart,
    data : dataUpdateCart,
    isSuccess : isSuccessUpdateCart,
  } = useMutation(UpdateCartCount, {
    onError: (error: any) => {
      onErrorHandler(error);
    },
    onSuccess: (data) => {
      onSuccessHandler(data);
    },
  });
  return { UpdateProductCartCount, isLoadingUpdateCart , isErrorUpdateCart , errorUpdateCart , dataUpdateCart , isSuccessUpdateCart };
};
