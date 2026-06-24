import { Link } from "react-router-dom";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { profile } from "@/data/portfolio";

export const Footer = () => {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="container-narrow grid gap-10 py-14 md:grid-cols-3">
        <div>
          <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-accent text-primary-foreground">
              {profile.initials}
            </span>
            {profile.shortName}
          </Link>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            MERN stack developer & QA engineer based in {profile.location}. Building reliable products for startups and direct clients.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Navigate</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/projects" className="hover:text-foreground">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Get in touch</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 hover:text-foreground">
                <FaEnvelope className="h-4 w-4" /> {profile.email}
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-foreground">
                <FaLinkedin className="h-4 w-4" /> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-narrow flex flex-col items-center justify-between gap-2 py-5 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p>Crafted with care · MERN + QA</p>
        </div>
      </div>
    </footer>
  );
};
