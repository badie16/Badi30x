import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/components/LanguageProvider";
import { inter } from "./fonts";
import "./globals.css";

const siteUrl = new URL(
	process.env.NEXT_PUBLIC_SITE_URL || "https://badiebahida.me",
);

const siteName = "Badie BAHIDA";
const siteTitle = `${siteName} | Cybersecurity & DevSecOps`;

const description =
	"Cybersecurity engineering student focused on DevSecOps, application security, and AI for cybersecurity. Explore my projects, skills, and experience.";

export const metadata: Metadata = {
	metadataBase: siteUrl,

	title: {
		default: siteTitle,
		template: `%s | ${siteName}`,
	},

	description,

	applicationName: `${siteName} Portfolio`,

	keywords: [
		"Badie BAHIDA",
		"Cybersecurity",
		"DevSecOps",
		"Pentest",
		"Application Security",
		"Cloud Security",
		"Threat Intelligence",
		"OT/ICS Security",
		"Machine Learning",
		"ENSIASD",
		"ENSIASD Taroudant",
	],

	authors: [
		{
			name: siteName,
			url: siteUrl.href,
		},
	],

	creator: siteName,

	openGraph: {
		title: siteTitle,
		description,
		url: siteUrl.href,
		siteName,
		locale: "en_US",
		type: "website",
		images: [
			{
				url: "/og-image.png",
				width: 1730,
				height: 909,
				alt: "Badie BAHIDA | Cybersecurity & DevSecOps Portfolio",
			},
		],
	},

	twitter: {
		card: "summary_large_image",
		title: siteTitle,
		description,
		images: ["/og-image.png"],
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
		icon: [{ url: "/favicon.ico" }],
		apple: [{ url: "/images/branding/logo.png" }],
	},
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	themeColor: "#faf9f6",
};

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	"@id": new URL("/#person", siteUrl).href,
	name: siteName,
	url: siteUrl.href,
	jobTitle: "Cybersecurity Engineering Student",
	description,
	email: "badie.bahida.it@gmail.com",

	sameAs: [
		"https://github.com/badie16",
		"https://www.linkedin.com/in/badie-bahida",
	],

	knowsAbout: [
		"Cybersecurity",
		"Penetration Testing",
		"DevSecOps",
		"Application Security",
		"Cloud Security",
		"Threat Intelligence",
		"OT/ICS Security",
		"Anomaly Detection",
		"Machine Learning",
		"Large Language Models",
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${inter.variable} font-sans antialiased`}>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
					}}
				/>

				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem={false}
					disableTransitionOnChange
				>
					<LanguageProvider>{children}</LanguageProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
