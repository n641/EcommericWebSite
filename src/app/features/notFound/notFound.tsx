import NotFoundImg from '../../../assets/notFound.svg';
function NotFound() {
  return (
    <div className='flex justify-center items-center flex-col'>
      <img src={NotFoundImg} className='w-[50%] h-[50%]' alt="" />
      <h1 className='text-3xl font-bold mt-10'>Screen Not Found</h1>
    </div>
  );
}

export { NotFound };
