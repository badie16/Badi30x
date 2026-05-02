'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
	theme: Theme;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setTheme] = useState<Theme>('dark');
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		
		// Check localStorage or system preference
		const storedTheme = localStorage.getItem('theme') as Theme | null;
		
		if (storedTheme) {
			setTheme(storedTheme);
			document.documentElement.setAttribute('data-theme', storedTheme);
		} else {
			// Check system preference
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			const initialTheme = prefersDark ? 'dark' : 'light';
			setTheme(initialTheme);
			document.documentElement.setAttribute('data-theme', initialTheme);
		}
	}, []);

	const toggleTheme = () => {
		setTheme((prevTheme) => {
			const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
			localStorage.setItem('theme', newTheme);
			document.documentElement.setAttribute('data-theme', newTheme);
			return newTheme;
		});
	};

	// Prevent flash of wrong theme
	if (!mounted) {
		return <>{children}</>;
	}

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
}
