import SetUpAddress from './components/setUpAddress/setUpAddress';
import SetUpPayment from './components/setUpPayment/setUpPayment';
function Payment({ setChoosenAddress, ChoosenAddress , ChoosePaymentOption , setChoosePaymentOption}: any) {
  return (
    <div>
      <SetUpAddress
        setChoosenAddress={setChoosenAddress}
        ChoosenAddress={ChoosenAddress}
      />

      <SetUpPayment ChoosePaymentOption={ChoosePaymentOption}
                 setChoosePaymentOption={setChoosePaymentOption}/>
    </div>
  );
}

export { Payment };
