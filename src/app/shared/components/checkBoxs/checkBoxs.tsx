
function CheckBoxs({ data, setSelectedData }: any) {
  return (
    <div>
      <div className="flex flex-col gap-3">
        {data?.map((item: any) => (
          <label className="flex items-center">
            <input
              type="checkbox"
              name="item1"
              onChange={(val) => {
                setSelectedData(item, val);
              }}
              className="cursor-pointer form-checkbox mr-2 h-4 w-4 rounded-md text-red-600 focus:ring-red-500"
            />
            <p className="text-[10px] font-semibold">{item?.name}</p>
          </label>
        ))}
      </div>
    </div>
  );
}

export { CheckBoxs };
