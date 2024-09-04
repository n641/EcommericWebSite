import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { CustomeInput, ErrorToasts, NavBar } from '../../../shared/components';
import Cover from '../../../../assets/png/coverIntro.jpg';

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
    <div className="flex flex-col h-lvh items-center justify-center overflow-auto align-middle">
      <ErrorToasts error={'error message'} isError={true} />

      <NavBar />

      <div className="fixed inset-0 h-screen">
        <img src={Cover} className="border-5 h-full w-full border-white" />
        <div className="absolute inset-0 backdrop-blur-sm"></div>
      </div>

      <div className="h-[100%]" >
        
      </div>

      <div className="z-50 mt-20 flex w-auto flex-col items-center justify-center rounded-xl bg-white px-9 py-5 align-middle sm:mt-0 sm:px-20 lg:w-1/3">
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
    </div>
  );
}

export default SignUp;
