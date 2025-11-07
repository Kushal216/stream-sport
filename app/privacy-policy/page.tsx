import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="bg-gray-100 min-h-screen text-gray-900">
      <Navbar />
      <section className="max-w-4xl mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">Privacy Policy</h1>
        <p className="mb-4">
          At Stream Sport, your privacy is our top priority. This policy explains how we collect, use, and protect your personal information.
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>We collect data such as email, device info, and app activity to enhance user experience.</li>
          <li>Your information is never sold or shared with third parties without consent.</li>
          <li>Cookies are used to improve performance and analytics.</li>
          <li>You may request data deletion anytime by contacting us.</li>
        </ul>
        <p className="mt-4">
          For questions, contact us at <a href="mailto:sportyshishir@gmail.com" className="text-blue-600">sportyshishir@gmail.com</a>.
        </p>
      </section>
      <Footer />
    </main>
  );
}
