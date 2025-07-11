

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <h1 className="contact-title">📞 Contact Us</h1>
        <p className="contact-subtext">
          We're always here to assist you. Whether it's a question about your
          order, a suggestion, or just a quick hello — we’d love to hear from you!
        </p>

        <div className="contact-grid">
          <div className="contact-box">
            <h3>📍 Our Address</h3>
            <p>123, Foodie Street, Prayagraj, Uttar Pradesh, India</p>
          </div>

          <div className="contact-box">
            <h3>📞 Phone</h3>
            <p>+91 98765 43210</p>
            
          </div>

          <div className="contact-box">
            <h3>📧 Email</h3>
            <p>support@foodbite.com</p>
          </div>

          <div className="contact-box">
            <h3>🛵 Delivery Support</h3>
            <p>Need help with a delivery? Reach out anytime — we’re quick like our food!</p>
          </div>
        </div>

        <p className="closing-line">Food Delivery 🇮🇳</p>
      </div>
    </div>
  );
};

export default Contact;
