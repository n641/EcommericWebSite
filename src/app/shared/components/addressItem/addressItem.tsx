import { IoIosRadioButtonOff, IoIosRadioButtonOn } from 'react-icons/io';
function AddressItem({ setChoosenAddress, ChoosenAddress, item }: any) {
  return (
    <div
      className="item-start z-10 flex max-w-[600px] cursor-pointer gap-2 rounded-xl border border-gray-300 p-2"
      onClick={() => setChoosenAddress(item)}
    >
      {item === ChoosenAddress ? (
        <IoIosRadioButtonOn
          onClick={() => setChoosenAddress(item)}
          color="var(--main-Color)"
          size={20}
        />
      ) : (
        <IoIosRadioButtonOff
          onClick={() => setChoosenAddress(item)}
          color="gray"
          size={20}
        />
      )}
      <div>
        <h1 className="text-md font-bold">{item?.name}</h1>
        <h1 className="mt-2 text-sm">
          <span className='font-bold'>Address Details:</span> {item?.details}
        </h1>
        <h1 className="mt-2 text-sm">
          <span className='font-bold'>phone Number:</span> {item?.phone}
        </h1>
        <h1 className="mt-2 text-sm">
          <span className='font-bold'>city:</span> {item?.city}
        </h1> 
      </div>
    </div>
  );
}

export default AddressItem;
