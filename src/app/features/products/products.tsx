import React, { useState } from 'react';
import {
  BreadCramp,
  FilterSideBar,
  ProductItem,
} from '../../shared/components';
import { useGetRecentlyProducts } from '../home/hooks/useGetRecentlyProducts';
import { IoFilterSharp } from 'react-icons/io5';
import { useGetAllProducts } from './hooks/useGetRecentlyProducts';

function Products() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { isLoadingProducts, Products } = useGetAllProducts({});

  return (
    <div className="mx-5 ">
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

        <div
          className={`mt-10 grid flex-1 items-center gap-y-5 self-center sm:gap-5 ${
            true
              ? 'sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6'
              : 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7'
          } `}
        >
          {Products?.data?.map((item: any, index: number) => (
            <ProductItem item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export { Products };
