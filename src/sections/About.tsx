export default function About() {
  return (
    <section id="about" className="animate-section text-[#FAFAFA] py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with large title */}
        <div className="relative mb-20">
          {/* <h1 className="text-6xl md:text-6xl font-bold relative z-10">
            About
          </h1> */}
          <h2 className="shine-effect text-5xl md:text-5xl font-bold absolute top-0 left-0 -z-0">
            About Me
          </h2>
        </div>

        {/* Main Content - 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 - Mon Parcours */}
          <div className="animate-card bg-[#111111] rounded-lg p-8 border border-gray-600">
            <h2 className="text-2xl font-bold mb-6 text-[#7f22ff]">
              My Journey
            </h2>

            <p className="text-white text-sm leading-relaxed">
              My journey into software development began with curiosity and a
              strong desire to build useful digital solutions. Over time, I have
              developed skills in web and mobile technologies, focusing on
              creating reliable, efficient, and user-centered applications that
              solve real-world problems.
            </p>

            <p className="text-white text-sm leading-relaxed mt-4">
              I focus on building clean, scalable, and maintainable applications
              that deliver real value to users. Through continuous learning and
              hands-on experience, I strive to improve performance, usability,
              and overall user experience in every project I work on.
            </p>
          </div>

          {/* Card 2 - Mes Perspectives Futures */}
          <div className="animate-card bg-[#111111] rounded-lg p-8 border border-gray-600">
            <h2 className="text-2xl font-bold mb-6 text-[#7f22ff]">
              My Future Perspectives
            </h2>

            <p className="text-gray-300 text-sm leading-relaxed">
              I aim to continuously expand my technical expertise while taking
              on new challenges that push me to grow as a developer. My goal is
              to contribute to impactful projects that combine innovation,
              performance, and real-world usefulness.
            </p>

            <p className="text-gray-300 text-sm leading-relaxed mt-4">
              In the future, I plan to deepen my knowledge of modern frameworks,
              backend architectures, and mobile technologies. By staying curious
              and adaptable, I strive to build scalable solutions that make a
              meaningful difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
