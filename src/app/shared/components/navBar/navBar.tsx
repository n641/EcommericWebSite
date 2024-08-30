import { BsHandbag } from 'react-icons/bs';
import { FaCaretDown } from 'react-icons/fa';
import { GoPerson } from 'react-icons/go';
import { NavLink } from 'react-router-dom';
import Logo from '../../../../assets/logos/LightLogo.png';
import { useGetAllCategories } from '../../../features/home/hooks/useGetAllCategory';

const Navigators = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Products',
    path: 'products',
  },
  {
    name: 'Brands',
    path: '/',
  },
  {
    name: 'WishList',
    path: '/',
  },
];

const ProfileNaviagtor = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Products',
    path: '/',
  },
  {
    name: 'Brands',
    path: '/',
  },
  {
    name: 'AboutUS',
    path: '/',
  },
];


// const Countries = [
//   {
//     name: 'English (US)',
//     icons: (
//       <svg
//         className="me-3 h-4 w-4 rounded-full"
//         aria-hidden="true"
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 3900 3900"
//       >
//         <path fill="#b22234" d="M0 0h7410v3900H0z" />
//         <path
//           d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
//           stroke="#fff"
//           strokeWidth="300"
//         />
//         <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
//         <g fill="#fff">
//           <g id="d">
//             <g id="c">
//               <g id="e">
//                 <g id="b">
//                   <path
//                     id="a"
//                     d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
//                   />
//                   <use href="#a" y="420" />
//                   <use href="#a" y="840" />
//                   <use href="#a" y="1260" />
//                 </g>
//                 <use href="#a" y="1680" />
//               </g>
//               <use href="#b" x="247" y="210" />
//             </g>
//             <use href="#c" x="494" />
//           </g>
//           <use href="#d" x="988" />
//           <use href="#c" x="1976" />
//           <use href="#e" x="2470" />
//         </g>
//       </svg>
//     ),
//   },
//   {
//     name: 'Italiano',
//     icons: (
//       <svg
//         className="me-4 ms-0 h-3.5 w-3.5 rounded-full"
//         aria-hidden="true"
//         xmlns="http://www.w3.org/2000/svg"
//         id="flag-icon-css-it"
//         viewBox="0 0 512 512"
//       >
//         <g fillRule="evenodd" strokeWidth="1pt">
//           <path fill="#fff" d="M0 0h512v512H0z" />
//           <path fill="#009246" d="M0 0h170.7v512H0z" />
//           <path fill="#ce2b37" d="M341.3 0H512v512H341.3z" />
//         </g>
//       </svg>
//     ),
//   },
//   {
//     name: 'Egyptions',
//     icons: (
//       <svg
//         className="me-3 h-5 w-5 rounded-full"
//         viewBox="0 0 30 16"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <rect
//           x="0.5"
//           y="0.609009"
//           width="21.0952"
//           height="14.7823"
//           rx="3.5"
//           fill="white"
//           stroke="#F5F5F5"
//         />
//         <mask
//           id="mask0_4673_921"
//           maskUnits="userSpaceOnUse"
//           x="0"
//           y="0"
//           width="23"
//           height="16"
//         >
//           <rect
//             x="0.5"
//             y="0.609009"
//             width="21.0952"
//             height="14.7823"
//             rx="3.5"
//             fill="white"
//             stroke="white"
//           />
//         </mask>
//         <g mask="url(#mask0_4673_921)">
//           <path
//             fill-rule="evenodd"
//             clip-rule="evenodd"
//             d="M0 5.36978H22.0952V0.109009H0V5.36978Z"
//             fill="#E41D33"
//           />
//           <path
//             fill-rule="evenodd"
//             clip-rule="evenodd"
//             d="M0 15.891H22.0952V10.6302H0V15.891Z"
//             fill="#262626"
//           />
//           <path
//             d="M11.5472 7.85952L11.5041 7.7733L11.5039 7.77298L11.5039 7.77292L11.5015 7.76823L11.4885 7.74363C11.4764 7.72099 11.4577 7.687 11.4335 7.64554C11.3843 7.56124 11.3163 7.45279 11.2376 7.34795C11.1735 7.26244 11.1125 7.19299 11.0591 7.14307C11.0029 7.19615 10.9386 7.26869 10.8708 7.35622C10.7868 7.46461 10.7127 7.57627 10.6587 7.66274C10.6321 7.70535 10.6112 7.74039 10.5975 7.76395L10.5827 7.78987L10.5797 7.79519L10.5797 7.79524L10.5796 7.79536L11.5472 7.85952ZM11.5472 7.85952H11.1882H10.907H10.5443H11.5472ZM9.39918 7.77217L9.52246 8.01872C9.31159 8.076 9.0839 7.91999 9.0839 7.68154V7.22565C9.0839 7.20485 9.08854 7.18512 9.09683 7.16746L9.39918 7.77217ZM13.0113 7.68154C13.0113 7.91999 12.7837 8.076 12.5728 8.01872L12.6961 7.77217L12.9984 7.16746C13.0067 7.18512 13.0113 7.20485 13.0113 7.22565V7.68154ZM11.1532 7.06864C11.1532 7.06875 11.1516 7.06969 11.1484 7.0711C11.1516 7.06923 11.1532 7.06852 11.1532 7.06864ZM10.9747 7.07697C10.9729 7.07622 10.972 7.07574 10.972 7.07569C10.9719 7.07563 10.9728 7.076 10.9747 7.07697Z"
//             fill="#F4B32E"
//             fill-opacity="0.25"
//             stroke="#C6A846"
//             stroke-width="1.33333"
//           />
//         </g>
//       </svg>
//     ),
//   },
// ];

