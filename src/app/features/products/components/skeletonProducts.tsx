import React from 'react';
import { SkeletonProduct } from '../../../shared/components';

function SkeletonProducts() {
  return (
    <div className="flex flex-wrap gap-5 justify-center mt-10">
      {[...Array(8)].map((_, index) => (
        <SkeletonProduct key={index} />
      ))}
    </div>
  );
}

export default SkeletonProducts;
