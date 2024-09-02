interface Props {
  labelText: string;
  [key: string]: any;
}

function CustomeInput({ labelText, isError, error, ...rest }: Props) {
  return (
    <div className="my-3">

      <div className="relative h-10 w-full min-w-[200px]">
        <input
          className="text-blue-gray-700 disabled:bg-blue-gray-50 placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border-blue-gray-200 peer h-full w-full rounded-[7px] border-0 bg-gray-50 px-3 py-2.5 font-sans text-sm font-normal outline-none outline outline-0 transition-all placeholder-shown:border focus:border-2 focus:border-[var(--thired-Color)] focus:border-t-transparent focus:bg-gray-50 focus:outline-0 disabled:border-0 peer-placeholder-shown:border-t-transparent"
          placeholder=" "
          {...rest}
        />
        <label className="peer-placeholder-shown:text-blue-gray-500 peer-disabled:peer-placeholder-shown:text-blue-gray-500 before:content[' '] after:content[' '] text-blue-gray-400 before:border-blue-gray-200 after:border-blue-gray-200 pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[var(--thired-Color)] peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:!border-[var(--thired-Color)] peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:!border-[var(--thired-Color)] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent">
          {labelText}
        </label>
      </div>

      {isError && (
        <div
          className="mt-1 rounded-lg bg-red-50 p-2 text-sm text-red-800 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          <span className="font-medium"> {error}</span>
        </div>
      )}
    </div>
  );
}

export { CustomeInput };


{/* <input
        type="text"
        class="w-full h-10 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
        placeholder="MM/YY"
        maxlength="5"
        pattern="\d{2}/\d{2}"
        oninput="this.value = this.value.replace(/[^0-9]/g, '').replace(/(\d{2})(\d{1,2})/, '$1/$2').substring(0, 5);"
      /> */}
