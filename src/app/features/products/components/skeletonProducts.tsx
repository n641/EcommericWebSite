import { SkeletonProduct } from '../../../shared/components';

function SkeletonProducts() {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-5">
      {[...Array(8)].map((_, index) => (
        <SkeletonProduct key={index} />
      ))}
    </div>
  );
}

export default SkeletonProducts;
