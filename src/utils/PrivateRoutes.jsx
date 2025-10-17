import { Navigate, Outlet } from "react-router";

const PrivateRoutes = () => {
  const user = false;
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
