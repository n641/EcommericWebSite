import { useState } from 'react';
import { MdDelete } from 'react-icons/md';

function ProductItem() {
  const [Counter, setCounter] = useState(1);
  return (
    <tr className="border-b bg-white text-center dark:border-gray-700 dark:bg-gray-800">
      <td scope="col" className="min-w-max px-6 py-4">
        <div className="flex items-center gap-4">
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="productImg"
            className="h-[140px] w-[130px] rounded-xl object-cover"
          />
          <div className='text-left'>
            <p className="text-[12px] font-medium text-gray-500">
              Category Name
            </p>
            <p className="text-md font-bold text-gray-500">Product Name</p>
          </div>
        </div>
      </td>

      <td scope="col" className="px-6 py-4 text-lg font-bold text-gray-500">
        $20.22
      </td>

      <td scope="col" className="px-6 py-4">
        {/* quantity counter */}
        <div className="mx-auto flex w-fit items-center justify-center gap-6 rounded-lg bg-gray-300 p-4 py-1">
          <button
            className={`text-2xl ${Counter === 1 && 'text-red-500'}`}
            onClick={() => {
              if (Counter > 1) setCounter(Counter - 1);
            }}
          >
            {Counter === 1 ? <MdDelete /> : '-'}
          </button>
          <p className="text-xl font-semibold text-[var(--main-Color)]">
            {Counter}
          </p>
          <button className="text-2xl" onClick={() => setCounter(Counter + 1)}>
            +
          </button>
        </div>
      </td>

      <td
        scope="col"
        className="px-6 py-4 text-xl font-bold text-[var(--fifth-Color)]"
      >
        ${Math.floor(Counter * 20.22)}
      </td>
    </tr>
  );
}

export default ProductItem;
