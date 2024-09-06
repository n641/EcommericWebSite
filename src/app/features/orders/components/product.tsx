import  { useState } from 'react';
import ProductItem from '../../payment/paymentLayout/components/productItem/productItem';

function Product({ item }: any) {
  const [ShowMore, setShowMore] = useState(false);

  return (
    <div onClick={() => setShowMore(!ShowMore)} className="cursor-pointer bg-gray-300 my-5 rounded-xl py-3 px-5">
      <h1 className={`${item?.isPaid ? 'text-green-500' : 'text-red-500 bg-gray-300  '} `}>
        Order #{item?.id}
      </h1>
      {ShowMore && (
        <div className={`flex flex-col items-centers ml-5 transition-all h-0 duration-300 ${ShowMore && 'h-auto'} `}>
            <h1>Paid : {item?.isPaid ? "Yes" : "No"}</h1>
            <h1>Shipped : {item?.isPaid ? "Yes" : "No"}</h1>
            <h1>Total Price : {item?.totalOrderPrice}$</h1>
          <div className="flex flex-wrap ">
            {item?.cartItems?.map((item: any, index: number) => (
              <ProductItem
                item={item}
                key={index}
                isLover={true}
                className="m-3 max-w-xs flex-col sm:flex-row"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
