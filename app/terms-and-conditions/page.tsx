import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsConditions() {
  return (
    <main className="bg-gray-100 min-h-screen text-gray-900">
      <Navbar/>
      <section className="max-w-4xl mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: September 14, 2025</p>

        <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
        <p className="mb-6">
          By accessing or using our app, &ldquo;Sporty&rdquo; (the &ldquo;Service&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms, you may not use the Service.
        </p>

        <h2 className="text-2xl font-semibold mb-3">2. Use of the App</h2>
        <p className="mb-6">
          The Service is intended for your personal, non-commercial use. You agree to use the Service in accordance with all applicable laws and regulations. You are solely responsible for your conduct and any data, text, files, information, usernames, images, graphics, photos, profiles, audio and video clips, sounds, musical works, works of authorship, applications, links, and other content or materials (collectively, &ldquo;Content&rdquo;) that you submit, post, or display on or via the Service.
        </p>

        <h2 className="text-2xl font-semibold mb-3">3. Intellectual Property</h2>
        <p className="mb-6">
          The Service and its original content, features, and functionality are owned by the developers and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
        </p>

        <h2 className="text-2xl font-semibold mb-3">4. Disclaimers</h2>
        <p className="mb-6">
          The Service is provided on an &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; basis. The developers make no warranties, expressed or implied, regarding the Service. We do not warrant that the Service will be uninterrupted, secure, or error-free.
        </p>

        <h2 className="text-2xl font-semibold mb-3">5. Limitation of Liability</h2>
        <p className="mb-6">
          In no event shall the developers be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use, or alteration of your transmissions or Content, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not we have been informed of the possibility of such damage.
        </p>

        <h2 className="text-2xl font-semibold mb-3">6. Contact Us</h2>
        <p className="mb-6">
          If you have any questions about these Terms, please contact us at:
          <br />
          <strong>Email:</strong> <a href="mailto:sportysishir@gmail.com" className="text-blue-600 hover:underline">sportysishir@gmail.com</a>
        </p>
      </section>
      <Footer/>
    </main>
  );
}