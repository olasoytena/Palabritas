import { useState } from "react";
import "../css/Login.css";

export const Login = () => {
    const [loginData, setLoginData] = useState({ username: "", password: "" });
    const [registerData, setRegisterData] = useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
    });

    const handleLoginChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleRegisterChange = (e) => {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    };

    const handleLogin = () => {
        console.log("Ingresando con:", loginData);
    };

    const handleRegister = () => {
        if (registerData.password !== registerData.confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }
        console.log("Registrando con:", registerData);
    };

    return (
        <div className="login-container">
            {/* Sección de Login */}
            <div className="login-section">
                <h2>Iniciar Sesión</h2>
                <input
                    type="text"
                    name="username"
                    placeholder="Nombre de usuario"
                    value={loginData.username}
                    onChange={handleLoginChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={loginData.password}
                    onChange={handleLoginChange}
                />
                <button onClick={handleLogin}>Ingresar</button>
            </div>

            {/* Línea Divisoria */}
            <div className="divider"></div>

            {/* Sección de Registro */}
            <div className="register-section">
                <h2>Registrarse</h2>
                <input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    value={registerData.email}
                    onChange={handleRegisterChange}
                />
                <input
                    type="text"
                    name="username"
                    placeholder="Nombre de usuario"
                    value={registerData.username}
                    onChange={handleRegisterChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={registerData.password}
                    onChange={handleRegisterChange}
                />
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirmar contraseña"
                    value={registerData.confirmPassword}
                    onChange={handleRegisterChange}
                />
                <button onClick={handleRegister}>Registrar</button>
            </div>
        </div>
    );
};
