import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { CustomeInput, ErrorToasts } from '../../../shared/components';

function SignUp() {
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

  const OnSubmitHandler = (values: any) => {
    alert(JSON.stringify(values, null, 2));
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
          <h1 className="self-start text-[30px] font-bold text-black">Login</h1>
          <h1 className="self-start text-[12px] text-[var(--fourth-Color)]">
            Let's make shopping
          </h1>

          <form
            onSubmit={formik.handleSubmit}
            className="mb-3 mt-10 flex w-full flex-col"
          >
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

            <button
              type="submit"
              className="mt-4 w-full cursor-pointer rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-black/50"
              style={{ backgroundColor: 'black' }}
            >
              Submit
            </button>
          </form>

          <h2 className="text-center">
            Dont't Have Account{'  '}
            <Link to={'/SignUp'}>
              <span className="cursor-pointer font-extrabold text-[var(--fourth-Color)]">
                SignUp!
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
