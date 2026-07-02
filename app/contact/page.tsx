import { Mail, MapPin, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";

export default function ContactPage() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1fr] lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Une question, un besoin métier ou une démo à organiser ?"
            description="Écrivez-nous ou planifiez une démonstration. Réponse sous 24-48h."
          />
          <div className="mt-8 grid gap-4">
            {[
              { icon: Mail, label: "Email", value: "contact@flowsuite360.com" },
              { icon: MessageCircle, label: "WhatsApp", value: "+243 891 111 125" },
              { icon: MapPin, label: "Présence", value: "Canada / Afrique francophone" }
            ].map((item) => (
              <div key={item.label} className="flex gap-4 rounded-lg border border-slate-200 bg-white p-4">
                <item.icon className="h-6 w-6 flex-none text-brand" aria-hidden="true" />
                <div>
                  <p className="font-black text-midnight">{item.label}</p>
                  <p className="mt-1 text-muted">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
