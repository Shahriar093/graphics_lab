import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

/**
 * PrivateRoute ensures that only those who have joined our
 * peaceful community can access specific sanctuary features.
 */
const PrivateRoute = () => {
  const { currentUser } = useSelector((state) => state.user);

  // If the user is authenticated, allow them into the inner "sanctuary" (গোপন বা শান্ত কক্ষ)
  // Otherwise, gently guide them back to the Sign In page.
  return currentUser ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
