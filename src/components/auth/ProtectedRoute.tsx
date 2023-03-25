import React, { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../../provider/AuthProvider";

interface ProtectedRouteProps {
	children: ReactNode;
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
	const { user } = UserAuth();
	if (!user) {
		return <Navigate to="/login" />;
	}

	return <>{children}</>;
};