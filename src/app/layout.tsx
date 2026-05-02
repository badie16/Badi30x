import type { Metadata } from "next";
import { inter } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
	metadataBase: new URL(
		process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
	),
	title: {
		default: "Badie BAHIDA",
		template: "%s | Badie BAHIDA",
	},
	description:
		"Portfolio de Badie BAHIDA, étudiant ingénieur en Sécurité IT & Confiance Numérique. Focus sur le pentest, le SOC, la sécurité applicative et l'IA.",
	keywords: [
		"cybersécurité",
		"pentest",
		"SOC",
		"sécurité applicative",
		"OT/ICS",
		"Badie BAHIDA",
		"ENSIASD",
	],
	authors: [{ name: "Badie BAHIDA" }],
	creator: "Badie BAHIDA",
	openGraph: {
		title: "Badie BAHIDA | Portfolio Cybersécurité",
		description:
			"Portfolio de Badie BAHIDA, étudiant ingénieur en Sécurité IT & Confiance Numérique.",
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
			"Portfolio de Badie BAHIDA - cybersécurité, SOC, pentest et sécurité applicative.",
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
			{ url: "/logo.png", sizes: "any" },
			{ url: "/logo.png", type: "image/png", sizes: "32x32" },
			{ url: "/icon-192.png", type: "image/png", sizes: "192x192" },
			{ url: "/icon-512.png", type: "image/png", sizes: "512x512" },
		],
		apple: [{ url: "/logo.png", sizes: "180x180", type: "image/png" }],
	},
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
		jobTitle: "Étudiant ingénieur en Sécurité IT & Confiance Numérique",
		url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
		email: "badi3bahida16@gmail.com",
		description:
			"Étudiant ingénieur en Sécurité IT & Confiance Numérique, orienté pentest, SOC, sécurité applicative et détection d'anomalies.",
		image: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/og-image.png`,
		knowsAbout: [
			"Penetration Testing",
			"SOC",
			"Sécurité applicative",
			"OT/ICS",
			"Détection d'anomalies",
			"Machine Learning",
		],
	};

	return (
		<html lang="fr" data-theme="dark" suppressHydrationWarning>
			<head>
				<script
					dangerouslySetInnerHTML={{
						__html: `
							(function() {
								const theme = localStorage.getItem('theme');
								if (theme) {
									document.documentElement.setAttribute('data-theme', theme);
								} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
									document.documentElement.setAttribute('data-theme', 'dark');
								} else {
									document.documentElement.setAttribute('data-theme', 'light');
								}
							})();
						`,
					}}
				/>
			</head>
			<body className={`${inter.variable} font-sans antialiased`}>
				{/* Microsoft Clarity Analytics */}
				{process.env.NEXT_PUBLIC_CLARITY_ID && (
					<script
						type="text/javascript"
						dangerouslySetInnerHTML={{
							__html: `
                (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
              `,
						}}
					/>
				)}

				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
				{children}
			</body>
		</html>
	);
}
