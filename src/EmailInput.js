import { useState } from 'react';


function EmailInput() {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={handleChange}
        placeholder="Enter your email"
        required
      />
      <button type="submit">Subscribe</button>
    </form>
  )
}
 export default EmailInput;