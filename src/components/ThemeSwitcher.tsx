'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/providers/ThemeProvider';
import { useEffect, useState } from 'react';

export function ThemeSwitcher() {
	const { theme, toggleTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	// Avoid hydration mismatch by not rendering until mounted
	if (!mounted) {
		return (
			<button
				disabled
				className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors duration-200 flex items-center justify-center opacity-50"
				aria-label="Loading theme switcher"
			>
				<Sun className="w-5 h-5 text-foreground" />
			</button>
		);
	}

	return (
		<button
			onClick={toggleTheme}
			className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors duration-200 flex items-center justify-center"
			aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
			title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
		>
			{theme === 'dark' ? (
				<Sun className="w-5 h-5 text-foreground" />
			) : (
				<Moon className="w-5 h-5 text-foreground" />
			)}
		</button>
	);
}
