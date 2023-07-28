import { useState } from 'react';

export default function ValidatedInput({ errorText, className }) {
  const [password, setPassword] = useState('');

  function handleChange(e) {
    e.preventDefault();
    setPassword(e.target.value);
  }
  if (!password.length) {
    className = 'is-invalid';
    errorText = 'A password is required';
  } else if (password.length !== 0 && password.length < 8) {
    className = 'is-invalid';
    errorText = 'Your Password is too short';
  } else if (password.length >= 8) {
    className = 'is-valid';
  } else {
    errorText = '';
  }

  return (
    <form className="row g-3">
      <div className="col-6">
        <label className="form-label">Password</label>
        <input
          className={`form-control ${className}`}
          id="validationPassword"
          type="password"
          onChange={handleChange}
          value={password}
        />
      </div>
      <div className="col-12 mt-2">
        <div>{errorText}</div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

// is-valid
