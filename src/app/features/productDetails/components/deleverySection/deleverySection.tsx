import { TbTruckDelivery } from 'react-icons/tb';
import { GiRecycle } from 'react-icons/gi';
import { IoIosWarning } from "react-icons/io";
const RenderItem = ({ icon, title, subTitle }: any) => {
  return (
    <div className="flex items-center gap-3">
      <div className="rounded-lg bg-white p-2">{icon}</div>
      <div>
        <p className="text-md font-bold">{title}</p>
        <p className="text-[10px] font-semibold text-gray-400">{subTitle}</p>
      </div>
    </div>
  );
};

function DeleverySection() {
  return (
    <div className="my-8 flex flex-col justify-around gap-7 rounded-lg bg-gray-200 p-4 md:flex-row w-[97%] mx-auto py-7">
      <RenderItem
        icon={<TbTruckDelivery size={30} color="var(--main-Color)" />}
        title="Cash on delivery"
        subTitle="Enjoy our cash on delivery services"
      />
      <RenderItem
        icon={<GiRecycle size={30} color="var(--main-Color)" />}
        title="7 Days Returns"
        subTitle="Change of mind is applicable"
      />
      <RenderItem
        icon={<IoIosWarning size={30} color="var(--main-Color)" />}
        title="Warrantly Not Availabe"
        subTitle="we are sorry in ths products has no warrantly"
      />
    </div>
  );
}

export default DeleverySection;
