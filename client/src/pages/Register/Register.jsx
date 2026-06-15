

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/authServices";
import "./Register.css";

function Register() {

  // Store form data
  const [formData, setFormData] = useState({

    username: "",

    email: "",

    password: ""

  });

  // Store loading state
  const [loading, setLoading] = useState(false);

  // Store error message
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Update form fields
  const handleChange = (event) => {

    setFormData({

      ...formData,

      [event.target.name]: event.target.value

    });

  };

  // Register user
  const handleSubmit = async (event) => {

    event.preventDefault();

    setLoading(true);

    setError("");

    try {

      await registerUser(formData);

      alert("Registration Successful");

      navigate("/login");

    } catch (error) {

      setError(error.message);

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="register-container">

      <form
        className="register-form"
        onSubmit={handleSubmit}
      >

        <h2>Create Account</h2>

        {

          error &&

          <p className="error-text">

            {error}

          </p>

        }

        <input

          type="text"

          name="username"

          placeholder="Username"

          value={formData.username}

          onChange={handleChange}

          required

        />

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

        <button
          type="submit"
          disabled={loading}
        >

          {

            loading

              ? "Registering..."

              : "Register"

          }

        </button>

      </form>

    </div>

  );

}

export default Register;