import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [showSignup, setShowSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    if (!/^\d{10}$/.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    navigate("/");
  };

  const handleSignup = () => {
    if (!name.trim() || !email.trim() || !password.trim()) {
      alert("Please fill all fields.");
      return;
    }

    navigate("/");
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>{showSignup ? "Create Account" : "Login"}</h2>

        {!showSignup ? (
          <>
            <div className="input-group">
              <span>🇮🇳 +91</span>
              <input
                type="tel"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <button className="login-btn" onClick={handleLogin}>
              Login
            </button>

            <div className="or-line">or</div>

            <button className="email-btn">📧 Continue with Email</button>
            <button className="google-btn">🔵 Sign in with Google</button>

            <p className="bottom-text">
              New to our app?{" "}
              <span onClick={() => setShowSignup(true)} className="link-text">
                Create account
              </span>
            </p>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Set password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="login-btn" onClick={handleSignup}>
              Create Account
            </button>

            <p className="bottom-text">
              Already have an account?{" "}
              <span onClick={() => setShowSignup(false)} className="link-text">
                Login here
              </span>
            </p>
          </>
        )}
      </div>

      {/* Background Image */}
      <div className="login-bg" />
    </div>
  );
};

export default Login;
