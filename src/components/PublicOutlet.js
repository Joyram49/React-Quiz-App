import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

const PublicOutlet = () => {
  const { currentUser } = useAuth();
  return !currentUser ? <Outlet /> : <Navigate to='/' />;
};

export default PublicOutlet;