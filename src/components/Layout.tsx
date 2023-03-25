import React, { FC, ReactNode } from "react";
import cn from "classnames";
import { useTheme } from "../hook/useTheme";

interface LayoutProps {
	children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
	const { isDark } = useTheme();

	return (
		<>
			<div className={cn("layout", { dark: isDark })}>{children}</div>
		</>
	);
};