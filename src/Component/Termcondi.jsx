import React from "react";
import Navbar from "./Navbar"; // Adjust path if needed
import Footer from "./Footer";

const TermAndCondi = () => {
  return (
    <div className="bg-black mt-20 text-white min-h-screen">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-10 space-y-6">
        <h1 className="text-3xl font-bold border-b border-gray-600 pb-4">
          Terms and Conditions
        </h1>

        <p>
          Protonix Ai Pvt. Ltd. (hereinafter referred to as "Protonix Ai") maintains this website
          ("Site") for information regarding our products and services. Please feel free to browse
          the Site.
        </p>

        <p>
          Your access to and use of the Site is subject to the following terms and conditions,
          including any future revisions ("Terms and Conditions"), and all applicable laws. By
          accessing and browsing the Site, you accept these Terms and Conditions.
        </p>

        <div>
          <h2 className="text-xl font-semibold mt-6 mb-2">1. Use of the Site</h2>
          <p>
            The Site, and all the content, materials, information, software, products, and services
            provided on the Site, are provided on an "as is" and "as available" basis. Protonix Ai
            expressly disclaims all warranties of any kind, whether express or implied, including,
            but not limited to, the implied warranty of merchantability, fitness for a particular
            purpose, and non-infringement.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mt-6 mb-2">2. Changes to Content</h2>
          <p>
            The content and the projects described or depicted on the Site are subject to change
            without notice. Unauthorized reproduction or use of the materials may be a violation of
            applicable copyright laws. All future materials may be subject to copyright
            protection.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mt-6 mb-2">3. Limitation of Liability</h2>
          <p>
            Protonix Ai assumes no responsibility and shall not be liable for any damages to, or
            viruses that may infect, your computer, equipment, or other property on account of your
            access to, use of, or browsing the Site, or your downloading of any materials, data,
            text, images, video, or audio from the Site.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mt-6 mb-2">4. Intellectual Property</h2>
          <p>
            Materials displayed on the Site are either the property of Protonix Ai or are used with
            permission. The use of these materials by you or anyone else authorized by you is
            prohibited unless expressly permitted by these Terms and Conditions or explicit written
            permission is obtained from Protonix Ai. Any unauthorized use of the images or content
            may violate copyright laws, trademark laws, or the laws of privacy and publicity.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mt-6 mb-2">5. Third-Party Links</h2>
          <p>
            Protonix Ai is not responsible for the content of any other site linked to or from the
            Site. Your linking to any other site is entirely at your own risk. While Protonix Ai
            may provide links on the Site to other websites, the inclusion of such links is only
            for your convenience and should not be interpreted as an endorsement of the owner,
            sponsor, or content on the linked site. Subject to applicable law, Protonix Ai disclaims
            all warranties, express or implied, as to the accuracy, validity, legality, or otherwise
            of any materials or information contained on linked sites.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mt-6 mb-2">6. User Conduct</h2>
          <p>
            You are prohibited from posting or transmitting any unlawful, threatening, harassing,
            defamatory, libelous, obscene, pornographic, or profane material, or any material that
            could constitute or encourage conduct that would be considered a criminal offense, give
            rise to civil liability, or otherwise violate any law.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mt-6 mb-2">7. Changes to Terms and Conditions</h2>
          <p>
            Protonix Ai may revise these Terms and Conditions at any time by updating this post.
            Since you are bound by these Terms and Conditions, please visit this page regularly to
            stay informed about any changes.
          </p>
        </div>
      </div>
        <Footer/>
    </div>
  );
};

export default TermAndCondi;
