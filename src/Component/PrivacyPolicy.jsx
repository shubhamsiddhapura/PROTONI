
import Footer from "./Footer";
import Navbar from "./Navbar";

const PrivacyPolicy = () => {
  return (
    <div className="bg-black mt-20 text-white min-h-screen">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-10 space-y-6">
        <h1 className="text-3xl font-bold border-b border-gray-600 pb-4">
          Privacy Policy for Protonix Ai Pvt. Ltd.
        </h1>

        <p>
          Thank you for choosing to be part of our community at Protonix Ai Pvt. Ltd. (“Company”,
          “we”, “us”, “our”). We are committed to protecting your personal information and your
          right to privacy. If you have any questions or concerns about this privacy notice or our
          practices with regards to your personal information, please contact us at{" "}
          <a href="mailto:info@protonix.tech" className="text-blue-400 underline">
            info@protonix.tech
          </a>
          .
        </p>

        <p>
          When you visit our website www.protonix.tech (the “Website”), and more generally, use any
          of our services (the “Services,” which include the Website), we appreciate that you are
          trusting us with your personal information. We take your privacy very seriously.
        </p>

        <p>
          In this privacy notice, we seek to explain to you in the clearest way possible what
          information we collect, how we use it, and what rights you have in relation to it.
        </p>

        <p>
          This privacy notice applies to all information collected through our Services (which, as
          described above, includes our Website), as well as any related services, sales, marketing,
          or events.
        </p>

        {/* Sections */}
        <div>
          <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Personal Information:</strong> Your name, phone number, and email address.
            </li>
            <li>
              <strong>Non-Personal Information:</strong> Technical data such as your IP address,
              browser type, and operating system.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Collect Information</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Directly from You:</strong> When you contact us or sign up for services.
            </li>
            <li>
              <strong>Automatically:</strong> Via cookies, log files, or other tracking tech.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mt-6 mb-2">3. How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>To provide and maintain our services.</li>
            <li>To communicate with you and respond to inquiries.</li>
            <li>To analyze and improve our website and services.</li>
            <li>To comply with legal obligations.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mt-6 mb-2">
            4. Sharing and Disclosure of Information
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>With Service Providers:</strong> Like hosting, payment, or analytics services.
            </li>
            <li>
              <strong>Legal Compliance:</strong> When required by law or for protection of rights.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mt-6 mb-2">
            5. Cookies and Tracking Technologies
          </h2>
          <p>
            We use cookies to enhance your browsing experience. You can disable cookies in your
            browser, but some site features may not work as intended.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mt-6 mb-2">6. Data Security</h2>
          <p>
            We use administrative, technical, and physical security measures to protect your data,
            but we cannot guarantee 100% security over the internet.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mt-6 mb-2">7. Data Retention</h2>
          <p>
            Your data is retained only as long as necessary unless otherwise required by law. You
            may request deletion at any time.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mt-6 mb-2">8. Your Rights</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Access:</strong> Request a copy of your personal data.
            </li>
            <li>
              <strong>Correction:</strong> Correct inaccuracies in your data.
            </li>
            <li>
              <strong>Deletion:</strong> Request deletion of your data.
            </li>
            <li>
              <strong>Opt-Out:</strong> Unsubscribe from marketing emails.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mt-6 mb-2">9. Third-Party Links</h2>
          <p>
            Our website may contain links to external sites. We are not responsible for their
            privacy policies or practices.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mt-6 mb-2">10. Changes to This Privacy Policy</h2>
          <p>
            We may update this policy from time to time. Please review it regularly to stay
            informed about how we protect your information.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default PrivacyPolicy;
