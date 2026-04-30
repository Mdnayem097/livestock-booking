import React from "react";

const FooterPage = () => {
  return (
    <footer className="bg-[#d8f2d0] mt-16">
      <div className="max-w-7xl mx-auto px-5 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-green-700">
            About Us
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            We are a modern web platform providing quality services and
            solutions. Our goal is to make your experience smooth, fast, and
            professional.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-green-700">
            Contact Info
          </h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>📍 Dhaka, Bangladesh</li>
            <li>📞 +880 1767148518</li>
            <li>✉️ mdnayemswe@gmail.com</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-green-700">
            Follow Us
          </h2>
          <div className="flex flex-wrap gap-4 text-sm font-medium">
            <a
              href="#"
              className="transition hover:text-green-700 hover:underline"
            >
              Facebook
            </a>
            <a
              href="#"
              className="transition hover:text-green-700 hover:underline"
            >
              Twitter
            </a>
            <a
              href="#"
              className="transition hover:text-green-700 hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-green-300">
        <div className="max-w-7xl mx-auto px-5 py-4 flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>

          <div className="flex gap-4">
            <a href="#" className="hover:text-green-700">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-green-700">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
