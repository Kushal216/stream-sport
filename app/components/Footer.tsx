import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 mt-20 border-t border-gray-700">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-red-400 mb-2">StreamSport</h2>
          <p className="text-gray-400 text-sm">
            Your ultimate platform for live sports broadcasting.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-gray-300 mb-2">Quick Links</h3>
          <ul className="text-gray-400 space-y-1">
            <li>
              <Link href="/privacy-policy" className="hover:text-red-400 transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-red-400 transition-colors">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-red-400 transition-colors">
                Home
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="font-semibold text-gray-300 mb-2">Contact</h3>
          <p className="text-gray-400 mb-2">
            Email:{" "}
            <a href="mailto:sportyshishir@gmail.com" className="text-blue-400 hover:text-blue-500">
              sportyshishir@gmail.com
            </a>
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-2">
            <a href="https://facebook.com" target="_blank" className="hover:text-blue-500 transition-colors">
              Facebook
            </a>
            <a href="https://youtube.com" target="_blank" className="hover:text-red-500 transition-colors">
              YouTube
            </a>
            <a href="https://twitter.com" target="_blank" className="hover:text-blue-400 transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-gray-500 text-sm text-center border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} StreamSport. All Rights Reserved.
      </div>
    </footer>
  );
}
