import { useState } from 'react';
import { FaArrowCircleRight, FaArrowCircleUp } from 'react-icons/fa';
import AddressItem from '../../../../../shared/components/addressItem/addressItem';

function SetUpAddress({ setChoosenAddress, ChoosenAddress }: any) {
  const [ChooseAddressOption, setChooseAddressOption] = useState(1);

  return (
    <div>
      <h1 className="mb-4 text-lg font-bold">Billing Address</h1>

      <div className=" bg-white p-3 shadow-lg ml-2 rounded-xl">
        <div className="mt-5 flex flex-col gap-3">

          {/* enter address */}
          <div>
            <div
              className="mb-4 flex cursor-pointer items-center gap-6"
              onClick={() => {
                if (ChooseAddressOption === 1) {
                  setChooseAddressOption(0);
                } else {
                  setChooseAddressOption(1);
                }
              }}
            >
              {ChooseAddressOption === 1 ? (
                <FaArrowCircleUp color="var(--main-Color)" size={20} />
              ) : (
                <FaArrowCircleRight
                  onClick={() => setChooseAddressOption(1)}
                  color="gray"
                  size={20}
                />
              )}
              <h1 className="text-lg font-bold">Enter Youe Address</h1>
            </div>

            {ChooseAddressOption === 1 && (
              <div className="mx-4">
                <textarea
                  id="first_name"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-[var(--fifth-Color)] focus:ring-[var(--fifth-Color)] dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Enter Your Address"
                  required
                />
              </div>
            )}
          </div>

          {/* choose address */}
          <div>
            <div
              className="mb-4 flex cursor-pointer items-center gap-6"
              onClick={() => {
                if (ChooseAddressOption === 2) {
                  setChooseAddressOption(0);
                } else {
                  setChooseAddressOption(2);
                }
              }}
            >
              {ChooseAddressOption === 2 ? (
                <FaArrowCircleUp color="var(--main-Color)" size={20} />
              ) : (
                <FaArrowCircleRight
                  onClick={() => setChooseAddressOption(2)}
                  color="gray"
                  size={20}
                />
              )}
              <h1 className="text-lg font-bold">Choose From Your Address</h1>
            </div>

            {ChooseAddressOption === 2 && (
              <div className="mx-5">
                {[1, 2, 3, 4, 5].map((item, index) => (
                  <AddressItem
                    key={index}
                    setChoosenAddress={setChoosenAddress}
                    ChoosenAddress={ChoosenAddress}
                    item={item}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SetUpAddress;
