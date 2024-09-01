import React from 'react'

function ProductItem() {
  return (
    <div className='flex items-center gap-5 bg-white shadow-xl p-2 rounded-xl xl:w-full'>
         <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="productImg"
            className="h-[140px] w-[160px] xl:w-[50%] rounded-xl object-cover"
          />

<div className='text-left'>
            <p className="text-[12px] font-medium text-gray-500">
              Category Name
            </p>
            <p className="text-md font-bold text-gray-500">Product Name</p>
            <p className="text-md font-bold text-[var(--fifth-Color)] ">Qty .1</p>
          </div>    

    </div>
  )
}

export default ProductItem