import { useRef } from 'react';

const OTPInput = ({email}: any) => {
  const inputsRef: any = useRef([]);

  const handleChange = (value :any, index :number) => {
    const digit = value.replace(/[^0-9]/g, ''); // Allow only digits
    inputsRef.current[index].value = digit; // Set the value in the current input

    if (digit && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1].focus(); // Move to the next input
    }
  };

  const handleBackspace = (event :any, index :number ) => {
    if (event.key === 'Backspace' && !event.currentTarget.value && index > 0) {
      inputsRef.current[index - 1].focus(); // Move to the previous input
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <p className="text-sm text-slate-800">
        Enter the 6-digit OTP sent to{' '}
        <span className="font-bold">{email}</span>
      </p>

      <div className="flex items-center space-x-2">
        {[...Array(6)].map((_, i) => (
          <input
            key={i}
            type="text"
            maxLength={1}
            className="h-10 w-10 rounded border border-slate-200 text-center text-xl text-slate-700 shadow-sm hover:border-slate-400 focus:border-slate-400 focus:shadow-md focus:outline-none"
            onChange={(e) => handleChange(e.target.value, i)}
            onKeyDown={(e) => handleBackspace(e, i)}
            ref={(el) => (inputsRef.current[i] = el)}
          />
        ))}
        <span className="mx-2 text-2xl text-slate-700">-</span>
      </div>

      <p className="mt-4 text-xs text-slate-500">
        Did not receive the code?{' '}
        <span className="cursor-pointer font-bold">Resend</span>
      </p>
    </div>
  );
};

export default OTPInput;
