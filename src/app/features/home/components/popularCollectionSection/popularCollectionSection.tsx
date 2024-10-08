import { ProductItem } from '../../../../shared/components';

function PopularCollectionSection({Products}:any) {
  return (
    <div>

      <div className='w-full flex justify-between items-end '>
      <h1 className="text-3xl font-semibold">Recently Collection</h1>
      <p className=" mb-1 sm:mb-0 text-sm sm:text-md  font-mediam text-gray-400 hover:text-[var(--main-Color)] cursor-pointer">View More</p>
      </div>

      <div className="grid items-center gap-y-5 sm:gap-5
       sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7
        mt-10 self-center ">
        {Products?.map((item :any , index : number) => (
          <ProductItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default PopularCollectionSection;
