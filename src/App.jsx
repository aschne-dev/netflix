import { Route, Routes } from "react-router";
import Header from "./components/Header";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import { AuthProvider } from "./utils/AuthContext";
import PrivateRoutes from "./utils/PrivateRoutes";

export default function App() {
  return (
    <div>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}
