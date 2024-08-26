import React from 'react';
import image from '../../../../../assets/png/cover.jpg';

const CategoryItem = () => {
  return (
    <div className="grid grid-cols-3 gap-2 rounded-xl bg-[var(--fifth-Color)] p-2">
      <img
        src={image}
        alt=""
        className="col-span-2 h-[200px] w-full rounded-xl object-cover"
      />

      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-2">
          <img
            src={image}
            alt=""
            className="h-[70px] w-full rounded-xl object-cover"
          />
          <img
            src={image}
            alt=""
            className="h-[70px] w-full rounded-xl object-cover"
          />
          <img
            src={image}
            alt=""
            className="h-[70px] w-full rounded-xl object-cover"
          />
          <div className="flex items-center justify-center rounded-xl bg-slate-100 object-cover">
            <h1 className='text-[var(--main-Color)] font-bold'>40+</h1>
          </div>
        </div>

        <button className="rounded-md border-2 border-black p-2 text-[70%] font-medium text-black">
          View Products
        </button>
      </div>
    </div>
  );
};
function RecommendedProductSection() {
  return (
    <div className="my-7 grid items-center gap-5 lg:grid-cols-3">
      <div className="flex items-center gap-4 rounded-xl bg-[var(--second-Color)] p-4 lg:col-span-2">
        <img src={image} alt="" className="h-[400px] w-[40%] rounded-xl" />

        <div className="flex flex-1 flex-col justify-between md:w-3/5">
          <h1 className="text-2xl font-bold">
            Beatuful And Original Product Designs - Smashing Magazine
          </h1>

          <p className="my-6 text-[12px] text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nostrum
            facilis modi neque vel odit! Facere eligendi voluptatem dolor. Nobis
            distinctio illo.
          </p>

          <div className="flex flex-wrap gap-4 text-lg">
            <h1 className="font-bold text-gray-500 line-through">$140.99</h1>
            <h1 className="font-bold text-[var(--main-Color)]">$140.99</h1>
          </div>

          <div>
            <div className="mt-10 flex w-full justify-between">
              <h1 className="text-sm font-bold text-[var(--main-Color)]">
                Sold <span className="text-[var(--main-Color)]">110</span>
              </h1>
              <h1 className="text-sm font-medium text-gray-400">
                Available{' '}
                <span className="text-[var(--main-Color)]">20</span>
              </h1>
            </div>

            <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
              <div className="h-2.5 w-[45%] rounded-full bg-[var(--main-Color)]"></div>
            </div>


            <div className="flex  lg:flex-row mt-10 w-full gap-3">
              <button className="w-[45%] rounded-lg bg-black py-3.5 text-sm font-semibold text-white">
                Buy Now
              </button>

              <button className="w-[45%] rounded-lg border-2 border-black p-3 text-sm font-semibold text-black">
                Explor More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <CategoryItem />
        <CategoryItem />
      </div>
    </div>
  );
}

export default RecommendedProductSection;
