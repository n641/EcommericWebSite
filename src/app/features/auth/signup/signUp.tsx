import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { CustomeInput, ErrorToasts, NavBar } from '../../../shared/components';
import Cover from '../../../../assets/png/coverIntro.jpg';
import { RoundedBtn } from '../../../shared/components/buttons/roundedBtn';
import { useSignUp } from './hooks/useSignUp';
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
  phoneNumber: Yup.string()
    .required('Phone number is required')
    .matches(
      /^01[0-2,5]{1}[0-9]{8}$/,
      'Enter Valid Phone Number,Phone number must be 11 digits'
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
    .required('Confirm Password is required'),
});

function SignUp() {
  const navigate = useNavigate();

  const { SignUP, isLoading, error, isError } = useSignUp({
    onErrorHandler: (error: any) => {
      console.log(error);
    },
    onSuccessHandler: (data: any) => {
      console.log(data);
      navigate('/');
    },
  });

  const OnSubmitHandler = (values: any) => {
    SignUP({
      name: values?.firstName + ' ' + values?.lastName,
      email: values?.email,
      password: values?.password,
      rePassword: values?.confirmPassword,
      phone: values?.phoneNumber,
    });
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

  console.log(formik.errors);
  return (
    <div className="flex h-lvh flex-col items-center justify-center overflow-auto align-middle">
      <ErrorToasts error={error} isError={isError} />

      <NavBar />

      <div className="fixed inset-0 h-screen">
        <img src={Cover} className="border-5 h-full w-full border-white" />
        <div className="absolute inset-0 backdrop-blur-sm"></div>
      </div>

      <div className="h-[100%] sm:h-0"></div>

      <div className="z-40 mt-20 flex w-auto flex-col items-center justify-center rounded-xl bg-white px-9 py-5 align-middle sm:mt-0 sm:px-20 lg:w-1/3">
        <div className="flex w-full flex-col justify-center self-center">
          <h1 className="self-start text-[15px] font-bold uppercase text-gray-400">
            Start For Free
          </h1>
          <h1 className="my-2 self-start font-sans text-[28px] font-bold text-black">
            Create new account{' '}
            <span className="text-[var(--main-Color)]">.</span>
          </h1>
          <h1 className="self-start text-[14px] font-bold text-gray-400">
            Let's Create Your Account For{' '}
            <span className="text-[var(--main-Color)]">Free</span>
          </h1>

          <form
            onSubmit={formik.handleSubmit}
            className="mb-3 mt-10 flex w-full flex-col"
          >
            <CustomeInput
              labelText="First name"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              name="firstName"
              onBlur={formik.handleBlur}
              isError={formik.touched.firstName && formik.errors.firstName}
              error={formik.errors.firstName}
            />
            <CustomeInput
              labelText="Last name"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              name="lastName"
              onBlur={formik.handleBlur}
              isError={formik.touched.lastName && formik.errors.lastName}
              error={formik.errors.lastName}
            />

            <CustomeInput
              labelText="Email Address"
              onChange={formik.handleChange}
              value={formik.values.email}
              name="email"
              onBlur={formik.handleBlur}
              isError={formik.touched.email && formik.errors.email}
              error={formik.errors.email}
            />

            <CustomeInput
              labelText="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              name="password"
              onBlur={formik.handleBlur}
              isError={formik.touched.password && formik.errors.password}
              error={formik.errors.password}
            />
            <CustomeInput
              labelText="Confirm Password"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
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
              name="phoneNumber"
              onBlur={formik.handleBlur}
              isError={formik.touched.phoneNumber && formik.errors.phoneNumber}
              error={formik.errors.phoneNumber}
            />

            <RoundedBtn
              label={'Submit'}
              isLoading={isLoading}
              disabled={!formik.isValid || isLoading}
            />
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
    </div>
  );
}

export default SignUp;
