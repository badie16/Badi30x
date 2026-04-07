import type { Language } from "@/components/LanguageProvider";

export const dictionary = {
	fr: {
		nav: {
			home: "Accueil",
			skills: "Compétences",
			projects: "Projets",
			education: "Formation",
			contact: "Contact",
			switchLabel: "Passer en anglais",
		},
		hero: {
			badge: "Ouvert aux opportunités de travail et freelance en cybersécurité",
			subtitle: "Sécurité IT & Confiance Numérique",
			description:
				"Étudiant ingénieur à l'ENSIASD, je travaille sur la détection d'anomalies, l'analyse de vulnérabilités et la sécurisation d'applications web, avec un intérêt marqué pour le pentest, le SOC et l'OT/ICS.",
			location: "Taroudant, Maroc",
			cards: {
				interest: "Intérêt",
				ai: "IA pour détection d'anomalies",
				targetProfile: "Profil ciblé",
				targetRole: "Opportunités visées",
				appliedSecurity: "Sécurité appliquée",
				mainTitle: "Sécurité offensive, défensive et data",
				mainText:
					"Tests d'intrusion, analyse de logs, sécurisation d'APIs, Modbus/ICS et détection d'anomalies : un profil orienté terrain, rigoureux et appliqué.",
				roleValue: "SOC / Pentest / Sécurité applicative",
				securityValue: "Frontend, API, logs et réseaux industriels",
			},
		},
		skills: {
			title: "Compétences clés",
			description:
				"Un mélange de cybersécurité offensive, SOC, réseaux, OT/ICS et développement pour construire et sécuriser des systèmes.",
			categories: {
				offensive: "Cybersécurité offensive",
				soc: "SOC, réseaux & logs",
				dev: "Développement",
				ot: "Sécurité OT/ICS & audit",
				ai: "IA & data",
				soft: "Soft Skills",
			},
		},
		experience: {
			title: "Expériences",
			description:
				"Deux expériences qui montrent à la fois une pratique du développement sécurisé et une sensibilité à la sécurité applicative.",
			roles: {
				rw: "Stagiaire Développeur Frontend",
				df: "Stagiaire Ingénieur Full Stack",
			},
			locations: {
				rw: "Remote, France",
				df: "Maroc",
			},
			summary: {
				rw: "Développement de la plateforme B2B SuppWayy avec Next.js et Tailwind CSS.",
				df: "Développement de PhytoVigil avec React Native, FastAPI et PostgreSQL.",
			},
			highlights: {
				rw: [
					"Validation des entrées et réduction des risques XSS/CSRF côté frontend.",
					"Intégration sécurisée avec APIs backend via gestion des tokens d'authentification.",
				],
				df: [
					"Sécurisation des endpoints API et gestion des accès.",
					"Modèle CNN pour la détection des maladies des plantes avec 98% de précision.",
				],
			},
		},
		projects: {
			title: "Projets sélectionnés",
			description:
				"Voici quelques projets sur lesquels j'ai travaillé. Chacun a été un défi unique qui m'a aidé à progresser.",
			caption: "Voir tous les projets",
			footer: "Et bien d'autres.",
			categories: {
				p1: "Machine Learning / SOC",
				p2: "Sécurité OT / ICS",
				p3: "Audit ISO 27001",
				p4: "Web / Mobile / IA",
			},
			descriptions: {
				p1: "Système ML sur un dataset de 5M d'entrées de logs systèmes et réseau, pensé pour un usage SOC.",
				p2: "Outil de test d'intrusion Modbus avec scan réseau, attaques simulées et moteur d'analyse temps réel.",
				p3: "Simulateur d'audit de sécurité collaboratif basé sur les contrôles ISO 27002.",
				p4: "Plateforme avec sécurisation des endpoints API et pipeline IA pour la détection des maladies des plantes.",
			},
			metrics: {
				p1: "Précision 0.79 • Recall 0.92",
				p2: "10 modules de sécurité • 5 classes de vulnérabilités",
				p3: "Collecte d'évidences • conformité • analyse des risques",
				p4: "98% précision • 97% recall",
			},
		},
		education: {
			title: "Formation",
			description:
				"Le parcours académique qui soutient mon orientation vers la cybersécurité, les réseaux et l'intelligence artificielle.",
			items: {
				e1: "Cycle Ingénieur – Sécurité IT & Confiance Numérique",
				e2: "DEUP Informatique – Mention Bien",
				e3: "Baccalauréat – Maintenance Informatique et Réseaux",
				l1: "Taroudant, Maroc",
				l2: "Taroudant, Maroc",
				l3: "Agadir, Maroc",
			},
		},
		contact: {
			titleTop: "Une opportunité de travail ou freelance ?",
			titleBottom: "Parlons-en",
			cta: "Me contacter",
			tagline: "cybersécurité, SOC, sécurité applicative et missions freelance",
			email: "Email",
			linkedin: "LinkedIn",
			github: "GitHub",
		},
	},
	en: {
		nav: {
			home: "Home",
			skills: "Skills",
			projects: "Projects",
			education: "Education",
			contact: "Contact",
			switchLabel: "Switch to French",
		},
		hero: {
			badge: "Open to work and freelance opportunities in cybersecurity",
			subtitle: "IT Security & Digital Trust",
			description:
				"Engineering student at ENSIASD working on anomaly detection, vulnerability analysis, and web application security, with a strong focus on pentesting, SOC operations, and OT/ICS.",
			location: "Taroudant, Morocco",
			cards: {
				interest: "Interest",
				ai: "AI for anomaly detection",
				targetProfile: "Target profile",
				targetRole: "Opportunities in focus",
				appliedSecurity: "Applied security",
				mainTitle: "Offensive, defensive security and data",
				mainText:
					"Penetration testing, log analysis, API hardening, Modbus/ICS, and anomaly detection: a practical profile built for field-ready security work.",
				roleValue: "SOC / Pentesting / Application Security",
				securityValue: "Frontend, Backend, APIs, logs and industrial networks",
			},
		},
		skills: {
			title: "Core skills",
			description:
				"A mix of offensive security, SOC, networking, OT/ICS, and development to build and secure systems.",
			categories: {
				offensive: "Offensive security",
				soc: "SOC, networks & logs",
				dev: "Development",
				ot: "OT/ICS security & audit",
				ai: "AI & data",
				soft: "Soft Skills",
			},
		},
		experience: {
			title: "Experience",
			description:
				"Two experiences showing both secure development practice and an application security mindset.",
			roles: {
				rw: "Frontend Developer Intern",
				df: "Full Stack Engineering Intern",
			},
			locations: {
				rw: "Remote, France",
				df: "Morocco",
			},
			summary: {
				rw: "Developed the SuppWayy B2B platform using Next.js and Tailwind CSS.",
				df: "Built PhytoVigil with React Native, FastAPI, and PostgreSQL.",
			},
			highlights: {
				rw: [
					"Implemented input validation and reduced frontend XSS/CSRF risk.",
					"Delivered secure backend API integration with auth token handling.",
				],
				df: [
					"Secured API endpoints and access control flows.",
					"Implemented a CNN model for plant disease detection with 98% accuracy.",
				],
			},
		},
		projects: {
			title: "Selected projects",
			description:
				"Here are some of the projects I've worked on. Each one was a unique challenge that helped me grow.",
			caption: "View all projects",
			footer: "And many more.",
			categories: {
				p1: "Machine Learning / SOC",
				p2: "OT / ICS security",
				p3: "ISO 27001 audit",
				p4: "Web / Mobile / AI",
			},
			descriptions: {
				p1: "ML system on a 5M-entry system and network log dataset, designed for SOC usage.",
				p2: "Modbus penetration testing tool with network scanning, simulated attacks and real-time analysis.",
				p3: "Collaborative security audit simulator based on ISO 27002 controls.",
				p4: "Platform with secured API endpoints and an AI pipeline for plant disease detection.",
			},
			metrics: {
				p1: "Precision 0.79 • Recall 0.92",
				p2: "10 security modules • 5 vulnerability classes",
				p3: "Evidence collection • compliance • risk analysis",
				p4: "98% accuracy • 97% recall",
			},
		},
		education: {
			title: "Education",
			description:
				"Academic path supporting a strong orientation toward cybersecurity, networking, and applied AI.",
			items: {
				e1: "Engineering Cycle – IT Security & Digital Trust",
				e2: "DEUP in Computer Science – Honours",
				e3: "Baccalaureate – IT Maintenance & Networks",
				l1: "Taroudant, Morocco",
				l2: "Taroudant, Morocco",
				l3: "Agadir, Morocco",
			},
		},
		contact: {
			titleTop: "Got a project in mind?",
			titleBottom: "Let's talk",
			cta: "Contact me",
			tagline:
				"cybersecurity, SOC, application security and freelance missions",
			email: "Email",
			linkedin: "LinkedIn",
			github: "GitHub",
		},
	},
} as const;

export function getDictionary(language: Language) {
	return dictionary[language];
}
