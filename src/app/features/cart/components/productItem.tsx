import { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { Spinner } from '../../../shared/components';

function ProductItem({
  item,
  isLoadingUpdateCart,
  UpdateProductCartCount,
}: any) {
  console.log(item?._id);
  return (
    <tr className="border-b bg-white text-center dark:border-gray-700 dark:bg-gray-800">
      <td scope="col" className="min-w-max px-6 py-4">
        <div className="flex items-center gap-4">
          <img
            src={item?.product?.imageCover}
            alt="productImg"
            className="h-[140px] w-[130px] rounded-xl object-cover"
          />
          <div className="text-left">
            <p className="text-[12px] font-medium text-gray-500">
              {item?.product?.category?.name}
            </p>
            <p className="text-md font-bold text-gray-500">
              {item?.product?.title}
            </p>
          </div>
        </div>
      </td>

      <td scope="col" className="px-6 py-4 text-lg font-bold text-gray-500">
        ${item?.price}
      </td>

      <td scope="col" className="px-6 py-4">
        {/* quantity counter */}
        <div className="mx-auto flex w-fit items-center justify-center gap-6 rounded-lg bg-gray-300 p-4 py-1">
          <button
            disabled={isLoadingUpdateCart}
            className={`text-2xl ${item?.count === 1 && 'text-red-500'} disabled:text-gray-100`}
            onClick={() => {
              UpdateProductCartCount({
                count: item?.count - 1,
                productId: item?.product?._id,
              });
            }}
          >
            {isLoadingUpdateCart ? (
              <Spinner />
            ) : item?.count === 1 ? (
              <MdDelete />
            ) : (
              '-'
            )}
          </button>
          <p className="text-xl font-semibold text-[var(--main-Color)]">
            {item?.count}
          </p>
          <button
            disabled={isLoadingUpdateCart}
            className="text-2xl disabled:text-gray-100"
            onClick={() =>
              UpdateProductCartCount({
                count: item?.count + 1,
                productId: item?.product?._id,
              })
            }
          >
            {isLoadingUpdateCart ? <Spinner /> : ' +'}
          </button>
        </div>
      </td>

      <td
        scope="col"
        className="px-6 py-4 text-xl font-bold text-[var(--fifth-Color)]"
      >
        ${item?.price * item?.count}
      </td>
    </tr>
  );
}

export default ProductItem;
