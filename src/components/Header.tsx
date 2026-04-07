"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, Terminal, Languages } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/LanguageProvider";
import { getDictionary } from "@/lib/dictionary";

interface NavItem {
	name: "Home" | "Skills" | "Projects" | "Education" | "Contact";
	href: string;
	external?: boolean;
}

const navItems: NavItem[] = [
	{ name: "Home", href: "#" },
	{ name: "Skills", href: "#skills" },
	{ name: "Projects", href: "#projects" },
	{ name: "Education", href: "#education" },
	{ name: "Contact", href: "#contact" },
];

export default function Header() {
	const { language, toggleLanguage } = useLanguage();
	const t = getDictionary(language);
	const labels = {
		Home: t.nav.home,
		Skills: t.nav.skills,
		Projects: t.nav.projects,
		Education: t.nav.education,
		Contact: t.nav.contact,
	};

	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState("");

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					} else if (window.scrollY < 100) {
						setActiveSection("");
					}
				});
			},
			{ root: null, rootMargin: "-20% 0px -35% 0px", threshold: 0.1 },
		);

		navItems.forEach((item) => {
			if (item.href.startsWith("#") && item.href !== "#") {
				const sectionId = item.href.substring(1);
				const element = document.getElementById(sectionId);
				if (element) observer.observe(element);
			}
		});

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
			observer.disconnect();
		};
	}, []);

	return (
		<header
			className={cn(
				"fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
				scrolled
					? "bg-black/80 backdrop-blur-md border-white/10 py-4"
					: "bg-transparent py-6",
			)}
		>
			<div className="max-w-7xl mx-auto px-4 md:px-10 flex justify-between items-center">
				<Link
					href="#"
					className="flex items-center gap-2 text-xl font-bold tracking-tighter"
				>
					<Terminal className="w-6 h-6 text-primary" />
					<span>
						Badi30x<span className="text-primary">.</span>
					</span>
				</Link>

				<div className="hidden md:flex items-center gap-6">
					<nav className="flex items-center gap-8">
						{navItems.map((item) => {
							const isActive =
								activeSection === item.href.substring(1) ||
								(item.href === "#" && activeSection === "");
							const isExternal = item.external;

							return (
								<Link
									key={item.name}
									href={item.href}
									target={isExternal ? "_blank" : undefined}
									className={cn(
										"text-sm font-medium transition-colors relative",
										isActive && !isExternal
											? "text-white"
											: "text-muted-foreground hover:text-white",
									)}
								>
									{labels[item.name]}
									{isActive && !isExternal && (
										<motion.div
											layoutId="activeNav"
											className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											transition={{ duration: 0.3 }}
										/>
									)}
								</Link>
							);
						})}
					</nav>

					<button
						onClick={toggleLanguage}
						className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors"
						aria-label={t.nav.switchLabel}
					>
						<Languages className="w-4 h-4 text-primary" />
						{language === "fr" ? "FR" : "EN"}
					</button>
				</div>

				<button
					className="md:hidden text-white p-3 -mr-3 min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
					onClick={() => setIsOpen(!isOpen)}
					aria-label={isOpen ? "Close menu" : "Open menu"}
					aria-expanded={isOpen}
				>
					{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
				</button>
			</div>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-b border-white/10 overflow-hidden md:hidden"
					>
						<nav className="flex flex-col p-4 gap-2">
							{navItems.map((item, index) => (
								<motion.div
									key={item.name}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: -20 }}
									transition={{ delay: index * 0.1, duration: 0.2 }}
								>
									<Link
										href={item.href}
										target={item.external ? "_blank" : undefined}
										className="block text-lg font-medium text-muted-foreground hover:text-white transition-colors py-3 px-4 rounded-lg hover:bg-white/5 min-h-[44px] touch-manipulation"
										onClick={() => setIsOpen(false)}
									>
										{labels[item.name]}
									</Link>
								</motion.div>
							))}
							<button
								onClick={toggleLanguage}
								className="mt-2 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-left text-lg font-medium text-white hover:bg-white/10 transition-colors min-h-[44px]"
								aria-label={t.nav.switchLabel}
							>
								<Languages className="w-5 h-5 text-primary" />
								{language === "fr" ? "EN" : "FR"}
							</button>
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
