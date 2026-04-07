"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const CHARSET = "01abcdef$#@";
const COMMAND = "sudo ./init_secure_stack --mode stealth";

// Helper pour le texte aléatoire de la pluie Matrix
function createColumnString(length: number) {
	return Array.from(
		{ length },
		() => CHARSET[Math.floor(Math.random() * CHARSET.length)],
	).join("");
}

export default function BootSequence() {
	const [isVisible, setIsVisible] = useState(true);
	const [typedChars, setTypedChars] = useState(0);
	const [visibleLines, setVisibleLines] = useState<number>(0);
	const [isFinished, setIsFinished] = useState(false);

	const outputLines = useMemo(
		() => [
			{ text: "[ OK ] Initializing core kernel...", color: "text-emerald-400" },
			{
				text: "[ OK ] Loading firewall profiles...",
				color: "text-emerald-400",
			},
			{ text: "[ OK ] Encrypting environment...", color: "text-emerald-400" },
			{ text: "[ INFO ] Anomaly detector online", color: "text-cyan-400" },
			{ text: "ACCESS GRANTED :: WELCOME BACK", color: "text-white font-bold" },
		],
		[],
	);

	const rainColumns = useMemo(
		() =>
			Array.from({ length: 20 }, (_, i) => ({
				id: i,
				left: `${i * 5 + Math.random() * 2}%`,
				content: createColumnString(30),
				duration: 3 + Math.random() * 4,
				delay: Math.random() * 5,
			})),
		[],
	);

	useEffect(() => {
		// 1. Animation de la frappe
		const typingInterval = setInterval(() => {
			setTypedChars((prev) => {
				if (prev >= COMMAND.length) {
					clearInterval(typingInterval);
					return prev;
				}
				return prev + 1;
			});
		}, 40);

		// 2. Apparition des lignes après la commande
		if (typedChars === COMMAND.length) {
			const lineInterval = setInterval(() => {
				setVisibleLines((prev) => {
					if (prev >= outputLines.length) {
						clearInterval(lineInterval);
						setTimeout(() => setIsFinished(true), 1000); // Temps d'attente avant de fermer
						return prev;
					}
					return prev + 1;
				});
			}, 400);
			return () => clearInterval(lineInterval);
		}

		return () => clearInterval(typingInterval);
	}, [typedChars, outputLines.length]);

	// Fermeture automatique après la fin
	useEffect(() => {
		if (isFinished) {
			const timeout = setTimeout(() => setIsVisible(false), 500);
			return () => clearTimeout(timeout);
		}
	}, [isFinished]);

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					initial={{ opacity: 1 }}
					exit={{ opacity: 0, scale: 1.05 }}
					transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
					className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
				>
					{/* Matrix Rain Background */}
					<div className="absolute inset-0 pointer-events-none opacity-20">
						{rainColumns.map((col) => (
							<motion.div
								key={col.id}
								initial={{ y: "-100%" }}
								animate={{ y: "100%" }}
								transition={{
									duration: col.duration,
									repeat: Infinity,
									ease: "linear",
									delay: -col.delay,
								}}
								className="absolute font-mono text-[10px] text-emerald-500 whitespace-pre"
								style={{ left: col.left }}
							>
								{col.content.split("").map((char, i) => (
									<div key={i}>{char}</div>
								))}
							</motion.div>
						))}
					</div>

					{/* Terminal Window */}
					<motion.div
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						className="relative w-[min(90vw,650px)] overflow-hidden rounded-lg border border-emerald-500/30 bg-black/80 backdrop-blur-md shadow-[0_0_40px_rgba(16,185,129,0.1)]"
					>
						{/* Header */}
						<div className="flex items-center gap-2 border-b border-emerald-500/20 bg-emerald-500/5 px-4 py-3">
							<div className="flex gap-1.5">
								<div className="h-3 w-3 rounded-full bg-red-500/50" />
								<div className="h-3 w-3 rounded-full bg-amber-500/50" />
								<div className="h-3 w-3 rounded-full bg-emerald-500/50" />
							</div>
							<span className="ml-2 font-mono text-xs text-emerald-500/60 uppercase tracking-widest">
								session@root: ~auth
							</span>
						</div>

						{/* Content */}
						<div className="p-6 font-mono text-sm leading-relaxed">
							<div className="flex text-emerald-400">
								<span className="mr-2 shrink-0">badie@kali:~$</span>
								<span>
									{COMMAND.slice(0, typedChars)}
									{typedChars < COMMAND.length && (
										<span className="inline-block w-2 h-4 ml-1 bg-emerald-500 animate-pulse" />
									)}
								</span>
							</div>

							<div className="mt-4 space-y-1">
								{outputLines.slice(0, visibleLines).map((line, i) => (
									<motion.p
										key={i}
										initial={{ opacity: 0, x: -10 }}
										animate={{ opacity: 1, x: 0 }}
										className={line.color}
									>
										{line.text}
									</motion.p>
								))}
								{isFinished && (
									<motion.span
										animate={{ opacity: [1, 0] }}
										transition={{ repeat: Infinity, duration: 0.8 }}
										className="inline-block w-2 h-4 bg-emerald-500 mt-2"
									/>
								)}
							</div>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
