import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/logos/LightLogo.png';
import ProductItem from './components/productItem';
import { ScrollToTop } from '../../shared/components';
import { useGetCart } from '../../../auth/getCartData/useGetCart';
import { useEffect, useState } from 'react';
import { useUpdateCartCount } from '../../../auth/updateCartCounter/useUpdateCartCount';
import { useclearCart } from '../../../auth/clearCart/useClearCart';
import EmptyCart from './components/emptyCart';
import Skeleton from './components/skeleton';

function Cart() {
  const Navigate = useNavigate();

  const {
    isLoadingCartData,
    CartData,
  } = useGetCart({});

  const [Products, setProducts] = useState(CartData);

  useEffect(() => {
    setProducts(CartData);
  }, [CartData]);

  const { UpdateProductCartCount, isLoadingUpdateCart } = useUpdateCartCount({
    onErrorHandler: () => {},
    onSuccessHandler: (data) => {
      setProducts(data?.data);
      Navigate('/EcommericWebSite/Cart');
    },
  });

  const { clearProductsCart, isLoadingClearCart } = useclearCart({
    onErrorHandler: () => {},
    onSuccessHandler: () => {
      setProducts([]);
    },
  });
  // const isLoading =
  //   isLoadingCartData || isLoadingUpdateCart || isLoadingClearCart;

  return (
    <div className="mx-5 items-start gap-5 xl:grid xl:grid-cols-5">
      <ScrollToTop />

      <div className="xl:col-span-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="mt-5 text-xl font-bold">Shopping Cart</h1>
            <h2 className="mb-7 text-sm text-gray-500">
              {Products?.numOfCartItems} items in your bag
            </h2>
          </div>

          <div
            className="flex cursor-pointer items-center gap-3 hover:text-red-500"
            onClick={() => clearProductsCart()}
          >
            <h2 className="text-sm text-gray-500 hover:text-red-500">
              Clear Cart
            </h2>
          </div>
        </div>

        {/* cart table */}
        {Products?.data?.products?.length === 0 ? (
          <EmptyCart />
        ) : (
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
                {isLoadingCartData || isLoadingClearCart ? (
                  <div className="mt-10 flex w-full flex-col items-center justify-center">
                    <Skeleton />
                  </div>
                ) : (
                  Products?.data?.products?.map((item: any) => (
                    <ProductItem
                      key={item._id}
                      item={item}
                      UpdateProductCartCount={UpdateProductCartCount}
                      isLoadingUpdateCart={isLoadingUpdateCart}
                    />
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
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
            <p className="text-[11px] text-black">
              ${CartData?.data?.totalCartPrice - 10}
            </p>
          </div>
          <div className="mt-1 flex items-center justify-between">
            <p className="text-[12px] text-black">Fee's</p>
            <p className="text-[11px] text-black">$10</p>
          </div>
          <div className="mt-1 flex items-center justify-between">
            <p className="text-[12px] text-black">Discount</p>
            <p className="text-[10px] text-white">-$0</p>
          </div>
          <div className="mt-1 flex items-center justify-between">
            <p className="text-[14px] text-black">Total</p>
            <p className="text-md font-bold text-black">
              ${CartData?.data?.totalCartPrice}
            </p>
          </div>

          <button
            className="mt-4 w-full rounded-xl bg-white py-1.5 font-bold text-black"
            onClick={() =>
              Navigate('/EcommericWebSite/payment', {
                state: {
                  cartInfo: CartData,
                },
              })
            }
          >
            Payment
          </button>
        </div>
      </div>
    </div>
  );
}

export { Cart };
