import { useState, useEffect, useRef } from "react";
import { Send, MessageCircle } from "lucide-react";
import { gsap } from "gsap";
import { useTranslation } from "react-i18next";

export default function ContactModal() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Animation d'ouverture du modal
  useEffect(() => {
    if (isOpen && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        {
          opacity: 0,
          y: 20,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        }
      );
    }
  }, [isOpen]);

  // Animation du bouton flottant au chargement
  useEffect(() => {
    // L'état initial est déjà défini dans usePageAnimations
    gsap.to(".contact-button", {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      ease: "back.out(1.7)",
      delay: 0.9, // Apparaît en même temps que les icônes sociales
    });
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
    // Optionally close modal after submission
    // setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="contact-button cursor-pointer fixed bottom-8 right-8 w-16 h-16 bg-primary text-white rounded-full shadow-lg hover:bg-primary/80 transition-all duration-300 flex items-center justify-center z-50"
        style={{ opacity: 0, transform: 'scale(0)' }}
        aria-label="Ouvrir le formulaire de contact"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        >
          {/* Modal Content - Positioned near the button */}
          <div
            ref={modalRef}
            className="fixed bottom-24 right-8 bg-[#111111] rounded-2xl shadow-2xl max-w-[350px] w-full max-h-[80vh] overflow-y-auto z-50"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-[#111111] border-b border-gray-600 px-6 py-4 flex items-center justify-between rounded-t-2xl">
              <h2 className="text-2xl font-bold text-[#FAFAFA]">{t("contactModal.title")}</h2>
              {/* <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Fermer le modal"
              >
                <X className="w-6 h-6" />
              </button> */}
            </div>

            {/* Modal Body */}
            <div className="p-6">

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="modal-name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        {t("contactModal.form.fullName")}
                      </label>
                      <input
                        type="text"
                        id="modal-name"
                        name="name"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder={t("contactModal.form.yourName")}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="modal-email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        {t("contactModal.form.email")}
                      </label>
                      <input
                        type="email"
                        id="modal-email"
                        name="email"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder={t("contactModal.form.yourEmail")}
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label
                        htmlFor="modal-subject"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        {t("contactModal.form.subject")}
                      </label>
                      <input
                        type="text"
                        id="modal-subject"
                        name="subject"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder={t("contactModal.form.messageSubject")}
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="modal-message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        {t("contactModal.form.message")}
                      </label>
                      <textarea
                        id="modal-message"
                        name="message"
                        required
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                        placeholder={t("contactModal.form.yourMessage")}
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="cursor-pointer w-full px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/80 transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5 text-white" />
                      {t("contactModal.form.sendMessage")}
                    </button>
                  </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

