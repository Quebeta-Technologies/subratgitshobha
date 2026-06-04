import React, { useEffect, useState } from "react";
import { api, formatApiError } from "../../lib/api";
import { toast } from "sonner";
import { Plus, Trash2, Pencil, Save, X } from "lucide-react";

const CATEGORIES = [
  "Oncology",
  "Respiratory",
  "Critical Care",
  "Biologicals",
  "Nutraceuticals",
  "Anti-Infective",
];

const emptyForm = {
  name: "",
  category: "Oncology",
  description: "",
  composition: "",
  image_url: "",
  is_featured: false,
};

export default function AdminProducts() {
  const [items, setItems] = useState([]);
  const [editing, setEditing] = useState(null); // product id or "new" or null
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);

  const load = () => {
    api
      .get("/products")
      .then((r) => setItems(r.data))
      .catch((e) => toast.error(formatApiError(e)));
  };
  useEffect(load, []);

  const startNew = () => {
    setForm(emptyForm);
    setEditing("new");
  };
  const startEdit = (p) => {
    setForm({
      name: p.name,
      category: p.category,
      description: p.description,
      composition: p.composition || "",
      image_url: p.image_url || "",
      is_featured: !!p.is_featured,
    });
    setEditing(p.id);
  };
  const cancel = () => {
    setEditing(null);
    setForm(emptyForm);
  };

  const save = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      if (editing === "new") {
        await api.post("/products", form);
        toast.success("Product created");
      } else {
        await api.put(`/products/${editing}`, form);
        toast.success("Product updated");
      }
      cancel();
      load();
    } catch (err) {
      toast.error(formatApiError(err));
    } finally {
      setSaving(false);
    }
  };

  const remove = async (id) => {
    if (!confirm("Delete this product?")) return;
    try {
      await api.delete(`/products/${id}`);
      toast.success("Deleted");
      load();
    } catch (e) {
      toast.error(formatApiError(e));
    }
  };

  return (
    <div data-testid="admin-products-page" className="p-6 md:p-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="text-[12px] font-semibold uppercase tracking-widest text-[#0738A6]">
            Catalog
          </div>
          <h1 className="mt-2 font-display font-semibold text-3xl text-[#12233D]">
            Products
          </h1>
        </div>
        <button
          data-testid="product-new"
          onClick={startNew}
          className="btn-primary"
        >
          <Plus className="w-4 h-4" /> New Product
        </button>
      </div>

      {editing && (
        <form
          onSubmit={save}
          className="bg-white border border-[#E9EEF5] rounded-2xl p-6 md:p-8 mb-8"
          data-testid="product-form"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display font-semibold text-xl text-[#12233D]">
              {editing === "new" ? "Create product" : "Edit product"}
            </h3>
            <button
              type="button"
              onClick={cancel}
              className="text-[#4B5563] hover:text-[#12233D]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <Field
              label="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <div>
              <Label>Category</Label>
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="w-full bg-white border border-[#E9EEF5] rounded-xl px-4 py-3 text-[#12233D] focus:ring-2 focus:ring-[#0738A6] outline-none"
              >
                {CATEGORIES.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
            <Field
              label="Composition"
              value={form.composition}
              onChange={(e) =>
                setForm({ ...form, composition: e.target.value })
              }
            />
            <Field
              label="Image URL"
              value={form.image_url}
              onChange={(e) => setForm({ ...form, image_url: e.target.value })}
              placeholder="https://..."
            />
            <div className="md:col-span-2">
              <Label>Description</Label>
              <textarea
                rows={4}
                required
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                className="w-full bg-white border border-[#E9EEF5] rounded-xl px-4 py-3 text-[#12233D] focus:ring-2 focus:ring-[#0738A6] outline-none"
              />
            </div>
            <label className="md:col-span-2 inline-flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={form.is_featured}
                onChange={(e) =>
                  setForm({ ...form, is_featured: e.target.checked })
                }
                className="w-4 h-4 accent-[#0738A6]"
              />
              <span className="text-sm text-[#12233D]">Featured on homepage</span>
            </label>
          </div>
          <div className="mt-7 flex gap-3">
            <button
              type="submit"
              disabled={saving}
              className="btn-primary disabled:opacity-70"
            >
              <Save className="w-4 h-4" />
              {saving ? "Saving…" : "Save"}
            </button>
            <button type="button" onClick={cancel} className="btn-secondary">
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="bg-white border border-[#E9EEF5] rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-[#F7FAFD] text-[#12233D]/70 text-[11px] uppercase tracking-widest">
              <tr>
                <th className="text-left px-5 py-3 font-semibold">Product</th>
                <th className="text-left px-5 py-3 font-semibold">Category</th>
                <th className="text-left px-5 py-3 font-semibold">Composition</th>
                <th className="text-left px-5 py-3 font-semibold">Featured</th>
                <th className="text-right px-5 py-3 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((p) => (
                <tr key={p.id} className="border-t border-[#E9EEF5]">
                  <td className="px-5 py-4 text-[#12233D] font-medium">
                    {p.name}
                    <div className="text-xs text-[#4B5563] mt-1 max-w-md truncate">
                      {p.description}
                    </div>
                  </td>
                  <td className="px-5 py-4 text-[#4B5563]">{p.category}</td>
                  <td className="px-5 py-4 text-[#4B5563]">
                    {p.composition || "—"}
                  </td>
                  <td className="px-5 py-4">
                    {p.is_featured ? (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-[#F2C14E]/20 text-[#9c7611]">
                        Featured
                      </span>
                    ) : (
                      <span className="text-[#4B5563]/60 text-xs">—</span>
                    )}
                  </td>
                  <td className="px-5 py-4 text-right">
                    <div className="inline-flex gap-2">
                      <button
                        onClick={() => startEdit(p)}
                        className="inline-flex items-center gap-1 text-[#0738A6] text-xs font-semibold hover:underline"
                      >
                        <Pencil className="w-3.5 h-3.5" /> Edit
                      </button>
                      <button
                        onClick={() => remove(p.id)}
                        className="inline-flex items-center gap-1 text-[#E84D6C] text-xs font-semibold hover:underline"
                      >
                        <Trash2 className="w-3.5 h-3.5" /> Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {items.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-12 text-[#4B5563]">
                    No products yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function Label({ children }) {
  return (
    <label className="block text-[12px] font-semibold uppercase tracking-wide text-[#12233D]/70 mb-2">
      {children}
    </label>
  );
}

function Field({ label, ...rest }) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        {...rest}
        className="w-full bg-white border border-[#E9EEF5] rounded-xl px-4 py-3 text-[#12233D] focus:ring-2 focus:ring-[#0738A6] outline-none"
      />
    </div>
  );
}
