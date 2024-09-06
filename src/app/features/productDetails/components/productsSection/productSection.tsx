import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { HorizontalList } from '../../../../shared/components';
import { useNavigate } from 'react-router-dom';
import { useAddToCart } from '../../../../../auth/addToCart/useAddToCart';
import { useUpdateCartCount } from '../../../../../auth/updateCartCounter/useUpdateCartCount';

function ProductSection({ Product }: any) {
  const [ActiveImg, setActiveImg] = useState(Product?.images[0]);
  const [Counter, setCounter] = useState(1);
  const [ToCart, setToCart] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setActiveImg(Product?.images[0]);
  }, [Product]);

  const { AddToCart, isLoading } =
    useAddToCart({
      onErrorHandler: () => {},
      onSuccessHandler: () => {
        if (Counter > 1) {
          UpdateProductCartCount({
            productId: Product?.id,
            count: Counter,
          });
        } else {
          if (ToCart) {
            navigate('/Home/Cart');
          }else{
            navigate('/Home');

          }
        }
      },
    });

  const { UpdateProductCartCount, isLoadingUpdateCart } = useUpdateCartCount({
    onErrorHandler: () => {},
    onSuccessHandler: (data) => {
      console.log('upadtcounter', data);
      if (ToCart) {
        navigate('/Home/Cart');
      }else{
        navigate('/Home');
      }
    },
  });

  const AddToCART = () => {
    AddToCart({
      productId: Product?.id,
    });
  };

  const ScreenLoading = isLoading || isLoadingUpdateCart;

  return (
    <div className="m-5 flex flex-col gap-8 md:flex-row">
      {/* gallary */}
      <div className="grid gap-4 md:w-1/2">
        <div>
          <img
            className="h-[400px] w-full rounded-xl bg-white object-contain"
            src={ActiveImg}
            alt=""
          />
        </div>

        <HorizontalList>
          {Product?.images.map((image: string, index: number) => (
            <div
              key={index}
              onClick={() => setActiveImg(image)}
              className={`cursor-pointer rounded-xl ${
                ActiveImg === image ? 'border-2 border-[var(--main-Color)]' : ''
              } `}
            >
              <img
                className={`h-[100px] w-full rounded-xl bg-white object-cover`}
                src={image}
                alt=""
              />
            </div>
          ))}
        </HorizontalList>
      </div>

      {/* details */}
      <div className="flex flex-col gap-4 md:w-1/2">
        {/* rating */}
        <div className="flex gap-2">
          <div className="flex">
            <FaStar color="yellow" />
            <FaStar color="yellow" />
            <FaStar color="yellow" />
            <FaStar color="yellow" />
            <FaStar color="yellow" />
          </div>
          <p className="text-[12px] text-gray-500">
            ({Product?.ratingsQuantity})
          </p>
        </div>

        {/* title and description */}
        <h1 className="w-full text-3xl font-bold sm:w-2/3">{Product?.title}</h1>
        <h1 className="text-md text-gray-500">{Product?.description}</h1>

        <hr />

        {/* price */}
        <div>
          <div className="flex gap-5">
            <p className="text-2xl font-bold text-gray-400 line-through">
              {Product?.price + 20}$
            </p>
            <p className="text-2xl font-bold text-[var(--main-Color)]">
              {Product?.price}$
            </p>
          </div>
          <h1 className="mt-2 w-full text-sm text-gray-500 sm:w-2/3">
            only Single Payment
          </h1>
        </div>

        <hr />

        {/* quantity */}
        <div>
          <div className="flex items-center gap-3">
            {/* quantity counter */}
            <div className="flex items-center gap-6 rounded-lg bg-gray-300 p-4 py-1">
              <button
                className={`text-2xl ${Counter === 0 && 'text-gray-400'} `}
                onClick={() => {
                  if (Counter > 1) setCounter(Counter - 1);
                }}
              >
                -
              </button>
              <p className="text-xl font-semibold text-[var(--main-Color)]">
                {Counter}
              </p>
              <button
                className="text-2xl"
                onClick={() => setCounter(Counter + 1)}
              >
                +
              </button>
            </div>

            <p
              className={`font-bold text-[var(--main-Color)] ${Counter === 0 && 'text-gray-400'} text-lg`}
            >
              {Counter * Product?.price} $
            </p>
          </div>

          <p className="mt-3 text-[12px] text-gray-500">
            <span className="text-[var(--main-Color)]">
              {Product?.quantity}
            </span>{' '}
            in stock
          </p>
        </div>

        {/* buttons */}
        <div className="flex w-full flex-wrap items-center gap-3">
          <button
            className="w-full rounded-lg bg-black py-3.5 text-sm font-semibold text-white transition-all duration-100 hover:bg-[var(--main-Color)] md:w-1/3"
            onClick={() => {
              setToCart(true);
              AddToCART();
            }}
            disabled={ScreenLoading}
          >
            {ScreenLoading ? 'Loading...' : ' Buy Now'}
          </button>

          <button
            className="w-full truncate whitespace-nowrap rounded-lg border-2 border-black p-3 text-sm font-semibold text-black transition-all duration-100 hover:border-[var(--main-Color)] hover:bg-[var(--main-Color)] hover:text-white md:w-1/3"
            onClick={() => {
              AddToCART();
            }}
            disabled={ScreenLoading}
          >
            {ScreenLoading ? 'Loading...' : ' Add To Card'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductSection;
