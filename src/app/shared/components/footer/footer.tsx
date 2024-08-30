import Logo from '../../../../assets/logos/DarkLogo.png';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { useGetAllBrands } from '../../../features/home/hooks/useGetAllBrands';
import AdvertiesmentSection from '../../../features/home/components/advertiesmentSection/advertiesmentSection';
import AllBrandsSection from '../../../features/home/components/allBrandsSection/allBrandsSection';

function Footer() {
  const { isLoadingBrands, Brands } = useGetAllBrands({});

  return (
    <div className='flex flex-col gap-10 '>
      <div className='px-5'>
      <AdvertiesmentSection />
      <AllBrandsSection Brands={Brands?.data} />
      </div>

      <footer className="bg-black">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
                <img
                  src={Logo}
                  className="me-3 h-[100px] w-[100px]"
                  alt="FlowBite Logo"
                />
                <span className="self-center whitespace-nowrap text-2xl font-semibold text-white">
                  Pixels
                </span>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                  Resources
                </h2>
                <ul className="font-medium text-gray-500">
                  <li className="mb-4">
                    <a href="https://flowbite.com/" className="hover:underline">
                      Flowbite
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Tailwind CSS
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                  Follow us
                </h2>

                <ul className="font-medium text-gray-500">
                  <li className="mb-4">
                    <a
                      href="https://github.com/themesberg/flowbite"
                      className="hover:underline"
                    >
                      Github
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      className="hover:underline"
                    >
                      Discord
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                  Legal
                </h2>

                <ul className="font-medium text-gray-500">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>

                  <li>
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />

          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center">
              © 2024{' '}
              <a href="https://flowbite.com/" className="hover:underline">
                Pixels™
              </a>
              . All Rights Reserved.
            </span>
            <div className="mt-4 flex sm:mt-0 sm:justify-center">
              <a href="#" className="text-gray-500 hover:text-white">
                <FaFacebookF />
                <span className="sr-only">Facebook page</span>
              </a>

              <a href="#" className="ms-5 text-gray-500 hover:text-white">
                <FaDiscord />
                <span className="sr-only">Discord community</span>
              </a>

              <a href="#" className="ms-5 text-gray-500 hover:text-white">
                <FaTwitter />
                <span className="sr-only">Twitter page</span>
              </a>

              <a href="#" className="ms-5 text-gray-500 hover:text-white">
                <FaGithub />
                <span className="sr-only">GitHub account</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export { Footer };
