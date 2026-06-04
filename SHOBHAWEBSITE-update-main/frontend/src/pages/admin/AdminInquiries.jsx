import React, { useEffect, useState } from "react";
import { api, formatApiError } from "../../lib/api";
import { toast } from "sonner";
import { Trash2, Mail, Archive, Eye } from "lucide-react";

export default function AdminInquiries() {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);

  const load = () => {
    setLoading(true);
    api
      .get("/inquiries")
      .then((r) => setItems(r.data))
      .catch((e) => toast.error(formatApiError(e)))
      .finally(() => setLoading(false));
  };

  useEffect(load, []);

  const updateStatus = async (id, status) => {
    try {
      await api.patch(`/inquiries/${id}`, null, { params: { status_value: status } });
      toast.success(`Marked as ${status}`);
      load();
      if (selected?.id === id) setSelected({ ...selected, status });
    } catch (e) {
      toast.error(formatApiError(e));
    }
  };

  const remove = async (id) => {
    if (!confirm("Delete this inquiry permanently?")) return;
    try {
      await api.delete(`/inquiries/${id}`);
      toast.success("Inquiry deleted");
      setSelected(null);
      load();
    } catch (e) {
      toast.error(formatApiError(e));
    }
  };

  return (
    <div data-testid="admin-inquiries-page" className="p-6 md:p-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="text-[12px] font-semibold uppercase tracking-widest text-[#0738A6]">
            Manage
          </div>
          <h1 className="mt-2 font-display font-semibold text-3xl text-[#12233D]">
            Partner Inquiries
          </h1>
        </div>
        <div className="text-sm text-[#4B5563]">{items.length} total</div>
      </div>

      <div className="grid lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 bg-white border border-[#E9EEF5] rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-[#F7FAFD] text-[#12233D]/70 text-[11px] uppercase tracking-widest">
                <tr>
                  <th className="text-left px-5 py-3 font-semibold">Name</th>
                  <th className="text-left px-5 py-3 font-semibold">Type</th>
                  <th className="text-left px-5 py-3 font-semibold">Country</th>
                  <th className="text-left px-5 py-3 font-semibold">Status</th>
                  <th className="text-right px-5 py-3 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {loading && (
                  <tr>
                    <td colSpan="5" className="text-center py-8 text-[#4B5563]">
                      Loading…
                    </td>
                  </tr>
                )}
                {!loading && items.length === 0 && (
                  <tr>
                    <td colSpan="5" className="text-center py-12 text-[#4B5563]">
                      No inquiries yet.
                    </td>
                  </tr>
                )}
                {items.map((i) => (
                  <tr
                    key={i.id}
                    data-testid={`inquiry-row-${i.id}`}
                    className={`border-t border-[#E9EEF5] hover:bg-[#F7FAFD] cursor-pointer ${
                      selected?.id === i.id ? "bg-[#F7FAFD]" : ""
                    }`}
                    onClick={() => setSelected(i)}
                  >
                    <td className="px-5 py-4 text-[#12233D] font-medium">
                      <div>{i.name}</div>
                      <div className="text-[#4B5563] text-xs">{i.email}</div>
                    </td>
                    <td className="px-5 py-4 text-[#4B5563]">{i.inquiry_type}</td>
                    <td className="px-5 py-4 text-[#4B5563]">{i.country || "—"}</td>
                    <td className="px-5 py-4">
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
                    </td>
                    <td className="px-5 py-4 text-right">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelected(i);
                        }}
                        className="text-[#0738A6] hover:underline inline-flex items-center gap-1 text-xs font-semibold"
                      >
                        <Eye className="w-3.5 h-3.5" /> View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="lg:col-span-5">
          {selected ? (
            <div
              data-testid="inquiry-detail"
              className="bg-white border border-[#E9EEF5] rounded-2xl p-6 sticky top-6"
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <h3 className="font-display font-semibold text-xl text-[#12233D]">
                    {selected.name}
                  </h3>
                  <a
                    href={`mailto:${selected.email}`}
                    className="text-[#0738A6] text-sm hover:underline"
                  >
                    {selected.email}
                  </a>
                </div>
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${
                    selected.status === "new"
                      ? "bg-[#E84D6C]/10 text-[#E84D6C]"
                      : selected.status === "archived"
                      ? "bg-[#E9EEF5] text-[#4B5563]"
                      : "bg-[#9DCD4A]/15 text-[#5e8722]"
                  }`}
                >
                  {selected.status}
                </span>
              </div>

              <dl className="grid grid-cols-2 gap-3 text-sm mb-5">
                <Row label="Type" value={selected.inquiry_type} />
                <Row label="Company" value={selected.company || "—"} />
                <Row label="Country" value={selected.country || "—"} />
                <Row label="Phone" value={selected.phone || "—"} />
                <Row
                  label="Email Sent"
                  value={selected.email_sent ? "Yes" : "No"}
                />
                <Row
                  label="Received"
                  value={new Date(selected.created_at).toLocaleString()}
                />
              </dl>

              <div className="bg-[#F7FAFD] rounded-xl p-4 border border-[#E9EEF5]">
                <div className="text-[11px] font-semibold uppercase tracking-widest text-[#4B5563] mb-2">
                  Message
                </div>
                <p className="text-[#12233D] text-sm whitespace-pre-wrap leading-relaxed">
                  {selected.message}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <button
                  onClick={() => updateStatus(selected.id, "read")}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-[#0738A6]/10 text-[#0738A6] text-xs font-semibold hover:bg-[#0738A6]/15"
                >
                  <Mail className="w-3.5 h-3.5" /> Mark Read
                </button>
                <button
                  onClick={() => updateStatus(selected.id, "archived")}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-[#E9EEF5] text-[#4B5563] text-xs font-semibold hover:bg-[#dde4ee]"
                >
                  <Archive className="w-3.5 h-3.5" /> Archive
                </button>
                <button
                  data-testid="inquiry-delete"
                  onClick={() => remove(selected.id)}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-[#E84D6C]/10 text-[#E84D6C] text-xs font-semibold hover:bg-[#E84D6C]/20 ml-auto"
                >
                  <Trash2 className="w-3.5 h-3.5" /> Delete
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white border border-dashed border-[#E9EEF5] rounded-2xl p-10 text-center text-[#4B5563] text-sm">
              Select an inquiry to view details.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div>
      <dt className="text-[10px] font-semibold uppercase tracking-widest text-[#4B5563]">
        {label}
      </dt>
      <dd className="mt-1 text-[#12233D] font-medium">{value}</dd>
    </div>
  );
}
