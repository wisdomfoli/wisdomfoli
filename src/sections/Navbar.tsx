import { useScrollSpy } from "../hooks/useScrollSpy";

export default function Navbar() {
  const sectionIds = ["home", "about", "summary", "skills", "projects"];
  const activeSection = useScrollSpy(sectionIds, 150);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "summary", label: "Summary" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      const offset = 80; // Offset pour la navbar sticky
      const sectionTop = section.offsetTop - offset;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  };

  const isActive = (id: string) => {
    return activeSection === id;
  };

  return (
    <nav className="navbar-animate bg-transparent sticky top-0 z-50">
      <div className="flex justify-center py-4 px-8">
        {/* Navigation Links */}
        <div className="flex items-center gap-2 bg-black px-4 py-2 rounded-full">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleClick(e, link.id)}
                className={`px-4 py-1.5 text-sm font-medium transition-colors cursor-pointer ${
                  isActive(link.id)
                    ? "rounded-full text-[#7f22ff]"
                    : "text-stone-100 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
        </div>
      </div>
    </nav>
  );
}
