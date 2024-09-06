import { useFormik } from 'formik';
import { json, Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { CustomeInput, ErrorToasts, NavBar } from '../../../shared/components';
import Cover from '../../../../assets/png/coverIntro.jpg';
import { useLogin } from './hooks/useLogin';
import { RoundedBtn } from '../../../shared/components/buttons/roundedBtn';
import { useDispatch } from 'react-redux';
import { addUserData } from '../../../shared/redux/userSlice';
import { useState } from 'react';
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
  const [RemeberMe, setRemeberMe] = useState(false);

  const dispatch = useDispatch();

  const { loginUser, isLoading, isError, error } = useLogin({
    onErrorHandler: (error: any) => {
      console.warn(error);
    },
    onSuccessHandler: async (data: any) => {
      localStorage.setItem('UserData', JSON.stringify(data));
      dispatch(addUserData(data));
      navigate('/Home');
    },
  });

  const OnSubmitHandler = (values: any) => {
    loginUser({
      email: values?.email,
      password: values?.password,
    });
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
    <div className="mt-20 flex h-lvh items-center justify-center align-middle sm:mt-0">
      <ErrorToasts error={error} isError={isError} />

      <NavBar />

      <div className="fixed inset-0 h-screen">
        <img src={Cover} className="border-5 h-full w-full border-white" />
        <div className="absolute inset-0 backdrop-blur-sm"></div>
      </div>

      <div className="z-40 flex w-auto flex-col items-center justify-center rounded-xl bg-white px-9 py-5 align-middle sm:px-20 lg:w-1/3">
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

            <div className="flex items-center justify-between">
              {/* <div>
                <input
                  type="checkbox"
                  name="rememberMe"
                  id="remember"
                  className="color-[var(--main-Color)] rounded-sm checked:border-[var(--main-Color)] checked:bg-[var(--main-Color)]"
                  onChange={(value) => setRemeberMe(value.target.checked)}
                />
                <label htmlFor="remember" className="ml-2">
                  Remember me
                </label>
              </div> */}

              <Link to={'/ForgetPassword'} className="cursor-pointer">
                <p className="text-[16px] font-bold text-red-500">
                  Forgot Password ?
                </p>
              </Link>
            </div>

            <RoundedBtn
              label={'Submit'}
              isLoading={isLoading}
              disabled={!formik.isValid || isLoading}
            />
          </form>

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

export default SignUp;
