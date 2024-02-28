import React, { useState } from "react";
import { useAuth } from "../../context/AuthContextProvider";
import Loader from "../homepage/Loader";

const Login = () => {
  const { error, handleLogin, loader } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSave = () => {
    if (!email.trim() || !password.trim()) {
      alert("Заполните все поля");
    } else {
      let formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      handleLogin(formData, email);
    }
  };
  if (loader) {
    return <Loader />;
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ width: "300px", marginBottom: "20px" }}>Login</h1>
      {/* {error ? <h2>{error}</h2> : null} */}
      <input
        style={{ width: "300px", marginBottom: "20px" }}
        type="text"
        placeholder="Введите почту"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        style={{ width: "300px", marginBottom: "20px" }}
        type="password"
        placeholder="Введите пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleSave}
        style={{ width: "300px", marginBottom: "20px" }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
