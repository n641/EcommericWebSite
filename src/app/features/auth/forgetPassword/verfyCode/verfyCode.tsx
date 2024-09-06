import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import Cover from '../../../../../assets/png/coverIntro.jpg';
import {
  CustomeInput,
  ErrorToasts,
  NavBar,
} from '../../../../shared/components';
import { useState } from 'react';
import OTPInput from '../../../../shared/components/oneTimeInput/oneTimeInput';

let userSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
});

function VerfyCode() {
  const [SendCode, setSendCode] = useState(false);
  const [EmailSended, setEmailSended] = useState(null);
  const navigate = useNavigate();

  const OnSubmitHandler = (values: any) => {
    alert(JSON.stringify(values, null, 2));
    setEmailSended(values?.email);
    setSendCode(true);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: OnSubmitHandler,
    validationSchema: userSchema,
  });

  const OnSubmitCode = () => {
    navigate('/ResetPassword');
  };

  return (
    <div className="flex h-lvh items-center justify-center align-middle">
      {/* <ErrorToasts error={'error message'} isError={true} /> */}

      <NavBar />

      <div className="fixed inset-0 h-screen">
        <img src={Cover} className="border-5 h-full w-full border-white" />
        <div className="absolute inset-0 backdrop-blur-sm"></div>
      </div>

      <div className="z-50 flex w-auto flex-col items-center justify-center rounded-xl bg-white px-9 py-5 align-middle sm:px-20 lg:w-1/3">
        <div className="flex w-full flex-col justify-center self-center">
          <h1 className="self-start text-[15px] font-bold uppercase text-gray-400">
            Opps, Forget Your Password!
          </h1>
          <h1 className="my-2 self-start font-sans text-[28px] font-bold text-black">
            Forget Password <span className="text-[var(--main-Color)]">.</span>
          </h1>

          <h1 className="self-start text-[14px] font-bold text-gray-400">
            Enter Your Email will Send
            <span className="text-[var(--main-Color)]"> Verification Code</span>
          </h1>

          {SendCode ? (
            <form
              onSubmit={OnSubmitCode}
              className="mb-3 mt-5 flex w-full flex-col"
            >
              <OTPInput email={EmailSended} />

              <button
                type="submit"
                className="mt-4 w-full cursor-pointer rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-black/50"
                style={{ backgroundColor: 'black' }}
              >
                Submit
              </button>
            </form>
          ) : (
            <form
              onSubmit={formik.handleSubmit}
              className="mb-3 mt-5 flex w-full flex-col"
            >
              <CustomeInput
                labelText="Email Address"
                onChange={formik.handleChange}
                value={formik.values.email}
                name="email"
                onBlur={formik.handleBlur}
                isError={formik.touched.email && formik.errors.email}
                error={formik.errors.email}
              />

              <button
                type="submit"
                className="mt-4 w-full cursor-pointer rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-black/50"
                style={{ backgroundColor: 'black' }}
              >
                Submit
              </button>
            </form>
          )}

          <h2 className="mt-4 text-center">
            Dont't Have Account{'  '}
            <Link to={'/SignUp'}>
              <span className="cursor-pointer font-extrabold text-[var(--fourth-Color)]">
                SignUp!
              </span>
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export { VerfyCode };
