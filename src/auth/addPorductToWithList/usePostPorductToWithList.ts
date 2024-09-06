import { useMutation } from 'react-query';
import { addProductToWishList } from './addPorductToWithList-api';

export const useAddProductToWishList = ({
  onErrorHandler,
  onSuccessHandler,
}: {
  onErrorHandler: (error: any) => void;
  onSuccessHandler: (data: any) => void;
}) => {
  const {
    mutate: PostProductToWishList,
    isLoading: isLoadingPostProductToWishList,
    isError : isErrorPostProductToWishList,
    error: errorPostProductToWishList,
    data: dataPostProductToWishList,
    isSuccess: isSuccessPostProductToWishList,
  } = useMutation(addProductToWishList, {
    onError: (error: any) => {
      onErrorHandler(error);
    },
    onSuccess: (data) => {
      onSuccessHandler(data?.data);
    },
  });
  return { PostProductToWishList , isLoadingPostProductToWishList , isErrorPostProductToWishList , errorPostProductToWishList , dataPostProductToWishList , isSuccessPostProductToWishList };
};
