import AdvertiesmentItem from './components/advertiesmentItem';
import Image1 from '../../../../../assets/png/partner.svg';
import Image2 from '../../../../../assets/png/money.svg';
function AdvertiesmentSection() {
  return (
    <div className='grid lg:grid-cols-2 gap-5 mt-10 items-center'>
      <AdvertiesmentItem
        image={Image1}
        title={'Become Partner'}
        subTitle={'Let\'s Become partner with 5% equity '}
      />
      <AdvertiesmentItem
        image={Image2}
        title={'Start Making Money'}
        subTitle={'Start salling your product and making money '}
      />
    </div>
  );
}

export default AdvertiesmentSection;
