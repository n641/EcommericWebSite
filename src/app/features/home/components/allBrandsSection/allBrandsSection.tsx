import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function AllBrandsSection({ Brands }: any) {
  const navigation = useNavigate();
  return (
    <div className="mt-10 ">
      <h1 className="text-3xl font-semibold">All Brands</h1>
      <div className="flex flex-wrap  items-center gap-4 self-center mt-5 justify-center">
        {Brands?.map((item: any, index: number) => (
          // index <10 &&
          <div
            key={index}
            className="cursor-pointer border bg-white p-1 transition-all hover:scale-110 hover:border-[var(--main-Color)] rounded-xl"
            onClick={() => navigation(`/Home/products`, { state: { BrandId: item?._id } })}
          >
            <img
              src={item?.image}
              className="h-[60px] md:h-[100px] md:w-[100px] object-contain"
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );  
}

export default AllBrandsSection;
