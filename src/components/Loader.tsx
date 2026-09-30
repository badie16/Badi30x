"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Loader() {
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		if (document.readyState === "complete") {
			const frame = requestAnimationFrame(() => setVisible(false));
			return () => cancelAnimationFrame(frame);
		}

		const onLoad = () => setVisible(false);
		window.addEventListener("load", onLoad);

		const fallback = setTimeout(() => setVisible(false), 6000);

		return () => {
			window.removeEventListener("load", onLoad);
			clearTimeout(fallback);
		};
	}, []);

	return (
		<AnimatePresence>
			{visible && (
				<motion.div
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3 }}
					className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
					aria-hidden={!visible}
				>
					<Image
						src="/images/branding/logo_dark.png"
						alt="Loading"
						width={280}
						height={280}
						priority
						className="object-contain dark:hidden"
					/>
					<Image
						src="/images/branding/logo.png"
						alt="Loading"
						width={280}
						height={280}
						priority
						className="hidden object-contain dark:block"
					/>

					<p className="absolute bottom-10 text-[11px] font-medium uppercase tracking-[0.5em] text-secondary">
						Badie Bahida
					</p>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
