import { UserRound, Clock, Headphones, Twitter, Facebook, Instagram, Send } from "lucide-react";
import { useTranslation } from "react-i18next";
import arrowRightUp from "../assets/icons/arrow_right_up.png";

export default function Contact() {
  const { t } = useTranslation();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="animate-section text-[#FAFAFA] py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section title like other sections */}
        <div className="relative mb-16 sm:mb-20">
          <h2 className="shine-effect text-4xl sm:text-5xl md:text-5xl font-bold absolute top-0 left-0 z-0">
            {t("contact.title")}
          </h2>
          <div className="h-10 sm:h-12" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left Column - Information */}
          <div>
            <h3 className="text-xl md:text-3xl font-semibold mb-6 flex items-center gap-4">
              <span className="leading-none">{t("contact.reachOut")}</span>
              <img
                src={arrowRightUp}
                alt=""
                className="w-6 h-6 object-contain invert shrink-0 block"
              />
            </h3>

            <p className="text-white mb-8 max-w-lg text-base leading-relaxed">
              {t("contact.description")}
            </p>

            <ul className="space-y-4 mb-10">
              {[
                { text: t("contact.features.personalizedAssistance"), icon: UserRound },
                { text: t("contact.features.timelyResponse"), icon: Clock },
                { text: t("contact.features.comprehensiveSupport"), icon: Headphones },
              ].map(({ text, icon: Icon }) => (
                <li key={text} className="flex items-center gap-3 text-white">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-white/90 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-black" strokeWidth={2.5} />
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            {/* Social Media Icons */}
            <div className="flex gap-3">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="animate-card glass-card rounded-2xl p-6 sm:p-8 border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors"
                  placeholder={t("contact.form.name")}
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors"
                  placeholder={t("contact.form.email")}
                />
              </div>

              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors resize-none"
                placeholder={t("contact.form.message")}
              />

              {/* <button
                type="submit"
                className="w-full px-8 py-4 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition-colors"
              >
                Submit
              </button> */}
              <button
                type="submit"
                className="inline-flex cursor-pointer items-center gap-2 px-7 py-3.5 bg-primary text-white rounded-full hover:bg-primary/80 transition-colors font-medium text-base sm:text-lg"
              >
                <Send className="w-5 h-5" />
                <span>{t("contact.form.sendMessage")}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
