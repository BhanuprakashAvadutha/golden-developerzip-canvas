import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <p>
        At DeveloperZip, accessible from developerzip.diy, we prioritize your privacy.
        This Privacy Policy outlines the types of information we collect and how we use it.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
      <p>
        We may collect personal information such as name, email, or phone number when
        you interact with our services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Your Information</h2>
      <p>
        We use collected data to improve user experience, respond to queries, and send updates.
        We do not sell your personal data.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Cookies</h2>
      <p>
        We may use cookies to store information to enhance your browsing experience.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p>
        If you have any questions, contact us at <a href="mailto:support@developerzip.diy">support@developerzip.diy</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
