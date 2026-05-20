import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">

        {/* Logo / About */}
        <div>
          <h2 className="text-2xl font-bold">TutorHub</h2>
          <p className="text-gray-400 mt-3">
            Helping students connect with quality tutors and learning services.
          </p>
        </div>

        {/* Tutor Services */}
        <div>
          <h3 className="font-semibold text-lg mb-3">
            Learning Services
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/find-tutors">
                Find Tutors
              </Link>
            </li>

            <li>
              <Link href="/online-classes">
                Online Classes
              </Link>
            </li>

            <li>
              <Link href="/courses">
                Courses
              </Link>
            </li>

            <li>
              <Link href="/resources">
                Study Resources
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-3">
            Contact
          </h3>

          <div className="space-y-2 text-gray-400">
            <p>Email: support@tutorhub.com</p>
            <p>Phone: +880 123456789</p>
            <p>Sylhet, Bangladesh</p>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">
            Follow Us
          </h3>

          <div className="flex gap-4 text-2xl">
            <a href="#">
              <FaFacebook />
            </a>

            <a href="#">
              <FaGithub />
            </a>

            <a href="#">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 py-4 text-center text-gray-400">
        © 2026 TutorHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;