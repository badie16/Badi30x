import Divider from "./components/divider";
import AboutMe from "./components/home/about-me";
import Education from "./components/home/education";
import Experience from "./components/home/experience";
import GitHubSection from "./components/home/github";
import HeroSection from "./components/home/hero-section";
import ProjectOverview from "./components/home/project-overview";
import Contact from "@/components/Contact";
import Footer from "./components/layout/footer";
import AnnouncementBar from "./components/layout/header/announcementBar";

export default function Home() {
	return (
		<main>
			<AnnouncementBar />
			<HeroSection />
			<Divider />
			<AboutMe />
			<Divider />
			<Experience />
			<Divider />
			<Education />
			<Divider />
			<GitHubSection />
			<Divider />
			<ProjectOverview />
			<Divider />
			<Contact />
			<Footer />
		</main>
	);
}
