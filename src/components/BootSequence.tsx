"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type RainColumn = {
	left: number;
	content: string;
	duration: number;
	delay: number;
};

const CHARSET = "01abcdef$#@";

function pseudoRandom(seed: number) {
	const value = Math.sin(seed * 9999) * 10000;
	return value - Math.floor(value);
}

function createColumnString(length: number, seed: number) {
	return Array.from(
		{ length },
		(_, index) =>
			CHARSET[Math.floor(pseudoRandom(seed + index) * CHARSET.length)],
	).join("");
}

export default function BootSequence() {
	const [isVisible, setIsVisible] = useState(true);
	const [typedChars, setTypedChars] = useState(0);
	const command = "sudo ./init_secure_stack --mode stealth";

	const rainColumns = useMemo<RainColumn[]>(
		() =>
			Array.from({ length: 18 }, (_, index) => {
				const seed = index + 1;
				return {
					left: (index / 18) * 100 + pseudoRandom(seed * 2) * 2,
					content: createColumnString(44, seed * 11),
					duration: 2.8 + pseudoRandom(seed * 3) * 3,
					delay: pseudoRandom(seed * 5) * 2.5,
				};
			}),
		[],
	);

	useEffect(() => {
		const visibilityTimeout = window.setTimeout(() => {
			setIsVisible(false);
		}, 2900);

		const typeInterval = window.setInterval(() => {
			setTypedChars((currentValue) => {
				if (currentValue >= command.length) {
					window.clearInterval(typeInterval);
					return currentValue;
				}

				return currentValue + 1;
			});
		}, 36);

		return () => {
			window.clearTimeout(visibilityTimeout);
			window.clearInterval(typeInterval);
		};
	}, [command.length]);

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					initial={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5, ease: "easeOut" }}
					className="terminal-boot-overlay fixed inset-0 overflow-hidden"
					style={{ zIndex: 9999 }}
				>
					<div className="absolute inset-0">
						{rainColumns.map((column, index) => (
							<p
								key={`rain-${column.left}-${index}`}
								className="terminal-rain-column absolute top-[-130%] font-mono text-[10px] tracking-[0.25em] text-emerald-400/35"
								style={{
									left: `${column.left}%`,
									animationDuration: `${column.duration}s`,
									animationDelay: `-${column.delay}s`,
								}}
							>
								{column.content}
							</p>
						))}
					</div>

					<div className="relative mx-auto mt-[15vh] w-[min(92vw,780px)] rounded-2xl border border-emerald-400/35 bg-black p-4 md:p-6 shadow-[0_0_80px_rgba(16,185,129,0.15)]">
						<div className="mb-4 flex items-center gap-2 border-b border-emerald-500/20 pb-3">
							<span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
							<span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
							<span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
							<span className="ml-2 font-mono text-xs tracking-[0.18em] text-emerald-300/80">
								secure-terminal://boot
							</span>
						</div>

						<div className="space-y-2 font-mono text-xs text-emerald-200 md:text-sm">
							<p>
								badie@kali:~$ {command.slice(0, typedChars)}
								<span className="hacker-cursor">_</span>
							</p>
							<p className="text-emerald-300/80">
								[ OK ] loading firewall profiles...
							</p>
							<p className="text-emerald-300/80">
								[ OK ] encrypting environment variables...
							</p>
							<p className="text-cyan-300/80">
								[ INFO ] anomaly detector online
							</p>
							<p className="text-emerald-200">ACCESS GRANTED :: WELCOME BACK</p>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
