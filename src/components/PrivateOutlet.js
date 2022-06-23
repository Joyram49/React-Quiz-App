import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

const PrivateOutlet = () => {
  const { currentUser } = useAuth();
  return currentUser ? <Outlet /> : <Navigate to='/signup' />;
};

export default PrivateOutlet;
