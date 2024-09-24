import { useRef } from "react";

const RefForm = () => {

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  }

  return (
    <div onSubmit={handleSubmit}>
      <form>
        <input type="text" ref={nameRef} name="name" required />
        <br />
        <input type="email" ref={emailRef} name="email" id="" required />
        <br />
        <input type="password" ref={passwordRef} name="password" id="" required />
        <br />
        <input type="submit" value="Submit" required />
      </form>
    </div>
  );
};

export default RefForm;