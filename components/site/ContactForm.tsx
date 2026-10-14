"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

const WEB3FORMS_KEY = "fec8c11a-ab8a-429b-a398-da5c9482982b";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<Status>("idle");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setStatus("sending");
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({
                    access_key: WEB3FORMS_KEY,
                    ...form,
                    subject: `Mercan Software İletişim: ${form.name}`,
                }),
            });
            const result = await response.json();
            if (!result.success) throw new Error(result.message);
            setForm({ name: "", email: "", message: "" });
            setStatus("sent");
        } catch {
            setStatus("error");
        }
    }

    if (status === "sent") {
        return (
            <div className="rounded-3xl border border-line bg-surface p-8 text-center shadow-card">
                <CheckCircle2 className="w-10 h-10 mx-auto text-coral" />
                <h3 className="mt-4 font-display text-xl font-bold">Mesajın ulaştı</h3>
                <p className="mt-2 text-fg-2">En kısa sürede dönüş yapacağım. Teşekkürler!</p>
                <button onClick={() => setStatus("idle")} className="mt-6 text-sm font-semibold text-coral-strong hover:underline">
                    Yeni mesaj gönder
                </button>
            </div>
        );
    }

    const field =
        "w-full rounded-xl border border-line bg-bg px-4 py-3 text-fg placeholder:text-fg-3 focus:border-coral focus:outline-none transition-colors";

    return (
        <form onSubmit={handleSubmit} className="rounded-3xl border border-line bg-surface p-6 md:p-8 shadow-card space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                    <span className="block text-sm font-medium mb-1.5">Adın</span>
                    <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={field}
                        placeholder="Adın Soyadın"
                    />
                </label>
                <label className="block">
                    <span className="block text-sm font-medium mb-1.5">E-posta</span>
                    <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={field}
                        placeholder="ornek@mail.com"
                    />
                </label>
            </div>
            <label className="block">
                <span className="block text-sm font-medium mb-1.5">Mesajın</span>
                <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${field} resize-none`}
                    placeholder="Öneri, hata bildirimi ya da iş birliği..."
                />
            </label>

            {status === "error" && (
                <p className="text-sm text-coral-strong">Mesaj gönderilemedi. Lütfen tekrar dene ya da doğrudan e-posta at.</p>
            )}

            <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-coral px-6 py-3.5 font-semibold text-on-coral hover:brightness-95 disabled:opacity-60 transition"
            >
                {status === "sending" ? (
                    <>
                        <Loader2 className="w-4 h-4 animate-spin" /> Gönderiliyor...
                    </>
                ) : (
                    <>
                        <Send className="w-4 h-4" /> Gönder
                    </>
                )}
            </button>
        </form>
    );
}
