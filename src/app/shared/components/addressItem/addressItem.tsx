import { IoIosRadioButtonOff, IoIosRadioButtonOn } from 'react-icons/io';
function AddressItem({ setChoosenAddress, ChoosenAddress, item }: any) {
  return (
    <div className="flex gap-2 border border-gray-300 p-2 my-2 rounded-xl max-w-[600px] item-start cursor-pointer z-10"
      onClick={() => setChoosenAddress(item)}
    >
      {item === ChoosenAddress ? (
        <IoIosRadioButtonOn
          onClick={() => setChoosenAddress(item)}
          color="var(--main-Color)"
          size={30}
        />
      ) : (
        <IoIosRadioButtonOff
          onClick={() => setChoosenAddress(item)}
          color="gray"
          size={30}

        />
      )}
      <h1 className='text-sm'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        Aperiam, obcaecati tenetur. Rem eligendi itaque corrupti earum sit natus
        reprehenderit inventore.
      </h1>
    </div>
  );
}

export default AddressItem;
