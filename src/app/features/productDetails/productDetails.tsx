import { useLocation } from 'react-router-dom';
import { BreadCramp, ScrollToTop } from '../../shared/components';
import DeleverySection from './components/deleverySection/deleverySection';
import ProductSection from './components/productsSection/productSection';
import RelatedProductSection from './components/relatedProductSection/relatedProductSection';
import { useGetProductOfCategory } from './hooks/useGetAllCategory';
import RatingProduct from './components/ratingProduct/ratingProduct';
import { useEffect } from 'react';
import Skeleton from './components/skeleton/skeleton';

function ProductDetails() {
  const location = useLocation();
  const { Product } = location.state || {};
  const { isLoadingProducts, Products } = useGetProductOfCategory({
    categoryId: Product?.category?._id,
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll
    });
  }, [Product]);

  if (isLoadingProducts) {
    return <div>Loading</div>;
  }
  return (
    <div className="mx-5">
      <ScrollToTop />

      <BreadCramp />
      {isLoadingProducts ? (
        <Skeleton />
      ) : (
        <>
          <ProductSection Product={Product} />
          <DeleverySection />
          <RatingProduct
            ProductRate={Product?.ratingsAverage}
            numberOfRating={Product?.ratingsQuantity}
          />

          <RelatedProductSection Products={Products?.data} />
        </>
      )}
    </div>
  );
}

export { ProductDetails };
