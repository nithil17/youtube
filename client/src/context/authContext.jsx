import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({

    children
}
){
    const [token, setToken] = useState(
        localStorage.getItem("token") || ""
    );

    const [user, setUser] = useState(null);

    const login = (
        newToken, userData
    ) =>{
        localStorage.setItem("token",newToken);

        setToken(newToken);

        setUser(userData);
    };


    const logout = ()=>{
        localStorage.removeItem("token" );

        setToken("");

        setUser(null);
    };

     useEffect(() => {

        const savedToken = localStorage.getItem(

            "token"

        );

        if (savedToken) {

            setToken(savedToken);

        }

    }, []);

       return (

        <AuthContext.Provider

            value={{

                token,

                user,

                login,

                logout,

                isAuthenticated: !!token

            }}

        >

            {children}

        </AuthContext.Provider>

    );

}

export default AuthProvider;