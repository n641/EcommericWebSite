import { useNavigate } from 'react-router-dom';
import { useAddToCart } from '../../../../../auth/addToCart/useAddToCart';
import { Spinner } from '../../../../shared/components';

const CategoryItem = ({ product }: any) => {
  const navigation = useNavigate();
  return (
    <div className="grid grid-cols-3 gap-2 rounded-xl bg-[var(--fifth-Color)] p-2">
      <img
        src={product?.imageCover}
        alt=""
        className="col-span-2 h-[200px] w-full rounded-xl bg-white object-contain"
      />

      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-2">
          {product?.images?.map(
            (img: string, index: number) =>
              index < 3 && (
                <img
                  key={index}
                  src={img}
                  alt=""
                  className="h-[70px] w-full rounded-xl bg-white object-contain"
                />
              )
          )}

          <div className="flex items-center justify-center rounded-xl bg-slate-100 object-cover">
            <h1 className="font-bold text-[var(--main-Color)]">40+</h1>
          </div>
        </div>

        <button className="rounded-md border-2 border-black p-2 text-[8px] font-medium text-black xl:text-[70%] hover:bg-[var(--main-Color)] hover:text-white hover:border-[var(--main-Color)]"
        onClick={() =>
          navigation('/EcommericWebSite/productDetails', {
            state: { Product: product },
          })
        }
        >
          View Products
        </button>
      </div>
    </div>
  );
};
function RecommendedProductSection({ Products }: any) {
  const navigation = useNavigate();
  const { AddToCart, isLoading } =
    useAddToCart({
      onErrorHandler: () => {},
      onSuccessHandler: () => {
        // navigate('/EcommericWebSite/Cart');
      },
    });

  const AddToCART = (item: any) => {
    AddToCart({
      productId: item?.id,
    });
  };
  return (
    <div className="my-7 grid items-center gap-5 lg:grid-cols-3">
      <div className="grid items-center justify-center gap-4 rounded-xl bg-[var(--second-Color)] p-4 align-middle sm:grid-cols-2 lg:col-span-2">
        <img
          src={Products?.[0]?.imageCover}
          alt=""
          className="h-[400px] w-[100%] rounded-xl bg-white object-contain"
        />

        <div className="flex flex-1 flex-col justify-between">
          <h1 className="text-2xl font-bold">
            Beatuful And Original Product Designs - Smashing Magazine
          </h1>

          <p className="my-6 text-[12px] text-gray-500">
            {Products?.[0]?.description}
          </p>

          <div className="flex flex-wrap gap-4 text-lg">
            <h1 className="font-bold text-gray-500 line-through">
              ${Products?.[0]?.price + 30}
            </h1>
            <h1 className="font-bold text-[var(--main-Color)]">
              ${Products?.[0]?.price}
            </h1>
          </div>

          <div>
            <div className="mt-10 flex w-full justify-between">
              <h1 className="text-sm font-bold text-[var(--main-Color)]">
                Sold{' '}
                <span className="text-[var(--main-Color)]">
                  {Products?.[0]?.sold}
                </span>
              </h1>
              <h1 className="text-sm font-medium text-gray-400">
                Available{' '}
                <span className="text-[var(--main-Color)]">
                  {Products?.[0]?.quantity}
                </span>
              </h1>
            </div>

            <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
              <div className="h-2.5 w-[45%] rounded-full bg-[var(--main-Color)]"></div>
            </div>

            <div className="mt-10 flex w-full gap-3 lg:flex-row">
              <button
                className="w-[45%] truncate whitespace-nowrap rounded-lg bg-black py-3.5 text-sm font-semibold text-white hover:bg-[var(--main-Color)] flex justify-center items-center"
                onClick={() => AddToCART(Products?.[0])}
              >
                {isLoading ? <Spinner /> : 'Buy Now'}
              </button>

              <button
                className="w-[45%] truncate whitespace-nowrap rounded-lg border-2 border-black p-3 text-sm font-semibold text-black hover:border-[var(--main-Color)] hover:bg-[var(--main-Color)] hover:text-white"
                onClick={() =>
                  navigation('/EcommericWebSite/productDetails', {
                    state: { Product: Products?.[0] },
                  })
                }
              >
                Explor More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <CategoryItem product={Products?.[1]} />
        <CategoryItem product={Products?.[2]} />
      </div>
    </div>
  );
}

export default RecommendedProductSection;
