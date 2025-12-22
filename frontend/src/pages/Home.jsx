import Hero from "../components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="py-20 px-8 text-center">
        <h3 className="text-3xl font-bold mb-6">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-white shadow rounded-lg">
            <h4 className="font-semibold text-xl mb-3">Cloud Solutions</h4>
            <p className="text-gray-600">Secure, scalable cloud engineering and deployments.</p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg">
            <h4 className="font-semibold text-xl mb-3">Web Development</h4>
            <p className="text-gray-600">Modern web apps tailored to business needs.</p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg">
            <h4 className="font-semibold text-xl mb-3">App Development</h4>
            <p className="text-gray-600">Cross-platform or native solutions for enterprises.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
