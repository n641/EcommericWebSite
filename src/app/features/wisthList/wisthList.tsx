import { BreadCramp, ProductItem } from '../../shared/components';
import EmptyProduct from '../products/components/emptyProduct';
import SkeletonProducts from '../products/components/skeletonProducts';
import { useGetWishList } from './hooks/useGetWishlist';

function WisthList() {
  const { isLoadingProducts, Products, refetchProducts } = useGetWishList({
    onErrorHandler: (error) => {
      console.log(error);
    },
    onSuccessHandler: (data) => {
      console.log(data);
    },
  });

  return (
    <div className="mx-10">
      <BreadCramp />

      <div className="w-full">
        <input
          type="text"
          id="first_name"
          onInput={() => {
            // setSearch(e.target.value);
          }}
          className="mt-4 w-full rounded-md border-0 bg-gray-200 p-2 py-1 text-[12px] text-gray-900 focus:border-[var(--main-Color)] focus:ring-[var(--main-Color)]"
          placeholder="Search"
        />

        {Products?.data?.length === 0 && <EmptyProduct />}

        {isLoadingProducts ? (
          <SkeletonProducts />
        ) : (
          <div
            className={`mt-5 grid flex-1 items-center gap-y-5 self-center sm:gap-5 ${
              true
                ? 'sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6'
                : 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7'
            } `}
          >
            {Products?.data?.map((item: any, index: number) => (
              <ProductItem
                item={item}
                key={index}
                isLover={true}
                refetchProducts={refetchProducts}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export { WisthList };
