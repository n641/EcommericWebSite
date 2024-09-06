import { MainSlider, ScrollToTop } from '../../shared/components';
import CategoriesSection from './components/categoriesSection/categoriesSection';
import PopularCollectionSection from './components/popularCollectionSection/popularCollectionSection';
import RecommendedProductSection from './components/recommendedProductSection/recommendedProductSection';
import SkeletonHome from './components/skeletonHome/skeletonHome';
import { useGetAllCategories } from './hooks/useGetAllCategory';
import { useGetRecentlyProducts } from './hooks/useGetRecentlyProducts';

function Home() {
  const { isLoadingCategories, Categories } = useGetAllCategories({});
  const { isLoadingProducts, Products } = useGetRecentlyProducts({});

  const IsLoading = isLoadingCategories || isLoadingProducts;

  if (IsLoading) {
    return <SkeletonHome/>;
  }
  return (
    <div className="space-y-10">
      <ScrollToTop/>
      <>
        <MainSlider />

        <div className="mx-2">
          <CategoriesSection Categories={Categories?.data} />
          <RecommendedProductSection Products={Products?.data} />
          <PopularCollectionSection Products={Products?.data ?? []} />
        </div>
      </>
    </div>
  );
}

export { Home };
