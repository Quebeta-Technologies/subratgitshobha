import React, { useEffect, useState } from "react";
import { api, formatApiError } from "../../lib/api";
import { toast } from "sonner";
import { Save, Plus, Trash2 } from "lucide-react";

export default function AdminContent() {
  const [data, setData] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    api
      .get("/content/homepage")
      .then((r) => setData(r.data))
      .catch((e) => toast.error(formatApiError(e)));
  }, []);

  if (!data)
    return (
      <div className="p-10 text-[#4B5563]">Loading homepage content…</div>
    );

  const updateSlide = (i, k, v) => {
    const slides = [...data.hero_slides];
    slides[i] = { ...slides[i], [k]: v };
    setData({ ...data, hero_slides: slides });
  };
  const addSlide = () => {
    setData({
      ...data,
      hero_slides: [
        ...data.hero_slides,
        {
          id: `slide-${Date.now()}`,
          eyebrow: "",
          headline: "",
          subheadline: "",
          cta_label: "Learn More",
          cta_link: "#contact",
          image_url: "",
        },
      ],
    });
  };
  const removeSlide = (i) => {
    const slides = [...data.hero_slides];
    slides.splice(i, 1);
    setData({ ...data, hero_slides: slides });
  };

  const updateTrust = (i, k, v) => {
    const arr = [...data.trust_strip];
    arr[i] = { ...arr[i], [k]: v };
    setData({ ...data, trust_strip: arr });
  };
  const updateGhana = (i, k, v) => {
    const arr = [...data.ghana_stats];
    arr[i] = { ...arr[i], [k]: v };
    setData({ ...data, ghana_stats: arr });
  };

  const save = async () => {
    setSaving(true);
    try {
      const payload = { ...data };
      delete payload._id;
      await api.put("/content/homepage", payload);
      toast.success("Homepage content updated");
    } catch (e) {
      toast.error(formatApiError(e));
    } finally {
      setSaving(false);
    }
  };

  return (
    <div data-testid="admin-content-page" className="p-6 md:p-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="text-[12px] font-semibold uppercase tracking-widest text-[#0738A6]">
            CMS
          </div>
          <h1 className="mt-2 font-display font-semibold text-3xl text-[#12233D]">
            Homepage Content
          </h1>
        </div>
        <button
          data-testid="content-save"
          onClick={save}
          disabled={saving}
          className="btn-primary disabled:opacity-70"
        >
          <Save className="w-4 h-4" /> {saving ? "Saving…" : "Save changes"}
        </button>
      </div>

      <Section title="Hero Carousel">
        <div className="space-y-4">
          {data.hero_slides.map((s, i) => (
            <div
              key={s.id}
              className="bg-white border border-[#E9EEF5] rounded-2xl p-5 grid md:grid-cols-2 gap-4"
            >
              <Field
                label="Eyebrow"
                value={s.eyebrow || ""}
                onChange={(v) => updateSlide(i, "eyebrow", v)}
              />
              <Field
                label="Headline"
                value={s.headline}
                onChange={(v) => updateSlide(i, "headline", v)}
              />
              <div className="md:col-span-2">
                <Label>Subheadline</Label>
                <textarea
                  rows={2}
                  value={s.subheadline}
                  onChange={(e) => updateSlide(i, "subheadline", e.target.value)}
                  className="w-full bg-white border border-[#E9EEF5] rounded-xl px-4 py-3 text-[#12233D] focus:ring-2 focus:ring-[#0738A6] outline-none"
                />
              </div>
              <Field
                label="CTA Label"
                value={s.cta_label}
                onChange={(v) => updateSlide(i, "cta_label", v)}
              />
              <Field
                label="CTA Link"
                value={s.cta_link}
                onChange={(v) => updateSlide(i, "cta_link", v)}
              />
              <div className="md:col-span-2">
                <Field
                  label="Image URL"
                  value={s.image_url}
                  onChange={(v) => updateSlide(i, "image_url", v)}
                />
              </div>
              <div className="md:col-span-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => removeSlide(i)}
                  className="inline-flex items-center gap-1.5 text-[#E84D6C] text-xs font-semibold hover:underline"
                >
                  <Trash2 className="w-3.5 h-3.5" /> Remove slide
                </button>
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={addSlide}
            className="btn-secondary text-sm"
          >
            <Plus className="w-4 h-4" /> Add slide
          </button>
        </div>
      </Section>

      <Section title="Trust Strip">
        <div className="grid md:grid-cols-2 gap-4">
          {data.trust_strip.map((t, i) => (
            <div
              key={i}
              className="bg-white border border-[#E9EEF5] rounded-2xl p-5 grid grid-cols-2 gap-3"
            >
              <Field
                label="Value"
                value={t.value}
                onChange={(v) => updateTrust(i, "value", v)}
              />
              <Field
                label="Label"
                value={t.label}
                onChange={(v) => updateTrust(i, "label", v)}
              />
            </div>
          ))}
        </div>
      </Section>

      <Section title="Ghana Stats">
        <div className="grid md:grid-cols-2 gap-4">
          {data.ghana_stats.map((t, i) => (
            <div
              key={i}
              className="bg-white border border-[#E9EEF5] rounded-2xl p-5 grid grid-cols-2 gap-3"
            >
              <Field
                label="Value"
                value={t.value}
                onChange={(v) => updateGhana(i, "value", v)}
              />
              <Field
                label="Label"
                value={t.label}
                onChange={(v) => updateGhana(i, "label", v)}
              />
            </div>
          ))}
        </div>
      </Section>

      <Section title="Founder Message">
        <div className="bg-white border border-[#E9EEF5] rounded-2xl p-5 grid gap-4">
          <div>
            <Label>Quote</Label>
            <textarea
              rows={5}
              value={data.founder_quote}
              onChange={(e) =>
                setData({ ...data, founder_quote: e.target.value })
              }
              className="w-full bg-white border border-[#E9EEF5] rounded-xl px-4 py-3 text-[#12233D] focus:ring-2 focus:ring-[#0738A6] outline-none"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Field
              label="Founder Name"
              value={data.founder_name}
              onChange={(v) => setData({ ...data, founder_name: v })}
            />
            <Field
              label="Founder Title"
              value={data.founder_title}
              onChange={(v) => setData({ ...data, founder_title: v })}
            />
          </div>
        </div>
      </Section>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="mb-10">
      <h2 className="font-display font-semibold text-xl text-[#12233D] mb-4">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Label({ children }) {
  return (
    <label className="block text-[12px] font-semibold uppercase tracking-wide text-[#12233D]/70 mb-2">
      {children}
    </label>
  );
}

function Field({ label, value, onChange }) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-white border border-[#E9EEF5] rounded-xl px-4 py-3 text-[#12233D] focus:ring-2 focus:ring-[#0738A6] outline-none"
      />
    </div>
  );
}
