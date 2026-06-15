import { API_URL } from "../constants/api";

const API = `${API_URL}/auth`;

// ===========================
// REGISTER USER
// ===========================

export const registerUser = async (userData) => {

  const response = await fetch(`${API}/register`, {

    method: "POST",

    headers: {

      "Content-Type": "application/json"

    },

    body: JSON.stringify(userData)

  });

  const data = await response.json();

  if (!response.ok) {

    throw new Error(

      data.message || "Registration failed"

    );

  }

  return data;

};

// ===========================
// LOGIN USER
// ===========================

export const loginUser = async (userData) => {

  const response = await fetch(`${API}/login`, {

    method: "POST",

    headers: {

      "Content-Type": "application/json"

    },

    body: JSON.stringify(userData)

  });

  const data = await response.json();

  if (!response.ok) {

    throw new Error(

      data.message || "Login failed"

    );

  }

  return data;

};

// ===========================
// RESET PASSWORD
// ===========================

export const resetPassword = async (userData) => {

  const response = await fetch(

    `${API}/reset-password`,

    {

      method: "PUT",

      headers: {

        "Content-Type": "application/json"

      },

      body: JSON.stringify(userData)

    }

  );

  const data = await response.json();

  if (!response.ok) {

    throw new Error(

      data.message || "Reset password failed"

    );

  }

  return data;

};