import React, { FC, ReactNode, useState, useEffect, createContext } from "react";
import { useTranslation } from "react-i18next";

interface TranslatorProviderProps {
	children: ReactNode;
}

interface TranslatorContextValues {
	t: Function;
	changeLanguage: (language: string) => Promise<void>;
	isInitialized: boolean;
}

export const TranslatorContext = createContext<TranslatorContextValues>({
	t: () => "",
	changeLanguage: async () => {
	},
	isInitialized: false
});

export const TranslatorProvider: FC<TranslatorProviderProps> = ({ children }) => {
	const { t, i18n } = useTranslation();
	const [isInitialized, setIsInitialized] = useState(false);

	useEffect(() => {
		const loadNamespaces = async () => {
			await i18n.loadNamespaces("translation");
			setIsInitialized(true);
		};
		loadNamespaces();
	}, [i18n]);

	const changeLanguage = async (language: string) => {
		await i18n.changeLanguage(language);
		await i18n.loadNamespaces("translation");
	};

	const contextValues = {
		t,
		changeLanguage,
		isInitialized
	};

	if (!isInitialized) {
		return <div>Loading...</div>;
	}

	return (
		<TranslatorContext.Provider value={contextValues}>
			{children}
		</TranslatorContext.Provider>
	);
};
