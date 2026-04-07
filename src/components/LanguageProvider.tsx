"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "fr" | "en";

type LanguageContextValue = {
	language: Language;
	setLanguage: (language: Language) => void;
	toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "portfolio-language";

export function LanguageProvider({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	const [language, setLanguageState] = useState<Language>("fr");

	useEffect(() => {
		try {
			const storedLanguage = window.localStorage.getItem(
				STORAGE_KEY,
			) as Language | null;
			if (storedLanguage === "fr" || storedLanguage === "en") {
				setLanguageState(storedLanguage);
				return;
			}

			const browserLanguage = window.navigator.language.toLowerCase();
			if (browserLanguage.startsWith("en")) {
				setLanguageState("en");
			}
		} catch {
			// Keep the default language if storage is not available.
		}
	}, []);

	useEffect(() => {
		try {
			window.localStorage.setItem(STORAGE_KEY, language);
		} catch {
			// Ignore persistence failures.
		}

		document.documentElement.lang = language;
	}, [language]);

	const value = useMemo<LanguageContextValue>(
		() => ({
			language,
			setLanguage: (nextLanguage) => setLanguageState(nextLanguage),
			toggleLanguage: () =>
				setLanguageState((currentLanguage) =>
					currentLanguage === "fr" ? "en" : "fr",
				),
		}),
		[language],
	);

	return (
		<LanguageContext.Provider value={value}>
			{children}
		</LanguageContext.Provider>
	);
}

export function useLanguage() {
	const context = useContext(LanguageContext);

	if (!context) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}

	return context;
}
