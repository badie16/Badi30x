'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeSwitcher() {
	const { resolvedTheme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	// Mounted flag avoids hydration mismatch for theme (intentional pattern)
	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setMounted(true);
	}, []);

	const isDark = mounted && resolvedTheme === 'dark';

	return (
		<button
			type="button"
			aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
			onClick={() => setTheme(isDark ? 'light' : 'dark')}
			className="flex min-h-[40px] min-w-[40px] w-fit items-center justify-center rounded-full border border-primary/20 p-2.5 transition-[color,background-color,transform] hover:bg-primary/5 active:scale-[0.96] sm:p-3.5"
		>
			<span className="relative size-[18px]" aria-hidden="true">
				<Moon
					className={`absolute inset-0 size-full transition-all duration-300 ${isDark ? 'scale-100 opacity-100' : 'scale-25 opacity-0'}`}
				/>
				<Sun
					className={`size-full transition-all duration-300 ${isDark ? 'scale-25 opacity-0' : 'scale-100 opacity-100'}`}
				/>
			</span>
		</button>
	);
}
