import { useLocation } from 'react-router-dom';
import { BreadCramp } from '../../shared/components';
import DeleverySection from './components/deleverySection/deleverySection';
import ProductSection from './components/productsSection/productSection';
import RelatedProductSection from './components/relatedProductSection/relatedProductSection';
import { useGetProductOfCategory } from './hooks/useGetAllCategory';
import RatingProduct from './components/ratingProduct/ratingProduct';

function ProductDetails() {
  const location = useLocation();
  const { Product } = location.state || {};
  const { isLoadingProducts, Products } = useGetProductOfCategory({
    categoryId: Product?.category?._id,
  });

  console.log(Product);

  if (isLoadingProducts) {
    return <div>Loading</div>;
  }
  return (
    <div className="mx-5">
      <BreadCramp />

      <ProductSection Product={Product} />
      <DeleverySection />
      <RatingProduct ProductRate={Product?.ratingsAverage} numberOfRating={Product?.ratingsQuantity}/>

      <RelatedProductSection Products={Products?.data} />
    </div>
  );
}

export { ProductDetails };
