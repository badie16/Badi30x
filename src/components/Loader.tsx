"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Loader() {
	const [progress, setProgress] = useState(0);
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const id = setInterval(() => {
			setProgress((prev) => {
				const next = prev + Math.floor(Math.random() * 12) + 4;
				return next >= 100 ? 100 : next;
			});
		}, 150);
		return () => clearInterval(id);
	}, []);

	useEffect(() => {
		if (progress < 100) return;
		const id = setTimeout(() => setVisible(false), 400);
		return () => clearTimeout(id);
	}, [progress]);

	return (
		<AnimatePresence>
			{visible && (
				<motion.div
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
					className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
					aria-hidden={!visible}
				>
					<Image
						src="/images/branding/dragon.png"
						alt="Loading"
						width={280}
						height={280}
						priority
						className="object-contain"
					/>

					<div className="mt-6 h-[3px] w-64 overflow-hidden rounded-full bg-primary/15">
						<div
							className="h-full rounded-full bg-blue-600 transition-[width] duration-200"
							style={{ width: `${progress}%` }}
						/>
					</div>

					<p className="mt-4 text-xs font-medium uppercase tracking-[0.5em] text-secondary tabular-nums">
						Loading&nbsp;&nbsp;&nbsp;{progress}%
					</p>

					<p className="absolute bottom-10 text-[11px] font-medium uppercase tracking-[0.5em] text-secondary">
						Badie Bahida
					</p>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
