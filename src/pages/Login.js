import { useEffect, useRef, useState } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase";
export function Login() {
  const [phone, setPhone] = useState("");
  const [value, setValue] = useState("");
  const recaptchaVerifier = useRef();
  const confirmationResult = useRef();

  useEffect(() => {
    recaptchaVerifier.current = new RecaptchaVerifier(
      "recaptcha-container",
      {},
      auth
    );
  }, []);

  const onClickLogin = async () => {
    const phoneNumber = "+976" + phone;
    console.log(phoneNumber);
    confirmationResult.current = await signInWithPhoneNumber(
      auth,
      phoneNumber,
      recaptchaVerifier.current
    );

    setPhone("");
  };
  const onClickCheckCode = async () => {
    const code = value;
    await confirmationResult.current.confirm(code);


   
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="utasnii dugaaraa bich"
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />
      <button onClick={onClickLogin}>send</button>
      <input
        type="text"
        placeholder="batalgaajuulah code oo oruul"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button onClick={onClickCheckCode}>confirm</button>
      <div id="recaptcha-container"></div>
    </div>
  );
}

 