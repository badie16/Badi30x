import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import BackToTop from "@/components/BackToTop";
import { LanguageProvider } from "@/components/LanguageProvider";
import SectionTransition, { PageTransition } from "@/components/PageTransition";
import BootSequence from "@/components/BootSequence";

export default function Home() {
	return (
		<LanguageProvider>
			<PageTransition>
				<main className="min-h-screen bg-black text-white selection:bg-primary/30">
					<BootSequence />
					<Header />
					<Hero />
					<SectionTransition delay={0.1}>
						<Skills />
					</SectionTransition>
					<SectionTransition delay={0.1}>
						<Experience />
					</SectionTransition>
					<SectionTransition delay={0.1}>
						<Projects />
					</SectionTransition>
					<SectionTransition delay={0.1}>
						<Certifications />
					</SectionTransition>
					<SectionTransition delay={0.1}>
						<Contact />
					</SectionTransition>
					<BackToTop />
				</main>
			</PageTransition>
		</LanguageProvider>
	);
}