function NavBar() {

  const { isLoadingCategories, Categories } = useGetAllCategories({});

  return (
    <nav className="fixed z-30   left-3 right-3 top-5 rounded-2xl bg-white/90  shadow-2xl dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-2xl flex-wrap items-center justify-between px-4 py-1">
        {/* logo */}
        <NavLink to={'/'} className={'flex items-center gap-1'}>
          <img src={Logo} className="h-10" alt="Flowbite Logo" />
          <span className="self-center whitespace-nowrap text-lg font-semibold uppercase italic dark:text-white">
            Pixels
          </span>
        </NavLink>

        <div className="flex items-center space-x-1 gap-10 lg:order-2 lg:space-x-0 rtl:space-x-reverse">
          {/* search */}
          <input
            type="text"
            id="first_name"
            onClick={() => {
              alert('open search screen ');
            }}
            className="focus:border-color-[var(--Active-Gold-color)] placeholder:text- [12px] hidden w-[300px] rounded-md border-0 bg-gray-200 p-2 py-1 text-[12px] text-gray-900 focus:ring-[var(--Active-Gold-color)] md:flex"
            placeholder="Search"
          />

          {/* when loged in  */}
          {true && (
            <div className="flex items-center gap-2">
              <div className="relative mr-4 flex cursor-pointer items-center gap-1 font-semibold hover:text-[var(--Gold-color)]">
                <BsHandbag />

                {true && (
                  <div className="absolute bottom-2 left-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[7px] text-white">
                    1
                  </div>
                )}
              </div>

              {/* Profile */}
              <div className="flex items-center space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button
                  type="button"
                  className="flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 md:me-0"
                  id="user-menu-button"
                  aria-expanded="false"
                  data-dropdown-toggle="user-dropdown"
                  data-dropdown-placement="bottom"
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="/docs/images/people/profile-picture-3.jpg"
                    alt="user photo"
                  />
                </button>

                {/* <!-- Dropdown menu --> */}
                <div
                  className="relative z-50 my-4 hidden list-none divide-y divide-gray-100 rounded-lg bg-white text-base shadow dark:divide-gray-600 dark:bg-gray-700"
                  id="user-dropdown"
                >
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white">
                      Bonnie Green
                    </span>
                    <span className="block truncate text-sm text-gray-500 dark:text-gray-400">
                      name@flowbite.com
                    </span>
                  </div>

                  <ul className="py-2" aria-labelledby="user-menu-button">
                    {ProfileNaviagtor.map((item) => {
                      return (
                        <li key={item.name}>
                          <NavLink
                            to={item.path}
                            className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-[var(--Gold-color)] dark:hover:bg-gray-600"
                          >
                            {item.name}
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* when loged out  */}
          {false && (
            <button className="flex items-center gap-1 rounded-md bg-[var(--Active-Gold-color)] px-4 py-1 text-sm font-bold text-white hover:opacity-80">
              <GoPerson />
              <p className="text-sm text-white">Login</p>
            </button>
          )}

          {/* ÷btn for mboile size */}
          <button
            data-collapse-toggle="navbar-language"
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden"
            aria-controls="navbar-language"
            aria-expanded="true"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* links */}
        <div
          className=" z-10 hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
          id="navbar-language"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 lg:mt-0 lg:flex-row lg:space-x-8 lg:border-0 lg:bg-[var(--bg-color)] lg:p-0 lg:dark:bg-gray-900 rtl:space-x-reverse">
            
            {/* button drop down */}
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex w-full items-center justify-between rounded px-3 py-2 text-sm text-gray-900 hover:text-[var(--Gold-color)] dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:text-white md:hover:text-[var(--Gold-color)] md:dark:hover:bg-transparent md:dark:hover:text-[var(--Gold-color)] lg:w-auto lg:border-0 lg:p-0 lg:hover:bg-transparent"
              >
                Categories
                <FaCaretDown />
              </button>

              {/* <!-- Categories Dropdown menu --> */}
              <div
                id="dropdownNavbar"
                className="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white font-normal shadow dark:divide-gray-600 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  {
                    isLoadingCategories?
                    <li  className="block px-4 py-2 hover:bg-gray-100 hover:text-[var(--Gold-color)] dark:hover:bg-gray-600">
                      <h1>Loadin</h1>
                    </li>
                    :
                    Categories?.data.map((item :any) => {
                      return (
                        <li key={item.name}>
                          <NavLink
                            to={'/'}
                            className="block px-4 py-2 hover:bg-gray-100 hover:text-[var(--Gold-color)] dark:hover:bg-gray-600"
                          >
                            {item?.name}
                          </NavLink>
                        </li>
                      );
                    })
                  }
                  
                </ul>
                <div className="py-1">
                  <NavLink
                    to={'/'}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[var(--Gold-color)] dark:hover:bg-gray-600"
                  >
                    See More
                  </NavLink>
                </div>
              </div>
            </li>

            {/* main navigaors */}
            {Navigators.map((item) => {
              return (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className="block rounded px-3 py-2 text-sm text-black lg:bg-transparent lg:p-0 lg:hover:text-[var(--Gold-color)] lg:dark:text-blue-500"
                    aria-current="page"
                  >
                    {item.name}
                  </NavLink>
                </li>
              );
            })}

            {/* search btn */}
            <li>
              <NavLink
                to={'/'}
                className="block rounded px-3 py-2 text-sm text-black md:dark:text-blue-500 lg:hidden lg:bg-transparent lg:p-0 lg:hover:text-[var(--Gold-color)]"
                aria-current="page"
              >
                Search
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export { NavBar };

{
  /* ÷language btn */
}
{
  /* <div className="relative flex min-w-44 flex-col">
<button
  type="button"
  data-dropdown-toggle="language-dropdown-menu"
  className="inline-flex cursor-pointer items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
>
  {SelectedCoutry.icons}
  {SelectedCoutry.name}
</button>

<div
  className="fixed right-0 top-5 z-50 my-4 hidden min-w-max list-none divide-y divide-gray-100 rounded-lg bg-white text-base shadow dark:bg-gray-700"
  id="language-dropdown-menu"
>
  <ul className="py-2 font-medium" role="none">
    {Countries.map((item) => {
      return (
        <li onClick={() => setSelectedCoutry(item)}>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
            role="menuitem"
          >
            <div className="inline-flex items-center">
              {item.icons}
              {item.name}
            </div>
          </a>
        </li>
      );
    })}
  </ul>
</div>
</div> */
}
