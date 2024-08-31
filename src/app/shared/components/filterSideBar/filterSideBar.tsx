import { useState } from 'react';
import MultiRangeSlider, { ChangeResult } from 'multi-range-slider-react';
import { useGetAllBrands } from '../../../features/home/hooks/useGetAllBrands';
import { CheckBoxs } from '../checkBoxs/checkBoxs';
import { useGetAllCategories } from '../../../features/home/hooks/useGetAllCategory';

function FilterSideBar({ openDrawer }: any) {
  const [minValue, setMinValue] = useState(25);
  const [maxValue, setMaxValue] = useState(5000);
  const [SelectedBrands, setSelectedBrands]: any = useState([]);
  const [SelectedCategories, setSelectedCategories]: any = useState([]);
  const { isLoadingBrands, Brands } = useGetAllBrands({});
  const { isLoadingCategories, Categories } = useGetAllCategories({});

  const IsLoading = isLoadingBrands || isLoadingCategories;

  if(IsLoading) return <h1>Loading</h1> 

  const HandleBrands = (e: any, value: any) => {
    if (value?.target?.checked) {
      setSelectedBrands((prev: any) => [...prev, e]);
    } else {
      const brands = SelectedBrands.filter((brand: any) => brand !== e);
      setSelectedBrands(brands);
    }
  };

  const HandleCategories = (e: any, value: any) => {
    if (value?.target?.checked) {
      setSelectedCategories((prev: any) => [...prev, e]);
    } else {
      const category = SelectedCategories.filter((brand: any) => brand !== e);
      setSelectedCategories(category);
    }
  };
  // absolute left-0 top-[170px]

  return (
    <div
      className={`rounded-xl shadow-xl transition-all duration-300 ${
        openDrawer ? 'w-2/5 opacity-100' : 'w-0 opacity-0'
      } absolute left-0 top-[140px] z-10 overflow-hidden bg-[#f5f5f5] opacity-100 
        xl:w-1/5 xl:static`}
    >
      <div className="mt-5 w-full rounded-lg p-2">
        {/* price range */}
        <div>
          <h1 className="text-sm font-bold">
            Price {minValue}$ - {maxValue}$
          </h1>

          <MultiRangeSlider
            min={10}
            max={5000}
            step={5}
            ruler={false}
            label={false}
            minValue={minValue}
            maxValue={maxValue}
            style={{ border: 'none', boxShadow: 'none', padding: '15px 10px' }}
            barLeftColor="#E0EDF4"
            barInnerColor="#F65D6F"
            barRightColor="#E0EDF4"
            onInput={(e: ChangeResult) => {
              setMinValue(e.minValue);
              setMaxValue(e.maxValue);
            }}
          ></MultiRangeSlider>
        </div>
        <hr />

        <div className="mb-5">
          <h1 className="mb-2 mt-4 text-sm font-bold">Categories</h1>
          <CheckBoxs
            data={Categories?.data}
            setSelectedData={HandleCategories}
          />
        </div>

        <hr />

        <div>
          <h1 className="mb-2 mt-4 text-sm font-bold">Brands</h1>
          <CheckBoxs data={Brands?.data} setSelectedData={HandleBrands} />
        </div>
      </div>
    </div>
  );
}

export { FilterSideBar };
