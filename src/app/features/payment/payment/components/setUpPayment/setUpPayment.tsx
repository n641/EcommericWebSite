import React, { useState } from 'react';
import { FaArrowCircleRight, FaArrowCircleUp } from 'react-icons/fa';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
function SetUpPayment() {
  const [ChoosePaymentOption, setChoosePaymentOption] = useState(1);

  return (
    <div>
      <h1 className="mb-4 mt-5 text-lg font-bold">Payment Method</h1>

      <div className="ml-2 mt-4 rounded-xl bg-white shadow-lg">

        {/* credit card option */}
        <div className="p-4">
          <div
            className="flex cursor-pointer items-center gap-6"
            onClick={() => {
              if (ChoosePaymentOption === 1) {
                setChoosePaymentOption(0);
              } else {
                setChoosePaymentOption(1);
              }
            }}
          >
            {ChoosePaymentOption === 1 ? (
              <IoCheckmarkCircle color="var(--main-Color)" size={20} />
            ) : (
              <IoCheckmarkCircleOutline
                onClick={() => setChoosePaymentOption(1)}
                color="gray"
                size={20}
              />
            )}
            <h1 className="text-lg font-bold">Credit/Depit Card</h1>
          </div>

          {/* credit card inputs */}
          {ChoosePaymentOption === 1 && (
            <div>
              <div>
                <label
                  htmlFor="first_name"
                  className="mb-2 mt-4 block text-sm font-medium text-black dark:text-white"
                >
                  Card Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="mt-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-black focus:border-[var(--fifth-Color)] focus:ring-[var(--fifth-Color)] dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-[var(--fifth-Color)] dark:focus:ring-[var(--fifth-Color)]"
                  placeholder="John"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="first_name"
                  className="mb-2 mt-4 block text-sm font-medium text-black dark:text-white"
                >
                  Card Number
                </label>
                <input
                  type="number"
                  id="first_name"
                  className="mt-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-black focus:border-[var(--fifth-Color)] focus:ring-[var(--fifth-Color)] dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-[var(--fifth-Color)] dark:focus:ring-[var(--fifth-Color)]"
                  placeholder="123-12312-12312"
                  required
                />
              </div>
              <div className="mb-6 grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="first_name"
                    className="mb-2 mt-4 block text-sm font-medium text-black dark:text-white"
                  >
                    Expiry Date
                  </label>
                  <input
                    type="date"
                    id="first_name"
                    className="mt-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-black focus:border-[var(--fifth-Color)] focus:ring-[var(--fifth-Color)] dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-[var(--fifth-Color)] dark:focus:ring-[var(--fifth-Color)]"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="mb-2 mt-4 block text-sm font-medium text-black dark:text-white"
                  >
                    CVC/CVV
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    className="mt-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-black focus:border-[var(--fifth-Color)] focus:ring-[var(--fifth-Color)] dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-[var(--fifth-Color)] dark:focus:ring-[var(--fifth-Color)]"
                    placeholder="123"
                    required
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* cash */}
        <div className="p-4">
          <div
            className="flex cursor-pointer items-center gap-6"
            onClick={() => {
              if (ChoosePaymentOption === 2) {
                setChoosePaymentOption(0);
              } else {
                setChoosePaymentOption(2);
              }
            }}
          >
            {ChoosePaymentOption === 2 ? (
              <IoCheckmarkCircle color="var(--main-Color)" size={20} />
            ) : (
              <IoCheckmarkCircleOutline
                onClick={() => setChoosePaymentOption(2)}
                color="gray"
                size={20}
              />
            )}
            <h1 className="text-lg font-bold">Cash</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SetUpPayment;
