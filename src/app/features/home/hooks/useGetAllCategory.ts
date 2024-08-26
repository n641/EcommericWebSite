import { useQuery } from 'react-query';
import { GetAllCategries } from '../services/getAllCategries';

export const useGetAllCategories = ({
  onErrorHandler,
  onSuccessHandler,
}: {
  onErrorHandler?: (error: any) => void;
  onSuccessHandler?: (data: any) => void;
}) => {
  const {
    isLoading: isLoadingCategories,
    isError: isErrorCategories,
    error: errorCategories,
    data: Categories,
    isSuccess: isSuccessCategories,
  } = useQuery('getAllCategories', GetAllCategries, {
    onError: (error: any) => {
      if (onErrorHandler) onErrorHandler(error);
    },
    onSuccess: (data) => {
      if (onSuccessHandler) onSuccessHandler(data?.data);
    },
  });

  return {
    isLoadingCategories,
    errorCategories,
    isErrorCategories,
    isSuccessCategories,
    Categories,
  };
};
