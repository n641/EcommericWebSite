import { FaArrowAltCircleRight } from 'react-icons/fa';

function AdvertiesmentItem({ image, title, subTitle }: any) {
  return (
    <div className="flex items-center justify-between gap-10 rounded-xl bg-[var(--fifth-Color)] p-2 px-8">
      <div className="gap-3">
        <h1 className="md:text-3xl text-2xl font-bold">{title}</h1>
        <h1 className="text-[10px] text-gray-400">{subTitle}</h1>

        <div className="mt-5 flex cursor-pointer items-center gap-1">
          <FaArrowAltCircleRight size={15} />
          <p className="text-[12px] font-bold text-black">Go for it</p>
        </div>
      </div>
      <img
        src={image}
        alt="imag"
        className="h-[170px] w-[170px] object-contain"
      />
    </div>
  );
}

export default AdvertiesmentItem;
