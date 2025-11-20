import "./PrivacyPolicy.css";

export default function PrivacyPolicy() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <h1>Privacy Policy</h1>
      <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>

      <p>
        This Privacy Policy explains how information is collected, used, and
        disclosed when you visit and interact with <strong>feelings-wheel.com </strong>
        (“we,” “our,” or “us”). By using this website, you agree to the practices
        described in this policy.
      </p>

      <h2>1. Information We Collect</h2>

      <h3>a. Personal Information You Provide</h3>
      <p>
        We do not collect personal information from visitors.
      </p>

      <h3>b. Automatically Collected Information</h3>
      <p>
        When you visit our website, certain information may be automatically
        collected, including:
      </p>
      <ul>
        <li>IP address</li>
        <li>Browser type</li>
        <li>Pages visited</li>
        <li>Time spent on pages</li>
        <li>Device information</li>
      </ul>

      <h2>2. Cookies and Tracking Technologies</h2>
      <p>
        We use cookies, local storage, and similar technologies to analyze
        website traffic, improve user experience, and personalize content. You
        can disable cookies in your browser settings at any time.
      </p>

      <h2>3. Google AdSense and DoubleClick Cookie</h2>
      <p>
        This website uses <strong>Google AdSense</strong>, a third-party advertising
        service provided by Google.
      </p>
      <p>Google may use cookies (including the DoubleClick cookie) to:</p>
      <ul>
        <li>Serve ads based on your prior visits to this or other websites</li>
        <li>Limit how often an ad is shown</li>
        <li>Personalize ads based on interests</li>
      </ul>
      <p>
        Users may opt out of personalized advertising by visiting:{" "}
        <a
          href="https://www.google.com/settings/ads"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.google.com/settings/ads
        </a>
      </p>
      <p>
        To learn more about how Google uses data:{" "}
        <a
          href="https://policies.google.com/technologies/partner-sites"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://policies.google.com/technologies/partner-sites
        </a>
      </p>

      <h2>4. How We Use Your Information</h2>
      <ul>
        <li>Operate and maintain the website</li>
        <li>Improve website performance</li>
        <li>Respond to messages or inquiries</li>
        <li>Display relevant advertising</li>
        <li>Ensure legal compliance</li>
      </ul>

      <h2>5. How We Share Information</h2>
      <p>
        We do <strong>not</strong> sell or rent your personal information. We may share
        information with:
      </p>
      <ul>
        <li>Service providers (e.g., analytics tools)</li>
        <li>Advertising partners such as Google AdSense</li>
        <li>Legal authorities if required by law</li>
      </ul>

      <h2>6. Third-Party Links</h2>
      <p>
        Our website may contain links to external sites. We are not responsible
        for the privacy practices of those websites.
      </p>

      <h2>7. Children’s Privacy</h2>
      <p>
        We do not knowingly collect information from children under 13 years
        old. If you believe we have collected such information, contact us and
        we will remove it.
      </p>

      <h2>8. Data Security</h2>
      <p>
        We use reasonable measures to protect your information. However, no
        method of transmission or storage is 100% secure.
      </p>

      <h2>9. Your Choices</h2>
      <ul>
        <li>Disable cookies in your browser</li>
        <li>Opt out of personalized advertising (links above)</li>
        <li>Contact us to update or delete your information</li>
      </ul>

      <h2>10. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy occasionally. The “Last Updated” date
        will reflect the latest revision.
      </p>

      <h2>11. Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy, you can contact us at:
      </p>
      <p>
        <strong>feelingswheelwebsite@gmail.com</strong>
      </p>
    </div>
  );
}
