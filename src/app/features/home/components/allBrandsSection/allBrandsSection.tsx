import { useNavigate } from 'react-router-dom';

function AllBrandsSection({ Brands }: any) {
  const navigation = useNavigate();
  return (
    <div className="mt-10">
      <h1 className="text-3xl font-semibold">All Brands</h1>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-4 self-center">
        {Brands?.map((item: any, index: number) => (
          // index <10 &&
          <div
            key={index}
            className="cursor-pointer rounded-xl border bg-white p-1 transition-all hover:scale-110 hover:border-[var(--main-Color)]"
            onClick={() =>
              navigation(`/EcommericWebSite/products`, { state: { BrandId: item?._id } })
            }
          >
            <img
              src={item?.image}
              className="h-[60px] object-contain md:h-[100px] md:w-[100px]"
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllBrandsSection;
