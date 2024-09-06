import React, { useEffect, useState } from 'react';
import { BreadCramp } from '../../shared/components';
import SkeletonProducts from '../products/components/skeletonProducts';
import { useGetOrders } from './hooks/useGetOrders';
import { useSelector } from 'react-redux';
import { RootState } from '../../shared/redux/store';
import { jwtDecode } from 'jwt-decode';
import ProductItem from '../payment/paymentLayout/components/productItem/productItem';
import Product from './components/product';

function Orders() {
  const [UserId, setUserId]: any = useState(null);
  const Token = useSelector((state: RootState) => state.user.userToken);
  useEffect(() => {
    console.log('Token:', Token); // Log token to verify structure
    if (Token) {
      const decoded: any = jwtDecode(Token);
      setUserId(decoded?.id);
    }
  }, [Token]);

  console.log(UserId);

  const { isLoadingProducts, Products, refetchProducts } = useGetOrders({
    userId: UserId,
    enabled: UserId != null ? true : false,
    onErrorHandler: (error) => {
      console.log(error);
    },
    onSuccessHandler: (data) => {
      console.log(data);
    },
  });

  console.log(Products);

  return (
    <div className="mx-10">
      <BreadCramp />

      <div className="w-full">
            {isLoadingProducts ? (
          <SkeletonProducts />
        ) : (
          <div className="flex flex-col mt-4">
            {Products?.map((item: any, index: number) => {
              return <Product key={index} item={item} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export { Orders };
