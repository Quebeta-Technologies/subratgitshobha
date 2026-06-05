import React, { useState } from "react";
import { Logo } from "./Logo";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  ShieldCheck,
  ChevronDown,
  Wind,
  Shield,
  Syringe,
  Microscope,
  Pill,
  Sparkles,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Pharmaceuticals",
    href: "/pharmaceuticals",
    dropdown: [
      {
        icon: Wind,
        label: "MDI Inhalers",
        href: "/pharmaceuticals?tab=mdi-inhalers",
        color: "#62C7F5",
      },
      {
        icon: Shield,
        label: "B-Lactum Antibiotics",
        href: "/pharmaceuticals?tab=b-lactum-antibiotics",
        color: "#9DCD4A",
      },
      {
        icon: Syringe,
        label: "Injectables",
        href: "/pharmaceuticals?tab=injectables",
        color: "#E84D6C",
      },
      {
        icon: Microscope,
        label: "Oncology — Anti Cancer",
        href: "/pharmaceuticals?tab=oncology",
        color: "#0738A6",
      },
      {
        icon: Pill,
        label: "Cephalosporins",
        href: "/pharmaceuticals?tab=cephalosporins",
        color: "#7A1F7A",
      },
    ],
  },
  {
    label: "Nutraceuticals",
    href: "/#nutraceuticals",
  },
  { label: "Why Shobha", href: "/why-shobha" },
  { label: "Global Presence", href: "/global-presence" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // for mobile accordion

  return (
    <header
      data-testid="site-header"
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E9EEF5]"
    >
      {/* Utility bar */}
      <div className="bg-gradient-to-r from-[#12233D] via-[#0738A6] to-[#7A1F7A] text-[#E9EEF5] text-[11.5px]">
        <div className="container-x flex items-center justify-between py-1.5 gap-4">
          <div className="flex items-center gap-4 min-w-0">
            <span className="hidden md:inline-flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-[#62C7F5]" />
              +971 58 593 7521
            </span>
            <span className="hidden lg:inline-flex items-center gap-1.5">
              <Mail className="w-3 h-3 text-[#9DCD4A]" />
              admin@shobha-healthcare.com
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-[#F2C14E]" />
              Dubai, UAE
            </span>
          </div>
          <div className="hidden md:flex items-center gap-3 text-[11px]">
            <span className="inline-flex items-center gap-1 text-white/90">
              <ShieldCheck className="w-3 h-3 text-[#9DCD4A]" />
              EU-GMP Certified
            </span>
            <span className="opacity-30">·</span>
            <span className="inline-flex items-center gap-1 text-white/90">
              <ShieldCheck className="w-3 h-3 text-[#62C7F5]" />
              WHO-GMP Compliant
            </span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-x flex items-center justify-between py-2 gap-6">
        <Logo className="h-10 md:h-12 w-auto" />

        <nav className="hidden xl:flex items-center gap-1.5">
          {navLinks.map((l) => (
            <NavItem key={l.label} item={l} />
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            data-testid="header-cta-partner"
            href="/contact"
            className="hidden md:inline-flex btn-primary text-[13px] !py-2.5 !px-5"
          >
            Partner With Us
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <button
            data-testid="mobile-menu-toggle"
            className="xl:hidden p-2 text-[#12233D]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="xl:hidden border-t border-[#E9EEF5] bg-white max-h-[calc(100vh-120px)] overflow-y-auto">
          <div className="container-x py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <div key={l.label}>
                {l.dropdown ? (
                  <div>
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === l.label ? null : l.label)
                      }
                      className="w-full py-3 flex items-center justify-between text-[#12233D] font-medium border-b border-[#E9EEF5]"
                    >
                      {l.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openDropdown === l.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === l.label && (
                      <div className="pl-4 py-2 space-y-1">
                        {l.dropdown.map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            onClick={() => {
                              setOpen(false);
                              setOpenDropdown(null);
                            }}
                            className="flex items-center gap-3 py-2 text-[#4B5563] text-sm hover:text-[#0738A6]"
                          >
                            <sub.icon
                              className="w-4 h-4"
                              style={{ color: sub.color }}
                            />
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-[#12233D] font-medium border-b border-[#E9EEF5]"
                  >
                    {l.label}
                  </a>
                )}
              </div>
            ))}
            <a
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary justify-center mt-4"
            >
              Partner With Us
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function NavItem({ item }) {
  const [hover, setHover] = useState(false);
  const hasDropdown = !!item.dropdown;

  return (
    <div
      className="relative"
      onMouseEnter={() => hasDropdown && setHover(true)}
      onMouseLeave={() => hasDropdown && setHover(false)}
    >
      <a
        data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
        href={item.href}
        className="flex items-center gap-1 px-3 py-2 text-[13.5px] font-medium text-[#12233D] hover:text-[#0738A6] transition-colors rounded-lg hover:bg-[#F7FAFD]"
      >
        {item.label}
        {hasDropdown && (
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform ${
              hover ? "rotate-180" : ""
            }`}
          />
        )}
      </a>
      {hasDropdown && hover && (
        <div className="absolute top-full left-0 pt-2 z-50 min-w-[260px]">
          <div className="bg-white border border-[#E9EEF5] rounded-2xl shadow-[0_18px_50px_rgba(7,56,166,0.12)] p-2 animate-in fade-in slide-in-from-top-2">
            {item.dropdown.map((sub) => (
              <a
                key={sub.label}
                data-testid={`dropdown-${sub.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                href={sub.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#F7FAFD] group/sub transition-colors"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-transform group-hover/sub:scale-110"
                  style={{ background: `${sub.color}1A` }}
                >
                  <sub.icon className="w-4 h-4" style={{ color: sub.color }} />
                </div>
                <span className="text-[14px] font-medium text-[#12233D] group-hover/sub:text-[#0738A6]">
                  {sub.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}