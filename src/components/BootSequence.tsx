"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const COMMANDS = {
	user: "badie",
	pass: "••••••••",
	init: "sudo systemctl start security-stack",
};

export default function KaliBootSequence() {
	const [isVisible, setIsVisible] = useState(true);
	const [step, setStep] = useState<
		"user" | "pass" | "login_process" | "motd" | "init" | "services" | "done"
	>("user");
	const [typedChars, setTypedChars] = useState(0);
	const [visibleLines, setVisibleLines] = useState(0);

	const services = [
		{ name: "PostgreSQL Database", delay: 400 },
		{ name: "Metasploit RPC Server", delay: 800 },
		{ name: "Nginx Reverse Proxy", delay: 1200 },
		{ name: "SentinelLogs Anomaly Detector", delay: 1600 },
	];

	// Séquence de frappe
	useEffect(() => {
		let text = "";
		if (step === "user") text = COMMANDS.user;
		if (step === "pass") text = COMMANDS.pass;
		if (step === "init") text = COMMANDS.init;
		if (!text) return;

		const interval = setInterval(() => {
			setTypedChars((prev) => {
				if (prev >= text.length) {
					clearInterval(interval);
					setTimeout(() => {
						setTypedChars(0);
						if (step === "user") setStep("pass");
						else if (step === "pass") setStep("login_process");
						else if (step === "init") setStep("services");
					}, 500);
					return prev;
				}
				return prev + 1;
			});
		}, 50);
		return () => clearInterval(interval);
	}, [step]);

	// Transition après "login_process" vers le MOTD
	useEffect(() => {
		if (step === "login_process") {
			setTimeout(() => setStep("motd"), 800);
		}
		if (step === "motd") {
			setTimeout(() => setStep("init"), 1500);
		}
	}, [step]);

	// Animation des services
	useEffect(() => {
		if (step === "services") {
			services.forEach((_, i) => {
				setTimeout(() => setVisibleLines(i + 1), services[i].delay);
			});
			setTimeout(() => setStep("done"), 2500);
		}
	}, [step]);

	useEffect(() => {
		if (step === "done") {
			setTimeout(() => setIsVisible(false), 1000);
		}
	}, [step]);

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					initial={{ opacity: 1 }}
					exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
					transition={{ duration: 0.8 }}
					className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0a] font-mono text-[13px] md:text-sm"
				>
					{/* Effet de scanline CRT */}
					<div className="pointer-events-none absolute inset-0 z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px]" />

					<div className="w-[min(95vw,800px)] rounded-md border border-zinc-800 bg-[#0c0c0c] shadow-2xl overflow-hidden">
						{/* Barre de titre Kali */}
						<div className="flex items-center justify-between bg-[#1a1a1a] px-4 py-2 border-b border-zinc-800">
							<div className="flex gap-2">
								<div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
								<div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
								<div className="h-3 w-3 rounded-full bg-[#27c93f]" />
							</div>
							<span className="text-zinc-500 text-xs">badie@kali: ~</span>
							<div className="w-12" />
						</div>

						<div className="p-5 min-h-[400px] text-zinc-300">
							{/* Étape LOGIN */}
							<div className="space-y-1">
								<p>Kali GNU/Linux Rolling kali tty1</p>
								<p>
									kali login:{" "}
									<span className="text-white">
										{step === "user"
											? COMMANDS.user.slice(0, typedChars)
											: COMMANDS.user}
									</span>
									{step === "user" && (
										<span className="inline-block w-2 h-4 bg-white ml-1 animate-pulse" />
									)}
								</p>
								{step !== "user" && (
									<p>
										Password:{" "}
										<span className="text-white">
											{step === "pass"
												? COMMANDS.pass.slice(0, typedChars)
												: COMMANDS.pass}
										</span>
										{step === "pass" && (
											<span className="inline-block w-2 h-4 bg-white ml-1 animate-pulse" />
										)}
									</p>
								)}
							</div>

							{/* MESSAGE OF THE DAY (MOTD) */}
							{(step === "motd" ||
								step === "init" ||
								step === "services" ||
								step === "done") && (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									className="mt-4"
								>
									<pre className="text-[#3465a4] leading-tight font-bold mb-4">
										{`  ______________
 < KALI LINUX >
  --------------
         \\   ^__^
          \\  (oo)\\_______
             (__)\\       )\\/\\
                 ||----w |
                 ||     ||`}
									</pre>
									<div className="grid grid-cols-2 gap-x-8 text-xs mb-4 text-zinc-400">
										<p>
											OS:{" "}
											<span className="text-zinc-200">
												Kali GNU/Linux Rolling x86_64
											</span>
										</p>
										<p>
											Kernel:{" "}
											<span className="text-zinc-200">6.5.0-kali3-amd64</span>
										</p>
										<p>
											Uptime: <span className="text-zinc-200">1 min</span>
										</p>
										<p>
											Packages:{" "}
											<span className="text-zinc-200">2450 (dpkg)</span>
										</p>
									</div>
									<p className="text-emerald-500 mb-4">
										Last login: {new Date().toLocaleDateString()} from
										192.168.1.15
									</p>
								</motion.div>
							)}
							{/* LIGNE DE COMMANDE KALI */}
							{(step === "init" || step === "services" || step === "done") && (
								<div className="mt-2">
									<p>
										<span className="text-[#3465a4] font-bold">┌──(</span>
										<span className="text-[#ef2929] font-bold">
											badie㉿kali
										</span>
										<span className="text-[#3465a4] font-bold">)-[</span>
										<span className="text-white">~</span>
										<span className="text-[#3465a4] font-bold">]</span>
									</p>
									<p>
										<span className="text-[#3465a4] font-bold">└─</span>
										<span className="text-[#ef2929] font-bold">$</span>{" "}
										<span className="text-white">
											{step === "init"
												? COMMANDS.init.slice(0, typedChars)
												: COMMANDS.init}
										</span>
										{step === "init" && (
											<span className="inline-block w-2 h-4 bg-white ml-1 animate-pulse" />
										)}
									</p>
								</div>
							)}

							{/* DÉMARRAGE DES SERVICES */}
							{(step === "services" || step === "done") && (
								<div className="mt-4 space-y-1 border-l-2 border-zinc-800 pl-4">
									{services.slice(0, visibleLines).map((s, i) => (
										<p key={i} className="text-xs">
											<span className="text-emerald-500">[ OK ]</span> Started{" "}
											{s.name}.
										</p>
									))}
									{step === "done" && (
										<motion.p
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											className="text-white font-bold mt-4"
										>
											Launching Portfolio Interface...
										</motion.p>
									)}
								</div>
							)}
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
