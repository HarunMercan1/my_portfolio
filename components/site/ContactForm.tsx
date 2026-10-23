"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useLang } from "@/lib/i18n";

const WEB3FORMS_KEY = "fec8c11a-ab8a-429b-a398-da5c9482982b";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<Status>("idle");
    const { t } = useLang();

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
                <h3 className="mt-4 font-display text-xl font-bold">{t("Mesajın ulaştı", "Message received")}</h3>
                <p className="mt-2 text-fg-2">{t("En kısa sürede dönüş yapacağım. Teşekkürler!", "I will get back to you as soon as possible. Thanks!")}</p>
                <button onClick={() => setStatus("idle")} className="mt-6 text-sm font-semibold text-coral-strong hover:underline">
                    {t("Yeni mesaj gönder", "Send another message")}
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
                    <span className="block text-sm font-medium mb-1.5">{t("Adın", "Name")}</span>
                    <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={field}
                        placeholder={t("Adın Soyadın", "Your full name")}
                    />
                </label>
                <label className="block">
                    <span className="block text-sm font-medium mb-1.5">{t("E-posta", "Email")}</span>
                    <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={field}
                        placeholder={t("ornek@mail.com", "you@example.com")}
                    />
                </label>
            </div>
            <label className="block">
                <span className="block text-sm font-medium mb-1.5">{t("Mesajın", "Message")}</span>
                <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${field} resize-none`}
                    placeholder={t("Öneri, hata bildirimi ya da iş birliği...", "A suggestion, bug report or collaboration idea...")}
                />
            </label>

            {status === "error" && (
                <p className="text-sm text-coral-strong">{t("Mesaj gönderilemedi. Lütfen tekrar dene ya da doğrudan e-posta at.", "The message could not be sent. Please try again or email me directly.")}</p>
            )}

            <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-coral px-6 py-3.5 font-semibold text-on-coral hover:brightness-95 disabled:opacity-60 transition"
            >
                {status === "sending" ? (
                    <>
                        <Loader2 className="w-4 h-4 animate-spin" /> {t("Gönderiliyor...", "Sending...")}
                    </>
                ) : (
                    <>
                        <Send className="w-4 h-4" /> {t("Gönder", "Send")}
                    </>
                )}
            </button>
        </form>
    );
}
