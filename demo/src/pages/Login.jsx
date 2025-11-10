import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { useFirebase } from "../context/firebase";

function Login() {
    const firebase = useFirebase();
    console.log(firebase.isLoggedIn)
    const navigate = useNavigate();

    useEffect(() => {
        if (firebase.isLoggedIn) {
            navigate("/dashboard");
        }

    }, [firebase.isLoggedIn, navigate]);


    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = formData;

        try {
            const userCredential = await firebase.signinWithEmailAndPassword(email, password);
            console.log("User Registered Successfully:", userCredential.user);
            alert("User login successfully!");
            setFormData({ email: "", password: "" });
        } catch (error) {
            console.error("login Error:", error.message);
            alert(error.message);
        }
    };



    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                backgroundColor: "#f3f4f6",
            }}
        >
            <form
                onSubmit={handleSubmit}
                style={{
                    background: "white",
                    padding: "2rem",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    width: "300px",
                }}
            >
                <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Login</h2>

                <label htmlFor="email" style={{ fontWeight: "bold" }}>
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                        width: "100%",
                        padding: "8px",
                        marginBottom: "1rem",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                    }}
                />

                <label htmlFor="password" style={{ fontWeight: "bold" }}>
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    style={{
                        width: "100%",
                        padding: "8px",
                        marginBottom: "1rem",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                    }}
                />

                <button
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "10px",
                        backgroundColor: "#2563eb",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "16px",
                    }}
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
