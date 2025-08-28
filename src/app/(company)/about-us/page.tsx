export default function AboutUsPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="space-y-8">
        <AboutUs />
        <Partners />
      </div>
    </div>
  );
}

function AboutUs() {
  return (
    <section id="aboutus" className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800">About Us Page</h1>
    </section>
  )
}

function Partners() {
  return (
    <section id="partners" className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800">Partner Page</h1>
    </section>
  )
}