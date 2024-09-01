import { useState } from 'react';
import logo from '../../../assets/logos/LightLogo.png';
import ProductItem from './components/productItem';
import { useNavigate } from 'react-router-dom';
function Cart() {
  const Navigate = useNavigate();

  return (
    <div className="mx-5 items-start gap-5 xl:grid xl:grid-cols-5">
      <div className="xl:col-span-4">
        <h1 className="mt-5 text-xl font-bold">Shopping Cart</h1>
        <h2 className="mb-7 text-sm text-gray-500">2 items in your bag</h2>

        {/* cart table */}
        <div className="relative overflow-x-auto rounded-2xl">
          <table className="w-full overflow-x-auto rounded-2xl text-sm text-gray-500 dark:text-gray-400">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr className="text-center">
                <th scope="col" className="min-w-[350px] px-6 py-3">
                  Product
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Total Price
                </th>
              </tr>
            </thead>

            <tbody>
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-5 flex flex-col rounded-xl bg-white p-4 shadow-lg xl:col-span-1 xl:mt-24">
        <div className="flex flex-grow items-center gap-3">
          <img src={logo} alt="logo" className="w-[60px]" />
          <h1>Ordar Summary</h1>
        </div>

        <div className="mt-3 rounded-xl bg-[var(--fifth-Color)] p-4 shadow-lg">
          <h1 className="text-md font-semibold text-black">Cart Total</h1>

          <div className="mt-5 flex items-center justify-between">
            <p className="text-[12px] text-black">Cart SubTotal</p>
            <p className="text-[11px] text-black">$20</p>
          </div>
          <div className="mt-1 flex items-center justify-between">
            <p className="text-[12px] text-black">Fee's</p>
            <p className="text-[11px] text-black">$2</p>
          </div>
          <div className="mt-1 flex items-center justify-between">
            <p className="text-[12px] text-black">Discount</p>
            <p className="text-[10px] text-white">-$0</p>
          </div>
          <div className="mt-1 flex items-center justify-between">
            <p className="text-[14px] text-black">Total</p>
            <p className="text-md font-bold text-black">$22</p>
          </div>

          <button
            className="mt-4 w-full rounded-xl bg-white py-1.5 font-bold text-black"
            onClick={() => Navigate('/EcommericWebSite/payment')}
          >
            Payment
          </button>
        </div>
      </div>
    </div>
  );
}

export { Cart };
