export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.geekextreme.com/wp-content/uploads/2024/09/best-ide-for-java-programming-Superior-for-Java-Web-Development_-MyEclipse-298855637.jpg')",
        }}
      />

      {/* Overlay to match your bg-[#f5e6d3] */}
      <div className="absolute inset-0 bg-[#000]/60" />

      {/* Content */}
      <div className="relative max-w-3xl mx-auto px-6 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          I’m a WordPress Developer & Frontend Developer
        </h1>
       <div> <p className="mt-4 text-lg md:text-xl text-slate-100">
          I create beautiful, fast, and responsive websites that help businesses stand out online.
          From custom WordPress solutions to sleek, modern front-end interfaces, I transform ideas
          into seamless, pixel-perfect digital experiences.
        </p>
        <button className="mt-6 px-6 py-3 bg-gray-900 text-white rounded-2xl shadow hover:bg-gray-800 transition">
          View My Work
        </button> | <button className="mt-6 px-6 py-3 bg-gray-900 text-white rounded-2xl shadow hover:bg-gray-800 transition">
          Work With Me
        </button></div>
      </div>
    </section>
  );
}
