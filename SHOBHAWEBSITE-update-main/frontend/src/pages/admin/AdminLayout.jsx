import React from "react";
import { NavLink, Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Logo } from "../../components/site/Logo";
import {
  Inbox,
  Package,
  LayoutGrid,
  LogOut,
  ExternalLink,
} from "lucide-react";

export default function AdminLayout() {
  const { user, loading, logout } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F7FAFD]">
        <div className="text-[#4B5563]">Loading…</div>
      </div>
    );
  }
  if (!user) return <Navigate to="/admin/login" replace />;

  const links = [
    { to: "/admin", end: true, label: "Dashboard", icon: LayoutGrid },
    { to: "/admin/inquiries", label: "Inquiries", icon: Inbox },
    { to: "/admin/products", label: "Products", icon: Package },
    { to: "/admin/content", label: "Homepage Content", icon: LayoutGrid },
  ];

  return (
    <div
      data-testid="admin-layout"
      className="min-h-screen bg-[#F7FAFD] flex"
    >
      <aside className="hidden md:flex w-64 flex-col bg-[#12233D] text-white sticky top-0 h-screen">
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <img
              src="/brand/shobha-logo.svg"
              alt="Shobha Healthcare"
              className="h-11 w-11"
            />
            <div className="leading-tight">
              <div className="font-display font-semibold text-white text-base">
                Shobha
              </div>
              <div className="text-[10px] tracking-[0.22em] uppercase text-[#62C7F5] font-semibold">
                Healthcare
              </div>
            </div>
          </div>
          <div className="mt-4 text-[11px] tracking-[0.22em] uppercase text-[#62C7F5]/80 font-semibold">
            Admin Console
          </div>
        </div>
        <nav className="p-4 space-y-1 flex-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              data-testid={`admin-nav-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-colors ${
                  isActive
                    ? "bg-[#0738A6] text-white"
                    : "text-white/70 hover:bg-white/[0.06] hover:text-white"
                }`
              }
            >
              <l.icon className="w-4 h-4" />
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="p-4 border-t border-white/10 space-y-2">
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-white/70 hover:bg-white/[0.06] hover:text-white"
          >
            <ExternalLink className="w-4 h-4" /> View site
          </a>
          <button
            data-testid="admin-logout"
            onClick={() => {
              logout();
              navigate("/admin/login");
            }}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-white/70 hover:bg-white/[0.06] hover:text-white"
          >
            <LogOut className="w-4 h-4" /> Sign out
          </button>
        </div>
      </aside>

      <main className="flex-1 min-w-0">
        <div className="md:hidden bg-[#12233D] text-white px-5 py-4 flex items-center justify-between sticky top-0 z-10">
          <Logo className="h-7 w-auto" showText={false} />
          <button
            onClick={() => {
              logout();
              navigate("/admin/login");
            }}
            className="text-white/70 text-sm flex items-center gap-2"
          >
            <LogOut className="w-4 h-4" /> Sign out
          </button>
        </div>
        <div className="md:hidden bg-white border-b border-[#E9EEF5] px-5 py-3 flex gap-3 overflow-x-auto no-scrollbar">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `text-sm whitespace-nowrap px-3 py-1.5 rounded-full ${
                  isActive
                    ? "bg-[#0738A6] text-white"
                    : "text-[#12233D] hover:bg-[#F7FAFD]"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
        <Outlet />
      </main>
    </div>
  );
}
