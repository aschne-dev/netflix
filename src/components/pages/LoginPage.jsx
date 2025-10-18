import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../utils/AuthContext";

export default function LoginPage() {
  // STATE
  const { user } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log("user=" + user);
    if (user) {
      navigate("/");
    }
  }, []);

  // RENDER
  return (
    <div>
      <div className="pattern" />

      <div className="wrapper">
        <div className="flex justify-center">
          <form className="login-page">
            <label className="">Email :</label>
            <input
              required
              type="text"
              value={email}
              onChange={(e) => setEmail(e.value)}
              placeholder="Enter Email"
            />

            <label className="">Password :</label>
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.value)}
              placeholder="Enter Password"
            />

            <button>Login</button>
            <p>Don't have an account yet ? Register</p>
          </form>
        </div>
      </div>
    </div>
  );
}
