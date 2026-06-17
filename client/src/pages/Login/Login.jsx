import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/authContext";
import { loginUser } from "../../services/authServices";

import "./Login.css";

const Login = () => {

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({

    email: "",

    password: ""

  });

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleChange = (event) => {

    setFormData({

      ...formData,

      [event.target.name]: event.target.value

    });

  };

  const handleSubmit = async (event) => {

    event.preventDefault();

    setLoading(true);

    setError("");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(formData.email)) {
      setError("Please enter a valid email address");
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      setLoading(false);
      return;
    }

    try {

      const data = await loginUser(formData);

      login(

        data.token,

        data.user

      );

      navigate("/");

    } catch (error) {

      setError(error.message);

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="login-container">

      <form
        className="login-form"
        onSubmit={handleSubmit}
      >

        <h2>Login</h2>

        {

          error &&

          <p className="error-message">

            {error}

          </p>

        }

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

              ? "Logging In..."

              : "Login"

          }

        </button>

        <p className="login-link">

          Don't have an account?

          <span

            onClick={() => navigate("/register")}

          >

            Register

          </span>

        </p>

        <p className="login-link">

          Forgot Password?

          <span

            onClick={() => navigate("/reset-password")}

          >

            Reset Password

          </span>

        </p>

      </form>

    </div>

  );

};

export default Login;
