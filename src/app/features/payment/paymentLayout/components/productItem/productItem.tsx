function ProductItem({item , className}: any) {
  return (
    <div className={`flex items-center gap-5 rounded-xl bg-white p-2 shadow-xl xl:w-full ${className}`}>
      <img
        src={item?.product?.imageCover}
        alt="productImg"
        className="h-[140px] w-[160px] rounded-xl object-cover xl:w-[50%]"
      />

      <div className="text-left">
        <p className="text-[12px] font-medium text-gray-500">{item?.product?.category?.name}</p>
        <p className="text-md font-bold text-gray-500">{item?.product?.title}</p>
        <p className="text-md font-bold text-[var(--fifth-Color)]">Qty .{item?.count}</p>
      </div>
    </div>
  );
}

export default ProductItem;
