import React, { useState } from "react";
import { useAuth } from "../../context/AuthContextProvider";

const Register = () => {
  const { handleRegister, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSave = () => {
    if (!email.trim() || !password.trim() || !passwordConfirm.trim()) {
      alert("Заполните все поля");
    } else {
      let formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      formData.append("password_confirm", passwordConfirm);

      handleRegister(formData);
      console.log(formData);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ width: "300px", marginBottom: "20px" }}>Register</h1>
      {error ? <h2>{error}</h2> : null}
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
      <input
        style={{ width: "300px", marginBottom: "20px" }}
        type="password"
        placeholder="Подтвердите пароль"
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
      <button
        onClick={handleSave}
        style={{ width: "300px", marginBottom: "20px" }}
      >
        Register
      </button>
    </div>
  );
};

export default Register;
