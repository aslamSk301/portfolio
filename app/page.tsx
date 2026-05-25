"use client";

import { PortfolioPage, PortfolioPageProps } from "@/components/ui/starfall-portfolio-landing";
import { ClipPathLinks } from "@/components/ui/clip-path-links";
import { ShoppingBag, Mail, BookOpen } from "lucide-react";

const portfolioData: PortfolioPageProps = {
  logo: {
    initials: "AS",
    name: "Aslam Shahmadar",
  },
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Connect", href: "#connect" },
  ],
  resume: {
    label: "Resume",
    onClick: () => {
      window.open("/My_Resume.pdf", "_blank");
    },
  },
  hero: {
    titleLine1: "Full-Stack Developer &",
    titleLine2Gradient: "AI Enthusiast",
    subtitle:
      "I build scalable web apps, AI-powered tools, and mobile experiences. Passionate about turning ideas into products that people love to use.",
  },
  ctaButtons: {
    primary: {
      label: "View My Work",
      onClick: () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    secondary: {
      label: "Get In Touch",
      onClick: () => {
        document.getElementById("connect")?.scrollIntoView({ behavior: "smooth" });
      },
    },
  },
  projects: [
    {
      title: "Manpasand Born Baby",
      description:
        "Full-featured e-commerce platform for baby products with payment integration and inventory management.",
      tags: ["E-commerce", "Web App", "Payments"],
      imageContent: <ShoppingBag className="w-8 h-8 text-purple-400/60" />,
      link: "https://manpasandbornbaby.com/",
    },
    {
      title: "MailPilot AI",
      description:
        "AI-powered email reply generator Chrome extension using RAG for context-aware, intelligent responses.",
      tags: ["Chrome Extension", "RAG", "AI"],
      imageContent: <Mail className="w-8 h-8 text-cyan-400/60" />,
      link: "https://chromewebstore.google.com/detail/mailpilot-ai/dbkkgledbppefglfibjpbhpgficpnmeb",
    },
    {
      title: "StoryCean",
      description:
        "Story reading platform available on web and Android — a community for readers and writers.",
      tags: ["Next.js", "Android", "Full-Stack"],
      imageContent: <BookOpen className="w-8 h-8 text-purple-400/60" />,
      link: "https://storycean.com/",
    },
  ],
  stats: [
    { value: "3+", label: "Live Products" },
    { value: "AI/ML", label: "Specialization" },
    { value: "Full-Stack", label: "End to End" },
  ],
  socials: {
    github: "https://github.com/aslamSk301",
    linkedin: "https://www.linkedin.com/in/aslam-shahmadar-editbysk/",
    email: "aslamsha299@gmail.com",
    phone: "+919998667720",
  },
  showAnimatedBackground: true,
};

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <PortfolioPage {...portfolioData} />
      <section id="connect" className="relative px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-foreground text-center mb-10 geist-font tracking-tight">
            Let&apos;s <span>Connect</span>
          </h2>
          <ClipPathLinks />
        </div>
      </section>
    </div>
  );
}
