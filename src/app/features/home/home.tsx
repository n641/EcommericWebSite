import { MainSlider } from '../../shared/components';
import CategoriesSection from './components/categoriesSection/categoriesSection';
import PopularCollectionSection from './components/popularCollectionSection/popularCollectionSection';
import RecommendedProductSection from './components/recommendedProductSection/recommendedProductSection';
import { useGetAllCategories } from './hooks/useGetAllCategory';
import { useGetRecentlyProducts } from './hooks/useGetRecentlyProducts';

function Home() {
  const { isLoadingCategories, Categories } = useGetAllCategories({});
  const { isLoadingProducts, Products } = useGetRecentlyProducts({});

  const IsLoading = isLoadingCategories || isLoadingProducts;

  console.log(Products?.data);
  if (IsLoading) {
    return <h1>Loading</h1>;
  }
  return (
    <div className="space-y-10">
      <>
        <MainSlider />

        <div className="mx-6">
          <CategoriesSection Categories={Categories?.data} />
          <RecommendedProductSection Products={Products?.data} />
          <PopularCollectionSection Products={Products?.data ?? []} />
        </div>
      </>
    </div>
  );
}

export { Home };
