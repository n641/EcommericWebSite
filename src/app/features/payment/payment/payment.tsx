import SetUpAddress from './components/setUpAddress/setUpAddress';
import SetUpPayment from './components/setUpPayment/setUpPayment';
function Payment({ setChoosenAddress, ChoosenAddress }: any) {
  return (
    <div>
      <SetUpAddress
        setChoosenAddress={setChoosenAddress}
        ChoosenAddress={ChoosenAddress}
      />

      <SetUpPayment />
    </div>
  );
}

export { Payment };
