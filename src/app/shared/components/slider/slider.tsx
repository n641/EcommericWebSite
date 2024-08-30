import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Image3 from '../../../../assets/png/undraw_delivery_truck_vt6p.svg';
import Image1 from '../../../../assets/png/undraw_joyride_re_968t.svg';
import Image2 from '../../../../assets/png/undraw_shopping_app_flsj.svg';

const RenderItem1 = ({ backgroundColor, Image, title }: any) => {
  return (
    <div className="px-2 pb-2">
      <div
        className={`flex h-[400px] w-full flex-col items-center justify-around gap-6 rounded-3xl bg-[${backgroundColor}] p-4 shadow-md md:flex-row 2xl:justify-evenly `}
      >
        <img src={Image} alt="image" className="w-[30%] max-w-[430px]" />

        <div className="flex w-[40%] max-w-[420px] flex-col items-start  space-y-3 lg:items-start">
          <h1 className="font-serif text-[1.2rem] font-bold uppercase md:text-[2.5rem] ">
            {title}
          </h1>

          <div className="flex flex-wrap items-center gap-3">
            <button className="w-[180px] rounded-lg bg-black py-3.5 text-sm font-semibold text-white">
              Buy Now
            </button>

            <button className="w-[180px] rounded-lg border-2 border-black p-3 text-sm font-semibold text-black">
              Explor More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
    
function MainSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="my-5">
      <Slider {...settings} className="">
        <RenderItem1
          Image={Image1}
          backgroundColor={'var(--second-Color)'}
          title={'Save Your Time Buy Online Now'}
        />
        <RenderItem1
          Image={Image2}
          backgroundColor={'var(--fifth-Color)'}
          title={'Make Your Shopping Easier'}
        />
        <RenderItem1
          Image={Image3}
          backgroundColor={'var(--second-Color)'}
          title={'Order Your Favourite Products'}
        />
      </Slider>
    </div>
  );
}

export { MainSlider };
