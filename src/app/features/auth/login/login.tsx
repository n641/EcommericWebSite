import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { CustomeInput, ErrorToasts, NavBar } from '../../../shared/components';
import Cover from '../../../../assets/png/coverIntro.jpg';
let userSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
    ),
});
function SignUp() {
  const navigate = useNavigate();

  const OnSubmitHandler = (values: any) => {
    alert(JSON.stringify(values, null, 2));
    navigate('/EcommericWebSite');
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: OnSubmitHandler,
    validationSchema: userSchema,
  });

  return (
    <div className="flex h-lvh items-center justify-center align-middle mt-20 sm:mt-0">
      <ErrorToasts error={'error message'} isError={true} />

      <NavBar/>

      <div className="fixed inset-0 h-screen">
        <img src={Cover} className="border-5 h-full w-full border-white" />
        <div className="absolute inset-0  backdrop-blur-sm"></div>
      </div>

      <div className="z-50 flex flex-col items-center justify-center rounded-xl bg-white px-9 sm:px-20 py-5 align-middle w-auto lg:w-1/3 ">

        <div className="flex w-full flex-col justify-center self-center">
          <h1 className="self-start text-[15px] font-bold uppercase text-gray-400">
            Welcome Back!
          </h1>
          <h1 className="my-2 self-start font-sans text-[28px] font-bold text-black">
            Login <span className="text-[var(--main-Color)]">.</span>
          </h1>

          <h1 className="self-start text-[14px] font-bold text-gray-400">
            Let's Create Your Account For{' '}
            <span className="text-[var(--main-Color)]">Free</span>
          </h1>

          <form
            onSubmit={formik.handleSubmit}
            className="mb-3 mt-5 flex w-full flex-col"
          >
            <CustomeInput
              labelText="Email Address"
              onChange={formik.handleChange}
              value={formik.values.email }
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

            <Link to={'/ForgetPassword'} className='cursor-pointer' >
              <p className='font-bold text-[16px] text-red-500'>Forgot Password ?</p>
            </Link>

            <button
              type="submit"
              className="mt-4 w-full cursor-pointer rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-black/50"
              style={{ backgroundColor: 'black' }}
            >
              Submit
            </button>
          </form>

          <h2 className="text-center mt-4">
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

export default SignUp;
