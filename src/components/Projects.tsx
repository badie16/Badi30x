"use client";

import { useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ArrowUpRight, Github, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import { getDictionary } from "@/lib/dictionary";

const projects = [
	{
		id: "p1",
		title: "Détection d’anomalies dans les logs (SOC)",
		tags: ["Python", "Scikit-learn", "Analyse de logs"],
		color: "bg-cyan-500",
		image: "/hero_bg.png",
	},
	{
		id: "p2",
		title: "ModStrike",
		tags: ["Python", "PyQt6", "PyModbus"],
		color: "bg-orange-500",
		image: "/takeover_bg.png",
	},
	{
		id: "p3",
		title: "AuditQuest",
		tags: ["Phaser3", "Colyseus", "WebRTC"],
		color: "bg-emerald-500",
		image: "/packet_sniffer_bg.png",
	},
	{
		id: "p4",
		title: "PhytoVigil",
		tags: ["React Native", "FastAPI", "PostgreSQL"],
		color: "bg-violet-500",
		image: "/recon_bg.png",
	},
];

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
	return Math.abs(offset) * velocity;
};

export default function Projects() {
	const { language } = useLanguage();
	const t = getDictionary(language);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState(0);

	const paginate = (newDirection: number) => {
		const newIndex = currentIndex + newDirection;
		if (newIndex >= 0 && newIndex < projects.length) {
			setDirection(newDirection);
			setCurrentIndex(newIndex);
		}
	};

	const handleDragEnd = (
		_e: MouseEvent | TouchEvent | PointerEvent,
		{ offset, velocity }: PanInfo,
	) => {
		const swipe = swipePower(offset.x, velocity.x);

		if (swipe < -swipeConfidenceThreshold) {
			paginate(1);
		} else if (swipe > swipeConfidenceThreshold) {
			paginate(-1);
		}
	};

	const variants = {
		enter: (direction: number) => ({
			x: direction > 0 ? 200 : -200,
			opacity: 0,
		}),
		center: {
			zIndex: 1,
			x: 0,
			opacity: 1,
		},
		exit: (direction: number) => ({
			zIndex: 0,
			x: direction < 0 ? 200 : -200,
			opacity: 0,
		}),
	};

	return (
		<section id="projects" className="py-20 px-4 md:px-10 bg-black">
			<div className="max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="flex justify-between items-end mb-16"
				>
					<div>
						<h2 className="text-3xl md:text-5xl font-bold mb-4">
							{t.projects.title}
						</h2>
						<p className="text-muted-foreground max-w-md">
							{t.projects.description}
						</p>
					</div>
					<span className="hidden md:inline-flex items-center gap-2 text-muted-foreground">
						{t.projects.caption} <ArrowUpRight className="w-4 h-4" />
					</span>
				</motion.div>

				{/* Mobile Swipe Carousel */}
				<div className="md:hidden relative">
					<div className="overflow-hidden">
						<AnimatePresence
							initial={false}
							custom={direction}
							mode="popLayout"
						>
							<motion.div
								key={currentIndex}
								custom={direction}
								variants={variants}
								initial="enter"
								animate="center"
								exit="exit"
								transition={{
									x: { type: "tween", duration: 0.25, ease: "easeOut" },
									opacity: { duration: 0.15 },
								}}
								drag="x"
								dragConstraints={{ left: 0, right: 0 }}
								dragElastic={1}
								onDragEnd={handleDragEnd}
								className="cursor-grab active:cursor-grabbing touch-pan-y"
							>
								<ProjectCard
									t={t}
									project={projects[currentIndex]}
									index={currentIndex}
								/>
							</motion.div>
						</AnimatePresence>
					</div>

					{/* Carousel Navigation */}
					<div className="flex justify-center items-center gap-4 mt-6">
						<button
							onClick={() => paginate(-1)}
							disabled={currentIndex === 0}
							className="p-3 rounded-full border border-white/10 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/5 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
							aria-label="Previous project"
						>
							<ChevronLeft className="w-5 h-5" />
						</button>
						<div className="flex gap-2">
							{projects.map((_, idx) => (
								<button
									key={idx}
									onClick={() => {
										setDirection(idx > currentIndex ? 1 : -1);
										setCurrentIndex(idx);
									}}
									className={`w-2 h-2 rounded-full transition-colors touch-manipulation ${
										idx === currentIndex ? "bg-primary" : "bg-white/20"
									}`}
									aria-label={`Go to project ${idx + 1}`}
								/>
							))}
						</div>
						<button
							onClick={() => paginate(1)}
							disabled={currentIndex === projects.length - 1}
							className="p-3 rounded-full border border-white/10 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/5 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
							aria-label="Next project"
						>
							<ChevronRight className="w-5 h-5" />
						</button>
					</div>
				</div>

				{/* Desktop Grid */}
				<div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
					{projects.map((project, index) => (
						<ProjectCard key={index} t={t} project={project} index={index} />
					))}
				</div>

				<div className="flex justify-center">
					<span className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium flex items-center gap-2 min-h-[44px] touch-manipulation">
						{t.projects.footer} <ArrowUpRight className="w-4 h-4" />
					</span>
				</div>
			</div>
		</section>
	);
}

interface ProjectCardProps {
	t: ReturnType<typeof getDictionary>;
	project: (typeof projects)[0];
	index: number;
}

function ProjectCard({ t, project, index }: ProjectCardProps) {
	const cardContent = (
		<>
			<div
				className={`relative h-[250px] md:h-[300px] w-full rounded-3xl overflow-hidden mb-6 border border-white/5 group-hover:border-primary/50 transition-colors`}
			>
				<div className="absolute inset-0">
					<Image
						src={project.image}
						alt={project.title}
						fill
						className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
				</div>

				<div className="absolute bottom-6 left-6 right-6 z-10">
					<div
						className={`w-12 h-12 rounded-full ${project.color} flex items-center justify-center mb-4 text-white`}
					>
						<Github className="w-6 h-6" />
					</div>
					<p className="text-sm text-white/70 line-clamp-2">
						{
							t.projects.descriptions[
								project.id as keyof typeof t.projects.descriptions
							]
						}
					</p>
				</div>
			</div>

			<div className="flex justify-between items-start px-2">
				<div>
					<h3 className="text-2xl font-semibold mb-1 group-hover:text-primary transition-colors">
						{project.title}
					</h3>
					<p className="text-muted-foreground">
						{
							t.projects.categories[
								project.id as keyof typeof t.projects.categories
							]
						}
					</p>
					<p className="text-sm text-primary mt-2">
						{t.projects.metrics[project.id as keyof typeof t.projects.metrics]}
					</p>
					<div className="flex flex-wrap gap-2 mt-4">
						{project.tags.map((tag) => (
							<span
								key={tag}
								className="text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-muted-foreground"
							>
								{tag}
							</span>
						))}
					</div>
				</div>
				<div className="p-3 rounded-full border border-white/10 group-hover:bg-primary group-hover:border-primary transition-colors">
					<ArrowUpRight className="w-5 h-5" />
				</div>
			</div>
		</>
	);

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ delay: index * 0.1 }}
			className="group cursor-pointer"
		>
			<div>{cardContent}</div>
		</motion.div>
	);
}
