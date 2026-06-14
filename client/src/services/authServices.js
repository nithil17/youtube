const API = "http://localhost:5000/api/auth";

// LOGIN

export const loginUser = async (userData) => {

    const response = await fetch(`${API}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })

    const data = await response.json();

    if (!response.ok) {

        throw new Error(data.message);

    }

    return data;

}