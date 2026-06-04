import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Logo } from "../../components/site/Logo";
import { Loader2, ArrowRight } from "lucide-react";
import { formatApiError } from "../../lib/api";
import { toast } from "sonner";

export default function AdminLogin() {
  const { login, user } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    if (user) navigate("/admin");
  }, [user, navigate]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
      toast.success("Welcome back");
      navigate("/admin");
    } catch (err) {
      toast.error(formatApiError(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      data-testid="admin-login-page"
      className="min-h-screen bg-[#F7FAFD] grid lg:grid-cols-2"
    >
      <div className="hidden lg:flex relative bg-[#12233D] overflow-hidden items-center justify-center p-12">
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-[#0738A6]/40 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] rounded-full bg-[#62C7F5]/25 blur-3xl" />
        <div className="relative max-w-md text-white">
          <Logo className="h-14 w-auto" showText={false} />
          <h2 className="mt-10 font-display font-semibold text-3xl tracking-tight leading-tight">
            Shobha Healthcare
            <br />
            <span className="text-[#62C7F5]">Admin Console</span>
          </h2>
          <p className="mt-5 text-white/70 leading-relaxed">
            Manage homepage content, products, and partner inquiries. Secure,
            audited, and connected to your live website.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center p-6 lg:p-12">
        <form
          onSubmit={onSubmit}
          className="w-full max-w-md bg-white border border-[#E9EEF5] rounded-3xl p-8 md:p-10 shadow-[0_24px_60px_rgba(7,56,166,0.08)]"
        >
          <Logo className="h-10 w-auto lg:hidden" />
          <h1 className="mt-2 font-display font-semibold text-2xl text-[#12233D]">
            Sign in to admin
          </h1>
          <p className="text-[#4B5563] text-sm mt-2">
            Use your administrator credentials.
          </p>

          <div className="mt-7 space-y-4">
            <div>
              <label className="block text-[12px] font-semibold uppercase tracking-wide text-[#12233D]/70 mb-2">
                Email
              </label>
              <input
                data-testid="login-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white border border-[#E9EEF5] rounded-xl px-4 py-3 text-[#12233D] focus:ring-2 focus:ring-[#0738A6] focus:border-transparent outline-none transition-all"
                placeholder="admin@shobhahealthcare.com"
              />
            </div>
            <div>
              <label className="block text-[12px] font-semibold uppercase tracking-wide text-[#12233D]/70 mb-2">
                Password
              </label>
              <input
                data-testid="login-password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white border border-[#E9EEF5] rounded-xl px-4 py-3 text-[#12233D] focus:ring-2 focus:ring-[#0738A6] focus:border-transparent outline-none transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            data-testid="login-submit"
            type="submit"
            disabled={loading}
            className="btn-primary mt-7 w-full justify-center disabled:opacity-70"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> Signing in…
              </>
            ) : (
              <>
                Sign In <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
