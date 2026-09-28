import type { Metadata } from "next";
import Divider from "../components/divider";
import ProjectList from "../components/home/project-overview/project-list";
import AnnouncementBar from "../components/layout/header/announcementBar";
import Footer from "../components/layout/footer";
import ProjectsHeader from "./header";

export const metadata: Metadata = {
  title: "Projects | Badie BAHIDA",
  description:
    "All cybersecurity, AI and full-stack projects by Badie BAHIDA.",
};

export default function ProjectsPage() {
  return (
    <main>
      <AnnouncementBar />
      <section>
        <div className="container pt-24">
          <div className="border-x border-primary/20">
            <ProjectsHeader />
          </div>
        </div>
      </section>
      <Divider />
      <section>
        <div className="container">
          <div className="border-x border-primary/20">
            <div className="flex flex-col max-w-3xl mx-auto px-4 sm:px-7 py-9 md:py-16">
              <ProjectList />
            </div>
          </div>
        </div>
      </section>
      <Divider />
      <Footer />
    </main>
  );
}
