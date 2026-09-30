import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import { inter } from "./fonts";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";

export const metadata: Metadata = {
	metadataBase: new URL(
		process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
	),
	title: {
		default: "Badie BAHIDA",
		template: "%s | Badie BAHIDA",
	},
	themeColor: "#0f172a",
	description:
		"Portfolio de Badie BAHIDA, Cybersecurity & DevSecOps Engineer. Pentest, SOC, sécurité applicative, cloud, threat intelligence et IA appliquée à la cybersécurité.",
	keywords: [
		"Badie BAHIDA",
		"Cybersecurity Engineer",
		"DevSecOps Engineer",
		"Pentest",
		"SOC Analyst",
		"Application Security",
		"Cloud Security",
		"Threat Intelligence",
		"OT/ICS Security",
		"ENSIASD",
		"ENSIASD Taroudant",
		"Ecole Nationale Supérieure Intelligence Artificielle Sciences des Données",
	],
	authors: [{ name: "Badie BAHIDA" }],
	creator: "Badie BAHIDA",
	openGraph: {
		title: "Badie BAHIDA | Portfolio Cybersécurité",
		description:
			"Portfolio de Badie BAHIDA, Cybersecurity & DevSecOps Engineer. Pentest, SOC, sécurité applicative et IA.",
		url: "/",
		siteName: "Badie BAHIDA",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Badie BAHIDA - Portfolio Cybersécurité",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Badie BAHIDA | Portfolio Cybersécurité",
		description:
			"Portfolio de Badie BAHIDA - Cybersecurity & DevSecOps : pentest, SOC, cloud et IA.",
		images: ["/og-image.png"],
		creator: "Badie BAHIDA",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	icons: {
		icon: [
			{ url: "/favicon.ico", sizes: "any" },
			{ url: "/images/branding/logo.png", type: "image/png", sizes: "32x32" },
			{ url: "/images/branding/logo.png", type: "image/png", sizes: "192x192" },
			{ url: "/images/branding/logo.png", type: "image/png", sizes: "512x512" },
		],
		apple: [{ url: "/images/branding/logo.png", sizes: "180x180", type: "image/png" }],
	},
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 5,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Person",
		name: "Badie BAHIDA",
		jobTitle: "Cybersecurity & DevSecOps Engineer",
		url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
		email: "badie.bahida.it@gmail.com",
		description:
			"Cybersecurity & DevSecOps Engineer : pentest, SOC, sécurité applicative, cloud, threat intelligence et IA appliquée à la cybersécurité.",
		image: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/og-image.png`,
		alumniOf: {
			"@type": "CollegeOrUniversity",
			name: "Ecole Nationale Supérieure de l'Intelligence Artificielle et Sciences des Données (ENSIASD)",
		},
		knowsAbout: [
			"Penetration Testing",
			"SOC",
			"DevSecOps",
			"Application Security",
			"Cloud Security",
			"Threat Intelligence",
			"OT/ICS Security",
			"Anomaly Detection",
			"Machine Learning",
		],
	};

	return (
		<html lang="fr" suppressHydrationWarning>
			<body className={`${inter.variable} font-sans antialiased`}>
				<ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
					<LanguageProvider>
						<script
							type="application/ld+json"
							dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
						/>
						{children}
					</LanguageProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
