import React from 'react';
import { Link } from 'react-router-dom';
import { CustomeInput, ErrorToasts } from '../../../shared/components';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function SignUp() {
  let userSchema = Yup.object({
    firstName: Yup.string().trim().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
      ),
    phoneNumber: Yup.string().required('Phone number is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const OnSubmitHandler = (values: any) => {
    alert(JSON.stringify(values, null, 2));
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      phoneNumber: '',
    },
    onSubmit: OnSubmitHandler,
    validationSchema: userSchema,
  });

  return (
    <div className="flex flex-1 bg-white">
      <ErrorToasts error={'error message'} isError={true} />

      <div className="flex h-lvh w-full flex-col items-center justify-center px-20 align-middle lg:w-1/2">
        <div className="mb-10 flex lg:hidden">
          <img
            src={
              'https://images.unsplash.com/photo-1513094735237-8f2714d57c13?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHNob3BwaW5nfGVufDB8fDB8fHww'
            }
            className="border-5 mx-auto h-56 w-56 rounded-full border-white shadow-2xl"
          />
        </div>

        <div className="flex w-full flex-col justify-center self-center">
          <h1 className="self-start text-[30px] font-bold text-black">
            SignUp
          </h1>
          <h1 className="self-start text-[12px] text-[var(--fourth-Color)]">
            Let's Create Your Account For Free
          </h1>
        
          <form
            onSubmit={formik.handleSubmit}
            className="mb-3 mt-10 flex w-full flex-col"
          >
            <div className="grid md:grid-cols-2 md:gap-6">
              <CustomeInput
                labelText="First name"
                onChange={formik.handleChange}
                value={formik.values.firstName}
                type="text"
                name="firstName"
                onBlur={formik.handleBlur}
                isError={formik.touched.firstName && formik.errors.firstName}
                error={formik.errors.firstName}
              />
              <CustomeInput
                labelText="Last name"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                type="text"
                name="lastName"
                onBlur={formik.handleBlur}
                isError={formik.touched.lastName && formik.errors.lastName}
                error={formik.errors.lastName}
              />
            </div>

            <CustomeInput
              labelText="Email Address"
              onChange={formik.handleChange}
              value={formik.values.email}
              type="email"
              name="email"
              onBlur={formik.handleBlur}
              isError={formik.touched.email && formik.errors.email}
              error={formik.errors.email}
            />

            <CustomeInput
              labelText="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              type="password"
              name="password"
              onBlur={formik.handleBlur}
              isError={formik.touched.password && formik.errors.password}
              error={formik.errors.password}
            />
            <CustomeInput
              labelText="Confirm Password"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
              type="password"
              name="confirmPassword"
              onBlur={formik.handleBlur}
              isError={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
              error={formik.errors.confirmPassword}
            />

            <CustomeInput
              labelText="Phone number (123-456-7890)"
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
              type="password"
              name="phoneNumber"
              onBlur={formik.handleBlur}
              isError={formik.touched.phoneNumber && formik.errors.phoneNumber}
              error={formik.errors.phoneNumber}
            />

            <button
              type="submit"
              className="mt-4 w-full cursor-pointer rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-black/50"
              style={{ backgroundColor: 'black' }}
            >
              Submit
            </button>
          </form>

          <h2 className="text-center">
            Already Have Acoount{'  '}
            <Link to={'/'}>
              <span className="cursor-pointer font-extrabold text-[var(--fourth-Color)]">
                Login!
              </span>
            </Link>
          </h2>
        </div>
      </div>

      <div className="hidden h-screen w-1/2 items-center justify-center bg-[var(--second-Color)] align-middle lg:flex">
        <img
          src={
            'https://images.unsplash.com/photo-1513094735237-8f2714d57c13?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHNob3BwaW5nfGVufDB8fDB8fHww'
          }
          className="border-5 h-[300px] w-[300px] rounded-full border-white shadow-2xl"
        />
      </div>
    </div>
  );
}

export default SignUp;
