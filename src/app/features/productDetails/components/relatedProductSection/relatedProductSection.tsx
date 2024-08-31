import { HorizontalList, ProductItem } from '../../../../shared/components';

function RelatedProductSection({ Products }: any) {
  return (
    <div>
      <div className="mb-10 flex w-full items-end justify-between">
        <h1 className="text-3xl font-semibold">Related Products</h1>
        <p className="sm:text-md font-mediam mb-1 cursor-pointer text-sm text-gray-400 hover:text-[var(--main-Color)] sm:mb-0">
          View More
        </p>
      </div>

      <HorizontalList>
        {Products?.map((item: any, index: number) => (
          <div key={index} className="min-w-[300px] py-5">
            <ProductItem item={item} />
          </div>
        ))}
      </HorizontalList>
    </div>
  );
}

export default RelatedProductSection;
