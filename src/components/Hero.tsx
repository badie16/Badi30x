"use client";

import { motion } from "framer-motion";
import { Code2, GraduationCap, MapPin, Shield } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { getDictionary } from "@/lib/dictionary";

export default function Hero() {
	const { language } = useLanguage();
	const t = getDictionary(language);

	return (
		<section className="min-h-screen flex flex-col justify-center px-4 md:px-10 pt-24 relative overflow-hidden">
			<div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.16),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.12),transparent_28%)]" />
			<div className="absolute top-0 right-0 w-105 h-105 bg-primary/15 rounded-full blur-[140px] -z-10" />

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

					
				</motion.div>

				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="relative w-full rounded-4xl border border-emerald-400/20 bg-[#000000] p-3 md:p-4  transition-all duration-500 overflow-hidden"
				>
					<div className="absolute inset-0 rounded-4xl bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.12),transparent_45%)]" />
					<div className="relative rounded-[1.35rem] border border-emerald-400/20 bg-[#000000]">
						<div className="flex items-center justify-between border-b border-emerald-400/15 px-4 py-3">
							<div className="flex items-center gap-2">
								<span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
								<span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
								<span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
							</div>
							<p className="text-[11px] md:text-xs text-emerald-300/80 font-mono">
								security-terminal
							</p>
						</div>

						<div className="p-4 md:p-5 font-mono text-xs md:text-sm leading-relaxed space-y-3 text-emerald-300">
							<p className="text-emerald-200">
								<span className="text-emerald-400">badie@kali</span>:
								<span className="text-sky-300">~</span>$ cat profile.txt
							</p>
							<p className="text-white/85">{t.hero.cards.mainTitle}</p>

							<p className="text-emerald-200">
								<span className="text-emerald-400">badie@kali</span>:
								<span className="text-sky-300">~</span>$ cat focus.txt
							</p>
							<p className="text-white/75">{t.hero.cards.mainText}</p>

							<p className="text-emerald-200">
								<span className="text-emerald-400">badie@kali</span>:
								<span className="text-sky-300">~</span>$ curl -s
								https://api.badie-sec.dev/scope
							</p>
							<p className="text-white/70">
								{`{"domain":"security","stack":"${t.hero.cards.securityValue}"}`}
							</p>

							<p className="text-emerald-200">
								<span className="text-emerald-400">badie@kali</span>:
								<span className="text-sky-300">~</span>${" "}
								<span className="inline-block w-2 h-4 bg-emerald-300/90 animate-pulse align-middle" />
							</p>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
