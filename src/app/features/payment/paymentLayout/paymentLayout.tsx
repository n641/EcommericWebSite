import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Payment } from '../payment/payment';
import { SuccessPayment } from '../successPayment/successPayment';
import ProductItem from './components/productItem/productItem';
import Stepper from './components/stepper';
import { ScrollToTop, Spinner } from '../../../shared/components';
import { usePostCashPayment } from '../payment/hooks/usePostCashPayment';
import { usePostPayCreadit } from '../payment/hooks/usePostPayCredit';

function PaymentLayout() {
  const location = useLocation();
  const navigation = useNavigate();

  const [Progress, setProgress] = useState(2);

  const [ChoosenAddress, setChoosenAddress]: any = useState(null);
  const [ChoosePaymentOption, setChoosePaymentOption] = useState(1);

  const { cartInfo } = location.state || {};
  const { PayCash, isLoading } =
    usePostCashPayment({
      onErrorHandler: () => {},
      onSuccessHandler: () => {
        navigation('/Home');
      },
    });

  const {
    PayCredit,
    isLoadingPayCredit,
  } = usePostPayCreadit({
    onErrorHandler: () => {},
    onSuccessHandler: (data) => {
      window.location.href = data?.session?.url;
      // console.warn("data" , data);
    },
  });

  const SubmitPayment = () => {
    if (ChoosenAddress) {
      const payLoad = {
        cartId: cartInfo?.cartId,
        shippingAddress: {
          details: ChoosenAddress?.details, 
          phone: ChoosenAddress?.phone,
          city: ChoosenAddress?.city,
        },
      };
      if (ChoosePaymentOption === 1) {
        PayCredit(payLoad);
      } else {
        PayCash(payLoad);
      }
      console.warn(payLoad);
    }
  };

  return (
    <div className="mx-5 grid-cols-5 gap-5 xl:grid">
      <ScrollToTop />
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
                ChoosePaymentOption={ChoosePaymentOption}
                setChoosePaymentOption={setChoosePaymentOption}
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
            {cartInfo?.numOfCartItems} items in your bags
          </h1>
        </div>

        <hr className="my-4 2xl:my-9" />

        <div className="flex max-h-[350px] flex-wrap gap-5 overflow-auto p-3 2xl:flex-row">
          {cartInfo?.data?.products?.map((item: any, index: number) => {
            return <ProductItem key={index} item={item} />;
          })}
        </div>

        <div className="rounded-xl p-4">
          <h1 className="text-md font-semibold text-black">Cart Total</h1>

          <div className="mt-5 flex items-center justify-between">
            <p className="text-[12px] text-gray-500">Cart SubTotal</p>
            <p className="text-[11px] text-black">
              ${cartInfo?.data?.totalCartPrice - 10}
            </p>
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
            <p className="text-md font-bold text-black">
              ${cartInfo?.data?.totalCartPrice}
            </p>
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
          disabled={isLoading || !ChoosenAddress?.details || isLoadingPayCredit}
          className="mt-4 flex w-full justify-center gap-2 rounded-xl bg-black py-1.5 text-center font-bold text-white hover:opacity-75 disabled:opacity-25 xl:bg-[var(--fifth-Color)] xl:text-black"
          onClick={SubmitPayment}
        >
          {(isLoading ||isLoadingPayCredit) && <Spinner />}
          Payment ${cartInfo?.data?.totalCartPrice}
        </button>
      </div>
    </div>
  );
}

export default PaymentLayout;
