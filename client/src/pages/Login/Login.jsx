import React from 'react'

import { useState } from 'react'
import { loginUser } from '../../services/authServices'

import(loginUser)

import "./Login.css";

const Login = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    passowrd: ""
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {

      const data = await loginUser(formData);

      localStorage.setItem(

        "token",
        data.token
      );

      alert("login Successful");
      navigate("/");

    } catch (error) {
      alert(error.message);
    }

  }


  return (
    <div className="login-container">

      <h2>Login</h2>

      <form onSubmit={handleSubmit}>

        <input

          type="email"

          name="email"

          placeholder="Email"

          value={formData.email}

          onChange={handleChange}

          required

        />

        <input

          type="password"

          name="password"

          placeholder="Password"

          value={formData.password}

          onChange={handleChange}

          required

        />

        <button type="submit">

          Login

        </button>

      </form>

    </div>
  )
}

export default Login