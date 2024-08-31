import { useState } from 'react';
import { CiDollar, CiHeart } from 'react-icons/ci';
import { FaHeart, FaShippingFast } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

function ProductItem({ item }: any) {
  const [saveItem, setsaveItem] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="border-1 group relative mx-auto flex w-[80%] flex-col self-center rounded-xl border border-gray-200 p-2 shadow-lg transition-all hover:scale-110 sm:mx-0 sm:w-[100%]">
      <img
        src={item?.imageCover}
        alt=""
        className="h-[200px] w-full rounded-md bg-white object-contain"
      />

      <div
        className="absolute right-5 top-5 cursor-pointer"
        onClick={() => setsaveItem(!saveItem)}
      >
        {saveItem ? <FaHeart size={20} color="red" /> : <CiHeart size={25} />}
      </div>

      <div className="mt-2 flex flex-col gap-2">
        <div className="flex w-full justify-between">
          <h1>{item?.title?.split(' ').splice(0, 2).join(' ')}</h1>

          <div className="flex items-center gap-2">
            <FaStar color="#FFC107" width={10} height={10} />
            <p className="text-[12px] text-gray-500">{item?.ratingsAverage}</p>
          </div>
        </div>

        <div className="flex w-full justify-between gap-x-10 sm:gap-x-0">
          <div className="flex items-center gap-1">
            <CiDollar />
            <p className="mr-1 text-[12px] font-bold text-gray-500 line-through">
              ${item?.price + 20}
            </p>
            <p className="text-[12px] font-bold text-[var(--main-Color)]">
              ${item?.price}
            </p>
          </div>

          <div className="flex items-center gap-1">
            <p className="text-[12px] font-semibold text-gray-500">4-8 days</p>
            <FaShippingFast />
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            className="w-full rounded-md bg-black py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-white group-hover:w-[70%] group-hover:animate-bounce group-hover:bg-[var(--main-Color)]"
            onClick={() =>
              navigate('/EcommericWebSite/products/productDetails', {
                state: { Product: item },
              })
            }
          >
            Buy Now
          </button>

          <button
            className="w-full truncate whitespace-nowrap rounded-md border border-black p-1.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-gray-400 group-hover:w-[30%]"
            onClick={() =>
              navigate('/EcommericWebSite/products/productDetails', {
                state: { Product: item },
              })
            }
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export { ProductItem };
