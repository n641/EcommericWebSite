import { useFormik } from 'formik';
import * as Yup from 'yup';
import { CustomeInput } from '../../../../../shared/components';
import AddressItem from '../../../../../shared/components/addressItem/addressItem';
import { RoundedBtn } from '../../../../../shared/components/buttons/roundedBtn';
import { useGetAddress } from '../../hooks/useGetAddress';
import { useAddAddress } from '../../hooks/usePostAddress';
import { useEffect, useState } from 'react';

let userSchema = Yup.object({
  name: Yup.string().trim().required('name of is required'),
  details: Yup.string().required('Address is required'),
  phone: Yup.string()
    .required('Phone number is required')
    .matches(
      /^01[0-2,5]{1}[0-9]{8}$/,
      'Enter Valid Phone Number,Phone number must be 11 digits'
    ),
  city: Yup.string().required('city is required'),
});
function SetUpAddress({ setChoosenAddress, ChoosenAddress }: any) {
  const OnSubmitHandler = (values: any) => {
    AddAddress(values);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      details: '',
      phone: '',
      city: '',
    },
    onSubmit: OnSubmitHandler,
    validationSchema: userSchema,
  });

  const { Address, isLoadingAddress } = useGetAddress({
    onErrorHandler: (error: any) => {
      console.log(error);
    },
    onSuccessHandler: () => {
    },
  });

  const { AddAddress, isLoading } = useAddAddress({
    onErrorHandler: (error: any) => {
      console.log('fail', error);
    },
    onSuccessHandler: (data: any) => {
      setAllAddress(data);
    },
  });
  const [AllAddress, setAllAddress] = useState(Address?.data ?? []);

  useEffect(() => {
    setAllAddress(Address?.data);
    setChoosenAddress(Address?.data[0]);
  }, [Address]);

  if(isLoadingAddress ) return <div>Loading</div>

  return (
    <div>
      <h1 className="mb-4 text-lg font-bold">Billing Address</h1>

      <div className="ml-2 rounded-xl bg-white p-3 shadow-lg">
        <div className="mt-5 flex flex-col gap-3">
          {/* enter address */}
          <div>
            <h1 className="text-lg font-bold">Enter New Address</h1>
          </div>

          <div className="mx-4">
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col gap-2"
            >
              <div className="grid grid-cols-1 gap-x-4 md:grid-cols-2">
                <CustomeInput
                  labelText="Name For Address"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  name="name"
                  onBlur={formik.handleBlur}
                  isError={formik.touched.name && formik.errors.name}
                  error={formik.errors.name}
                />

                <CustomeInput
                  labelText="Address Details"
                  onChange={formik.handleChange}
                  value={formik.values.details}
                  name="details"
                  onBlur={formik.handleBlur}
                  isError={formik.touched.details && formik.errors.details}
                  error={formik.errors.details}
                />
              </div>

              <CustomeInput
                labelText="Phone Number"
                onChange={formik.handleChange}
                value={formik.values.phone}
                name="phone"
                onBlur={formik.handleBlur}
                isError={formik.touched.phone && formik.errors.phone}
                error={formik.errors.phone}
              />

              <CustomeInput
                labelText="City"
                onChange={formik.handleChange}
                value={formik.values.city}
                name="city"
                onBlur={formik.handleBlur}
                isError={formik.touched.city && formik.errors.city}
                error={formik.errors.city}
              />

              <RoundedBtn
                label={'Add New Address'}
                isLoading={isLoading}
                disabled={isLoading}
                className="w-[30%] self-center rounded-lg bg-[var(--thired-Color)] p-2 text-white disabled:opacity-60"
              />
            </form>
          </div>
        </div>

        {/* choose address */}
        <div className="mt-5">
          <h1 className="text-sm font-bold">Choose From Your Address</h1>
        </div>

        <div className="mx-5 my-2 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {AllAddress?.map((item: any, index: number) => (
            <AddressItem
              key={index}
              setChoosenAddress={setChoosenAddress}
              ChoosenAddress={ChoosenAddress}
              item={item}
            />
          ))}
        </div>
        {Address?.data.length === 0 && (
          <p className="text-center">No Address Found</p>
        )}
      </div>
    </div>
  );
}

export default SetUpAddress;
