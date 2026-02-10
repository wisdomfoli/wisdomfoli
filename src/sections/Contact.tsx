import { UserRound, Clock, Headphones, Twitter, Facebook, Instagram, Send } from "lucide-react";
import arrowRightUp from "../assets/icons/arrow_right_up.png";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="animate-section text-[#FAFAFA] py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section title like other sections */}
        <div className="relative mb-20">
          <h2 className="shine-effect text-5xl md:text-5xl font-bold absolute top-0 left-0 -z-0">
            Contact
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Information */}
          <div className="">
            <h3 className="text-xl md:text-4xl font-semibold mb-6 flex items-center gap-4">
              <span className="leading-none">Reach out</span>
              <img
                src={arrowRightUp}
                alt=""
                className="w-6 h-6 object-contain invert shrink-0 block"
              />
            </h3>

            <p className="text-white mb-8 max-w-lg text-base leading-relaxed">
              Have a question or need assistance? Reach out to our dedicated support team. We're here to help with any inquiries you may have.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                { text: "Personalized assistance", icon: UserRound },
                { text: "Timely response", icon: Clock },
                { text: "Comprehensive support", icon: Headphones },
              ].map(({ text, icon: Icon }) => (
                <li key={text} className="flex items-center gap-3 text-gray-400">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white flex items-center justify-center">
                    <Icon className="w-3.5 h-3.5 text-black" strokeWidth={2.5} />
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
                className="w-11 h-11 rounded-lg border border-white/30 bg-black flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg border border-white/30 bg-black flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg border border-white/30 bg-black flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="animate-card bg-[#1a1a1a] rounded-2xl p-8 border border-gray-800 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-[#2a2a2a] border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors"
                  placeholder="Name"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-[#2a2a2a] border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors"
                  placeholder="Email"
                />
              </div>

              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 bg-[#2a2a2a] border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors resize-none"
                placeholder="Message"
              />

              {/* <button
                type="submit"
                className="w-full px-8 py-4 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition-colors"
              >
                Submit
              </button> */}
              <button
                type="submit"
                className="inline-flex cursor-pointer items-center gap-2 px-8 py-4 bg-[#7f22ff] text-white rounded-full hover:bg-[#7f22ff]/80] transition-colors font-medium text-lg"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
