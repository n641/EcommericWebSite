import { useMutation } from 'react-query';
import { removeProductToWishList } from './addPorductToWithList-api';

export const useRemoveProductToWishList = ({
  onErrorHandler,
  onSuccessHandler,
}: {
  onErrorHandler: (error: any) => void;
  onSuccessHandler: (data: any) => void;
}) => {
  const {
    mutate: RemoveProductToWishList,
    isLoading: isLoadingRemoveProductToWishList,
    isError : isErrorRemoveProductToWishList,
    error: errorRemoveProductToWishList,
    data: dataRemoveProductToWishList,
    isSuccess: isSuccessRemoveProductToWishList,
  } = useMutation(removeProductToWishList, {
    onError: (error: any) => {
      onErrorHandler(error);
    },
    onSuccess: (data) => {
      onSuccessHandler(data?.data);
    },
  });
  return { RemoveProductToWishList , isLoadingRemoveProductToWishList , isErrorRemoveProductToWishList , errorRemoveProductToWishList , dataRemoveProductToWishList , isSuccessRemoveProductToWishList };
};
