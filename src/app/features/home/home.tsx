import { useQuery } from 'react-query';
import { MainSlider } from '../../shared/components';
import CategoriesSection from './components/categoriesSection/categoriesSection';
import { useGetAllCategories } from './hooks/useGetAllCategory';
import RecommendedProductSection from './components/recommendedProductSection/recommendedProductSection';
import PopularCollectionSection from './components/popularCollectionSection/popularCollectionSection';
import { useGetRecentlyProducts } from './hooks/useGetRecentlyProducts';

function Home() {
  const { isLoadingCategories, Categories } = useGetAllCategories({});
  const  {
    isLoadingProducts,
    Products,
  } = useGetRecentlyProducts({});

  const IsLoading = isLoadingCategories || isLoadingProducts

  if (IsLoading) {
    return <h1>Loading</h1>;
  }
  return (
    <div className="space-y-10">
        <>
          <MainSlider />

          <div className="mx-6">
            <CategoriesSection Categories={Categories?.data} />
            <RecommendedProductSection />
            <PopularCollectionSection Products={Products?.data ?? []}/>
          </div>
        </>
     
    </div>
  );
}

export { Home };
