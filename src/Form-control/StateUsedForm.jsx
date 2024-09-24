import { useState } from "react";

const StateUsedForm = () => {
  
  const [name, setName] = useState("Enter Your Name");
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if(password.length < 6){
      setError("Your password must be 6 or more character")
    }
    else{
      setError("");
    }
  }
  const handleName = e => {
    setName(e.target.value);
    console.log(name);
  }
  const handleEmail = e => {
    setEmail(e.target.value);
    console.log(email)
  }
  const handlePassword = e => {
    setPassword(e.target.value);
    console.log(password)
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={name} type="text" 
          onChange={handleName}
        name="name" required />
        <br />
        <input  type="email" 
          onChange={handleEmail}
        name="email" placeholder="Enter your email" id="" required />
        <br />
        <input type="password" name="password" 
          onChange={handlePassword}
        id="" required />
        <br />
        <input type="submit" value="Submit" required />
      </form>
      {
        error && <h2>{error}</h2>
      }
    </div>
  );
};

export default StateUsedForm;