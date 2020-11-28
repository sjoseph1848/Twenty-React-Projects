import React, {useState} from 'react';

const Form = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    let error = password === password2 ? true : false;

    const onSubmit = e => {
        e.preventDefault();
        
        console.log(error);
        console.log(password);
        console.log(password2);
    }


  return (
    <div className='container'>
      <form onSubmit={onSubmit} className='form'>
        <h2>Sign Up</h2>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input onChange={(e) => setUsername(e.target.value)} type="text" id="username" placeholder="Enter username" />
          <small>Error message</small>
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" placeholder="Enter password" />
          <small>Error message</small>
        </div>
        <div className={error ? "form-control": "form-control error"}>
          <label htmlFor="password2">Confirm Password</label>
          <input
            onChange={(e) => setPassword2(e.target.value)}
            type="password"
            id="password2"
            placeholder="Enter password again"
          />
          <small>Error message</small>
        </div>
        <button type="submit" disabled={!error}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
