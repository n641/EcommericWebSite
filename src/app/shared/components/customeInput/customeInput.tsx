interface Props {
  labelText: string;
  [key: string]: any;
}

function CustomeInput({ labelText, isError, error, ...rest }: Props) {
  return (
    <div className="group relative z-0 mb-5 w-full">
      <input
        id={labelText}
        className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
        placeholder=" "
        {...rest}
      />
      <label
        htmlFor={labelText}
        className="absolute top-3 z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500 rtl:peer-focus:translate-x-1/4"
      >
        {labelText}
      </label>

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
