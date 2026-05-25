import { ShoppingBag, Mail, BookOpen } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { ResumeButton, ViewWorkButton, GetInTouchButton } from "@/components/ui/hero-buttons";
import { ClipPathLinks } from "@/components/ui/clip-path-links";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Connect", href: "#connect" },
];

const projects = [
  {
    title: "Manpasand Born Baby",
    description: "Full-featured e-commerce platform for baby products with payment integration and inventory management.",
    tags: ["E-commerce", "Web App", "Payments"],
    icon: <ShoppingBag className="w-8 h-8 text-purple-400/60" />,
    link: "https://manpasandbornbaby.com/",
  },
  {
    title: "MailPilot AI",
    description: "AI-powered email reply generator Chrome extension using RAG for context-aware, intelligent responses.",
    tags: ["Chrome Extension", "RAG", "AI"],
    icon: <Mail className="w-8 h-8 text-cyan-400/60" />,
    link: "https://chromewebstore.google.com/detail/mailpilot-ai/dbkkgledbppefglfibjpbhpgficpnmeb",
  },
  {
    title: "StoryCean",
    description: "Story reading platform available on web and Android — a community for readers and writers.",
    tags: ["Next.js", "Android", "Full-Stack"],
    icon: <BookOpen className="w-8 h-8 text-purple-400/60" />,
    link: "https://storycean.com/",
  },
];

const stats = [
  { value: "3+", label: "Live Products" },
  { value: "AI/ML", label: "Specialization" },
  { value: "Full-Stack", label: "End to End" },
];

export default function Home() {
  return (
    <div className="bg-background text-foreground geist-font">
      <AuroraBackground />

      <div className="relative">
        {/* Navbar */}
        <nav className="w-full px-6 py-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-border backdrop-blur-md border border-border flex items-center justify-center">
                <span className="geist-font text-sm font-bold text-foreground">AS</span>
              </div>
              <span className="geist-font text-lg font-medium text-foreground">Aslam Shahmadar</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors inter-font text-sm">
                  {link.label}
                </a>
              ))}
            </div>
            <ResumeButton />
          </div>
        </nav>

        <div className="divider" />

        {/* Hero */}
        <main id="about" className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-20">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8 float-animation">
              <h1 className="md:text-6xl lg:text-7xl leading-[1.1] geist-font text-5xl font-light text-foreground tracking-tight mb-4">
                Full-Stack Developer &
                <span className="gradient-text block tracking-tight">AI Enthusiast</span>
              </h1>
              <p className="md:text-xl max-w-3xl leading-relaxed inter-font text-lg font-light text-muted-foreground mx-auto">
                I build scalable web apps, AI-powered tools, and mobile experiences. Passionate about turning ideas into products that people love to use.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <ViewWorkButton />
              <GetInTouchButton />
            </div>

            <div className="divider mb-16" />

            {/* Projects */}
            <div id="projects" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
              {projects.map((project, index) => (
                <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="glass-card rounded-2xl p-6 text-left cursor-pointer block">
                  <div className="project-image rounded-xl h-32 mb-4 flex items-center justify-center">
                    {project.icon}
                  </div>
                  <h3 className="text-lg font-medium text-card-foreground mb-2 geist-font">{project.title}</h3>
                  <p className="text-muted-foreground text-sm inter-font mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="skill-badge px-2 py-1 rounded text-xs text-muted-foreground">{tag}</span>
                    ))}
                  </div>
                </a>
              ))}
            </div>

            <div className="divider mb-16" />

            {/* Stats */}
            <div id="skills" className="flex flex-col sm:flex-row justify-center items-center gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={stat.label} className="flex items-center gap-8">
                  <div>
                    <div className="text-3xl md:text-4xl font-light text-foreground mb-1 geist-font tracking-tight">{stat.value}</div>
                    <div className="text-muted-foreground text-sm inter-font font-normal">{stat.label}</div>
                  </div>
                  {index < stats.length - 1 && <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-input to-transparent" />}
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Connect Section */}
        <section id="connect" className="relative px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-foreground text-center mb-10 geist-font tracking-tight">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h2>
            <ClipPathLinks />
          </div>
        </section>
      </div>
    </div>
  );
}
