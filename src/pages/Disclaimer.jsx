import React from "react";

const Disclaimer = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Disclaimer</h1>
      <p>
        All the information on this website – developerzip.diy – is published in good faith
        and for general information purpose only. DeveloperZip does not make any warranties
        about the completeness, reliability, and accuracy of this information.
      </p>

      <p className="mt-4">
        Any action you take upon the information you find on this website is strictly
        at your own risk. DeveloperZip will not be liable for any losses or damages.
      </p>

      <p className="mt-4">
        From our website, you can visit other websites by following hyperlinks to such
        external sites. While we strive to provide quality links, we have no control
        over the content and nature of these sites.
      </p>

      <p className="mt-4">
        Consent: By using our website, you consent to this disclaimer.
      </p>
    </div>
  );
};

export default Disclaimer;
