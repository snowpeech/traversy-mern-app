import React, { Fragment, useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
      e.preventDefault();
      if(password !== password2){
        console.log('Passwords don't match)
      } else {
          console.log(formData);
      }
  }

  return (
    <Fragment>
      <h1 class='large text-primary'>Sign Up</h1>
      <p class='lead'>
        <i class='fas fa-user' /> Create Your Account
      </p>
      <form class='form' onSubmit = {e=>onSubmit(e)}>
        <div class='form-group'>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div class='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={name}
            onChange={e => onChange(e)}
            required
          />
          <small class='form-text'>
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div class='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            minLength='6'
            value={password}
            onChange={e => onChange(e)}
          />
        </div>
        <div class='form-group'>
          <input
            type='password'
            placeholder='Confirm Password'
            name='password2'
            minLength='6'
            value={password2}
            onChange={e => onChange(e)}
          />
        </div>
        <input type='submit' class='btn btn-primary' value='Register' />
      </form>
      <p class='my-1'>
        Already have an account? <a href='login.html'>Sign In</a>
      </p>
    </Fragment>
  );
};

export default Register;
