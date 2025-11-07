import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
    <main className="bg-gray-100 min-h-screen text-gray-900">
      <Navbar/>
      <section className="max-w-4xl mx-auto py-12 px-6 ">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">Privacy Policy</h1>
        <p className="text-sm text-gray-600 mb-8">Last updated: September 14, 2025</p>

        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p className="mb-4">
          Your privacy is important to us. This Privacy Policy explains how our app, <strong>Sporty</strong>, collects, uses, and protects your personal information. By using our app, you agree to the collection and use of information in accordance with this policy.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
        <p className="mb-2">We may collect certain information from you when you use the app, including:</p>
        <ul className="list-disc ml-6 space-y-2 mb-4">
          <li><strong>Personal Information:</strong> When you create an account, we may collect your name, email address, and profile picture.</li>
          <li><strong>Usage Data:</strong> We collect data on how you interact with the app, such as pages visited and features used.</li>
          <li><strong>Device Information:</strong> We may collect information about the device you use to access our app, including the device type, operating system, and unique device identifiers.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">How We Use Your Information</h2>
        <ul className="list-disc ml-6 space-y-2 mb-4">
          <li>Provide and maintain our service.</li>
          <li>Improve and personalize your experience.</li>
          <li>Communicate with you about updates and new features.</li>
          <li>Analyze app usage to improve functionality.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">Data Deletion Policy</h2>
        <p className="mb-4">
          If you wish to delete your account and all associated data, you may do so by following these steps:
        </p>
        <ul className="list-disc ml-6 space-y-2 mb-4">
          <li>Go to the &ldquo;Settings&rdquo; page within the app.</li>
          <li>Select &ldquo;Account Management.&rdquo;</li>
          <li>Tap &ldquo;Delete My Account.&rdquo;</li>
        </ul>
        <p className="mb-4">
          Alternatively, you may send a data deletion request to our support team at <a href="mailto:sportysishir@gmail.com" className="text-blue-600 hover:underline">sportysishir@gmail.com</a>. Please include your username and the email address associated with your account in the request. We will process your request within 30 days.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Third-Party Services</h2>
        <p className="mb-4">
          We may use third-party services, such as Facebook login, to facilitate certain functions within the app. These services may collect information used to identify you. We are not responsible for the privacy practices of these third parties.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us at: <br />
          <strong>Email:</strong> <a href="mailto:sportysishir@gmail.com" className="text-blue-600 hover:underline">sportysishir@gmail.com</a>
        </p>
      </section>
      
      <Footer/>
      </main>
      </>
  );
}