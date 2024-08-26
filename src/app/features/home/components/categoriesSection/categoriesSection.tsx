import React, { useRef } from 'react';
import { HorizontalList } from '../../../../shared/components';

function CategoriesSection({ Categories }: any) {
  return (
    <div className="flex w-full">
      <HorizontalList ListItems={Categories}>
        {Categories?.map((item: any, index: number) => (
          <div
            key={index}
            className={`m-2 flex w-[240px] flex-shrink-0 transform cursor-pointer items-center gap-3 rounded-lg ${index % 2 == 0 ? 'bg-[var(--fifth-Color)]' : 'bg-[var(--second-Color)]'}  p-2 text-sm font-medium text-gray-900 transition-transform hover:scale-105`}
            onClick={() => alert(item?._id)}
          >
            <img src={item?.image} className="h-[65px] w-[55px] rounded-xl" />

            <div className="flex flex-col justify-center">
              <h2 className="text-md font-bold">{item?.name}</h2>
              <p className="text-[10px]"> {item?.slug}</p>
            </div>
          </div>
        ))}
      </HorizontalList>
    </div>
  );
}

export default CategoriesSection;
