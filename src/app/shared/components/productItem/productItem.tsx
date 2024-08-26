import image from '../../../../assets/png/cover.jpg';
import { FaStar } from 'react-icons/fa6';
import { CiDollar } from 'react-icons/ci';
import { FaShippingFast } from 'react-icons/fa';
import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';

function ProductItem({ item }: any) {
  const [saveItem, setsaveItem] = useState(false);
  return (
    <div className="border-1 group relative rounded-xl border border-gray-200 p-2 shadow-lg transition-all hover:scale-110">
      <img src={image} alt="" className="h-[180px] w-full rounded-md" />

      <div className='absolute top-5 right-5' onClick={() => setsaveItem(!saveItem)}>
      {saveItem ? <FaHeart size={20} color='red' /> : <CiHeart size={25} />}
      </div>

      <div className="mt-2 flex flex-col gap-2">
        <div className="flex w-full justify-between">
          <h1>name</h1>

          <div className="flex items-center gap-2">
            <FaStar color="#FFC107" width={10} height={10} />
            <p className="text-[12px] text-gray-500">4.9</p>
          </div>
        </div>

        <div className="flex w-full justify-between">
          <div className="flex items-center gap-1">
            <CiDollar />
            <p className="mr-1 text-[12px] font-bold text-gray-500 line-through">
              $30
            </p>
            <p className="text-[12px] font-bold text-[var(--main-Color)]">
              $10
            </p>
          </div>

          <div className="flex items-center gap-1">
            <p className="text-[12px] font-semibold text-gray-500">4-8 days</p>
            <FaShippingFast />
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button className="w-full rounded-md bg-black py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-white group-hover:w-[70%] group-hover:animate-bounce group-hover:bg-[var(--main-Color)]">
            Buy Now
          </button>

          <button className="w-full truncate whitespace-nowrap rounded-md border border-black p-1.5 text-sm font-semibold text-black transition-all duration-300 group-hover:w-[30%]">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export { ProductItem };
