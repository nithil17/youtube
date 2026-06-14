import React from 'react'

import { useState, useContext } from 'react'
import { AuthContext } from "../../context/AuthContext";

import { loginUser } from '../../services/authServices';

import "./Login.css";
import { useNavigate, useNavigation } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
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

      login(

        data.token,

        data.user

      );

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