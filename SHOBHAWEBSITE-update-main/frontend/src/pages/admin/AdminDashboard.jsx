import React, { useEffect, useState } from "react";
import { api } from "../../lib/api";
import { Inbox, Package, Mail, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function AdminDashboard() {
  const { user } = useAuth();
  const [inquiries, setInquiries] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Promise.all([api.get("/inquiries"), api.get("/products")])
      .then(([i, p]) => {
        setInquiries(i.data);
        setProducts(p.data);
      })
      .catch(() => {});
  }, []);

  const newCount = inquiries.filter((i) => i.status === "new").length;

  const stats = [
    { label: "Total Inquiries", value: inquiries.length, icon: Inbox, color: "#0738A6" },
    { label: "New (Unread)", value: newCount, icon: Mail, color: "#E84D6C" },
    { label: "Products", value: products.length, icon: Package, color: "#9DCD4A" },
    { label: "Featured", value: products.filter((p) => p.is_featured).length, icon: TrendingUp, color: "#F2C14E" },
  ];

  return (
    <div data-testid="admin-dashboard" className="p-6 md:p-10">
      <div className="mb-10">
        <div className="text-[12px] font-semibold uppercase tracking-widest text-[#0738A6]">
          Overview
        </div>
        <h1 className="mt-2 font-display font-semibold text-3xl md:text-4xl text-[#12233D]">
          Welcome back, {user?.name || "Admin"}
        </h1>
        <p className="text-[#4B5563] mt-2">
          A summary of your inquiries, products, and homepage activity.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {stats.map((s) => (
          <div
            key={s.label}
            data-testid={`stat-${s.label.toLowerCase().replace(/\s+/g, "-")}`}
            className="bg-white border border-[#E9EEF5] rounded-2xl p-6"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
              style={{ background: `${s.color}1A` }}
            >
              <s.icon className="w-5 h-5" style={{ color: s.color }} />
            </div>
            <div className="font-display font-semibold text-3xl text-[#12233D]">
              {s.value}
            </div>
            <div className="text-sm text-[#4B5563] mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white border border-[#E9EEF5] rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display font-semibold text-lg text-[#12233D]">
              Recent Inquiries
            </h3>
            <Link
              to="/admin/inquiries"
              className="text-sm text-[#0738A6] font-semibold hover:underline"
            >
              View all →
            </Link>
          </div>
          <div className="divide-y divide-[#E9EEF5]">
            {inquiries.slice(0, 5).map((i) => (
              <div key={i.id} className="py-3 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <div className="font-medium text-[#12233D] truncate">
                    {i.name} <span className="text-[#4B5563] font-normal">— {i.inquiry_type}</span>
                  </div>
                  <div className="text-xs text-[#4B5563] truncate">{i.email}</div>
                </div>
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${
                    i.status === "new"
                      ? "bg-[#E84D6C]/10 text-[#E84D6C]"
                      : i.status === "archived"
                      ? "bg-[#E9EEF5] text-[#4B5563]"
                      : "bg-[#9DCD4A]/15 text-[#5e8722]"
                  }`}
                >
                  {i.status}
                </span>
              </div>
            ))}
            {inquiries.length === 0 && (
              <div className="text-sm text-[#4B5563] py-6 text-center">
                No inquiries yet.
              </div>
            )}
          </div>
        </div>

        <div className="bg-white border border-[#E9EEF5] rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display font-semibold text-lg text-[#12233D]">
              Recent Products
            </h3>
            <Link
              to="/admin/products"
              className="text-sm text-[#0738A6] font-semibold hover:underline"
            >
              Manage →
            </Link>
          </div>
          <div className="divide-y divide-[#E9EEF5]">
            {products.slice(0, 5).map((p) => (
              <div key={p.id} className="py-3 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <div className="font-medium text-[#12233D] truncate">
                    {p.name}
                  </div>
                  <div className="text-xs text-[#4B5563]">{p.category}</div>
                </div>
                {p.is_featured && (
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-[#F2C14E]/20 text-[#9c7611]">
                    Featured
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
