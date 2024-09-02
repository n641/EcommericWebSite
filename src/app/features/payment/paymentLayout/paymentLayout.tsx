import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Outlet, useNavigate } from 'react-router-dom';
import { Payment } from '../payment/payment';
import { SuccessPayment } from '../successPayment/successPayment';
import ProductItem from './components/productItem/productItem';
import Stepper from './components/stepper';

function PaymentLayout() {
  const [Progress, setProgress] = useState(2);
  const [ChoosenAddress, setChoosenAddress] = useState(1);
  const navigation = useNavigate();
  return (
    <div className="mx-5 grid-cols-5 gap-5 xl:grid">
      {/* ÷screen */}
      <div className="col-span-4">
        <div>
          {/* Stepper and back naviagtion */}
          <div className="flex items-center gap-5">
            <div
              className="cursor-pointer"
              onClick={() => {
                if (Progress === 2) {
                  navigation('/EcommericWebSite/cart');
                } else if (Progress > 1) {
                  setProgress(Progress - 1);
                }
              }}
            >
              <FaArrowLeft />
            </div>

            <Stepper Progress={Progress} />
          </div>

          {/* screens */}
          <div className="my-5 p-5">
            {Progress === 2 ? (
              <Payment
                setChoosenAddress={setChoosenAddress}
                ChoosenAddress={ChoosenAddress}
                setProgress={setProgress}
              />
            ) : Progress === 4 ? (
              <SuccessPayment />
            ) : (
              <Outlet />
            )}
          </div>
        </div>
      </div>

      {/* side */}
      <div className="col-span-1">
        <div className="mx-3 2xl:mx-0 2xl:text-end">
          <h1 className="text-3xl font-bold 2xl:text-lg">Summary</h1>
          <h1 className="text-sm font-bold text-gray-400">
            2 items in your bags
          </h1>
        </div>

        <hr className="my-4 2xl:my-9" />

        <div className="flex max-h-[350px] flex-wrap gap-5 overflow-auto p-3 2xl:flex-row">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>

        <div className="rounded-xl p-4">
          <h1 className="text-md font-semibold text-black">Cart Total</h1>

          <div className="mt-5 flex items-center justify-between">
            <p className="text-[12px] text-gray-500">Cart SubTotal</p>
            <p className="text-[11px] text-black">$20</p>
          </div>
          <div className="mt-1 flex items-center justify-between">
            <p className="text-[12px] text-gray-500">Fee's</p>
            <p className="text-[11px] text-black">$2</p>
          </div>
          <div className="mt-1 flex items-center justify-between">
            <p className="text-[12px] text-gray-500">Discount</p>
            <p className="text-[10px] text-green-400">-$0</p>
          </div>
          <div className="mt-1 flex items-center justify-between">
            <p className="text-[14px] text-black">Total</p>
            <p className="text-md font-bold text-black">$22</p>
          </div>
        </div>

        <hr className="mb-4 2xl:mb-4" />

        <div>
          <h1 className="text-md font-semibold text-black">
            Shippment Address
          </h1>
          <p className="my-3 text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            praesentium repudiandae explicabo iure natus.{' '}
          </p>
        </div>

        <button
          className="mt-4 w-full rounded-xl bg-black py-1.5 font-bold text-white hover:opacity-75 xl:bg-[var(--fifth-Color)] xl:text-black"
          onClick={() => setProgress(3)}
        >
          Payment $120
        </button>
      </div>
    </div>
  );
}

export default PaymentLayout;
