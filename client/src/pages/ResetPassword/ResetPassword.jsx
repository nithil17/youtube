import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "../../services/authServices";
import "./ResetPassword.css";

const ResetPassword = () => {

  // Form State
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Handle Input Change
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  // Reset Password
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      setError("");

      await resetPassword({
        email: formData.email,
        password: formData.password
      });

      alert("Password updated successfully");

      navigate("/login");

    } catch (error) {

      setError(error.message);

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="reset-container">

      <form
        className="reset-form"
        onSubmit={handleSubmit}
      >

        <h2>Reset Password</h2>

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
          placeholder="New Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          disabled={loading}
        >

          {
            loading
              ? "Updating..."
              : "Reset Password"
          }

        </button>

      </form>

    </div>
  );

};

export default ResetPassword;