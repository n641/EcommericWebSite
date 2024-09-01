import { FaCheck } from 'react-icons/fa6';
import { FaAddressCard } from 'react-icons/fa';
import { MdPayment } from 'react-icons/md';
import { IoShieldCheckmarkOutline } from 'react-icons/io5';

const Steps = [
  {
    step: 1,
    title: 'Cart',
    icon: <FaCheck color="var(--fifth-Color)"/>,
    in_Active_icon: <FaCheck color="gray"/>,
  },
  // {
  //   step: 2,
  //   title: 'Address',
  //   icon: <FaAddressCard color="var(--fifth-Color)"/>,
  //   in_Active_icon: <FaAddressCard color="gray"/>,
  // },
  {
    step: 2,

    title: 'Payment',
    icon: <MdPayment color="var(--fifth-Color)"/>,
    in_Active_icon: <MdPayment color="gray"/>,
  },
  {
    step: 3,
    title: 'Confirmation',
    icon: <IoShieldCheckmarkOutline color="var(--fifth-Color)"/>,
    in_Active_icon: <IoShieldCheckmarkOutline color="gray"/>,
  },
];

function Stepper({ Progress }: any) {
  return (
    <ol className="flex w-full items-center ">
      {
        Steps.map((item: any, index: number) => {
            const IsActive = Progress > item.step
            return (
            <li key={index} className={`flex  items-center text-[var(--fifth-Color)] 
            ${index <2 &&`w-full after:inline-block after:h-1 after:w-full after:border-4 after:border-b 
            ${IsActive ? "after:border-[var(--fifth-Color)]" : "after:border-gray-100"} after:content-['']`}`}>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-lg  lg:h-10 lg:w-10">
              {IsActive? item.icon : item.in_Active_icon}
            </div>
          </li> 
    
        )})
      }
    </ol>
  );
}

export default Stepper;
