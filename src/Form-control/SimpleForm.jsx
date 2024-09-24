
const SimpleForm = () => {
  
  const handleSubmit = event => {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    console.log("Form Submitted")
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" required />
        <br />
        <input type="email" name="email" id="" required />
        <br />
        <input type="password" name="password" id="" required/>
        <br />
        <input type="submit" value="Submit" required/>
      </form>
    </div>
  );
};

export default SimpleForm;