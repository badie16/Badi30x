"use client";

import { motion } from "framer-motion";
import {
	Code2,
	GraduationCap,
	MapPin,
	Shield,
	TerminalSquare,
} from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { getDictionary } from "@/lib/dictionary";

export default function Hero() {
	const { language } = useLanguage();
	const t = getDictionary(language);

	return (
		<section className="min-h-screen flex flex-col justify-center px-4 md:px-10 pt-24 relative overflow-hidden">
			<div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.16),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.12),transparent_28%)]" />
			<div className="absolute top-0 right-0 w-[420px] h-[420px] bg-primary/15 rounded-full blur-[140px] -z-10" />

			<div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs md:text-sm text-muted-foreground mb-6">
						<Shield className="w-4 h-4 text-primary" />
						{t.hero.badge}
					</div>
					<h2 className="text-sm md:text-base font-medium text-muted-foreground mb-4 tracking-[0.3em] uppercase">
						{t.hero.subtitle}
					</h2>
					<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-6">
						Badie <br />
						<span className="text-muted-foreground">BAHIDA</span>
					</h1>
					<p className="text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed">
						{t.hero.description}
					</p>

					<div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-8">
						<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
							<MapPin className="w-4 h-4 text-primary" />
							{t.hero.location}
						</span>
						<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
							<GraduationCap className="w-4 h-4 text-primary" />
							ENSIASD
						</span>
						<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
							<Code2 className="w-4 h-4 text-primary" />
							Python, C, JavaScript
						</span>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
						<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
							<p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">
								Focus
							</p>
							<p className="text-white font-semibold">
								{language === "en" ? "Pentesting, SOC, AppSec" : "Pentest, SOC, AppSec"}
							</p>
						</div>
						<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
							<p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">
								Stack
							</p>
							<p className="text-white font-semibold">
								Next.js, FastAPI, PostgreSQL
							</p>
						</div>
						<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
							<p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">
								{t.hero.cards.interest}
							</p>
							<p className="text-white font-semibold">
								{t.hero.cards.ai}
							</p>
						</div>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="relative w-full rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-8 shadow-2xl shadow-black/40 transition-all duration-500"
				>
					<div className="absolute inset-0 rounded-[2rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_35%)]" />
					<div className="relative grid gap-4">
						<div className="rounded-3xl border border-white/10 bg-black/40 p-5 md:p-6 backdrop-blur-sm">
							<p className="text-xs uppercase tracking-[0.35em] text-primary mb-4">
								{t.hero.cards.targetProfile}
							</p>
							<h3 className="text-2xl md:text-3xl font-bold mb-3">
								{t.hero.cards.mainTitle}
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								{t.hero.cards.mainText}
							</p>
						</div>

						<div className="grid sm:grid-cols-2 gap-4">
							<div className="rounded-2xl border border-white/10 bg-black/30 p-4">
								<p className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
									<TerminalSquare className="w-4 h-4 text-primary" />
									{t.hero.cards.targetRole}
								</p>
								<p className="text-white font-semibold">
									{t.hero.cards.roleValue}
								</p>
							</div>
							<div className="rounded-2xl border border-white/10 bg-black/30 p-4">
								<p className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
									<Shield className="w-4 h-4 text-primary" />
									{t.hero.cards.appliedSecurity}
								</p>
								<p className="text-white font-semibold">
									{t.hero.cards.securityValue}
								</p>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
