import empty from '../../../../assets/emptyCart.svg';

function EmptyCart() {
  return (
    <div className='flex justify-center items-center flex-col my-10'>
      <img src={empty} alt="empty" className='w-[40%] h-[40%]'/>
      <p className="text-center text-xl font-bold mt-10">No Product Found</p>
    </div>
  );
}

export default EmptyCart;
