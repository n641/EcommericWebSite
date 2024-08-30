import { useEffect, useState } from 'react';
import { IoFilterSharp } from 'react-icons/io5';
import {
  BreadCramp,
  FilterSideBar,
  ProductItem,
} from '../../shared/components';
import { useGetAllProducts } from './hooks/useGetRecentlyProducts';
import SkeletonProducts from './components/skeletonProducts';

function Products() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { isLoadingProducts, Products } = useGetAllProducts({});
  const [FilterProducts, setFilterProducts] = useState(Products?.data);
  const [Search, setSearch]: any = useState(null);

  useEffect(() => {
    if (Search) {
      const Filter = Products?.data?.filter((product: any) =>
        product?.title
          ?.toLowerCase()
          ?.trim()
          ?.includes(Search?.toLowerCase()?.trim())
      );
      if (Filter) {
        setFilterProducts(Filter);
      } else {
        setFilterProducts(Products?.data);
      }
    } else {
      setFilterProducts(Products?.data);
    }
  }, [Search]);

  useEffect(() => {
    setFilterProducts(Products?.data);
  }, [Products?.data]);

 

  return (
    <div className="mx-5">
      <div className="flex gap-7">
        <div
          className="flex cursor-pointer items-center gap-2 rounded-lg p-1 hover:bg-gray-200"
          onClick={() => setOpenDrawer(!openDrawer)}
        >
          <IoFilterSharp size={20} />
          <h1 className="text-sm font-bold">Filter</h1>
        </div>

        <BreadCramp />
      </div>

      <div className="mt-4 flex w-full gap-5">
        <FilterSideBar openDrawer={openDrawer} />

        <div className="w-full">
          <input
            type="text"
            id="first_name"
            onInput={(e: any) => {
              setSearch(e.target.value);
            }}
            className="mt-4 w-full rounded-md border-0 bg-gray-200 p-2 py-1 text-[12px] text-gray-900 focus:border-[var(--main-Color)] focus:ring-[var(--main-Color)]"
            placeholder="Search"
          />

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
              {FilterProducts?.map((item: any, index: number) => (
                <ProductItem item={item} key={index} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export { Products };
