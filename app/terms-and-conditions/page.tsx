import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsConditions() {
  return (
    <main className="bg-gray-100 min-h-screen text-gray-900">
      <Navbar />
      <section className="max-w-4xl mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">Terms & Conditions</h1>
        <p className="mb-4">
          By using Stream Sport, you agree to comply with the following terms and conditions:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Stream Sport provides live streaming and analytics features as-is without warranty.</li>
          <li>Users are responsible for ensuring they have broadcasting rights for shared content.</li>
          <li>Unauthorized use or redistribution of Stream Sport content is prohibited.</li>
          <li>We reserve the right to modify these terms at any time.</li>
        </ul>
        <p className="mt-4">
          Continued use of the app constitutes acceptance of these terms.
        </p>
      </section>
      <Footer />
    </main>
  );
}
