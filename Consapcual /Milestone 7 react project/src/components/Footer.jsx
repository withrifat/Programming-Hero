import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-8 py-12 ">
      <Container>
        <div className="grid md:grid-cols-5 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-2">
              PH — Assignment System
            </h3>
            <p className="text-sm">
              PH Assignment system is a platform that centralizes, tracks, and
              manages requests or issues, converting them into unique
              "Assignment s" for efficient resolution and communication
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">University</h4>
            <ul className="space-y-1 text-sm">
              <li>About Us</li>
              <li>Our Mission</li>
              <li>Contact Administrator</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Services</h4>
            <ul className="space-y-1 text-sm">
              <li>Education & Services</li>
              <li>Student Stories</li>
              <li>Download Apps</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Information</h4>
            <ul className="space-y-1 text-sm">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Join Us</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Social Links</h4>
            <ul className="space-y-1 text-sm">
              <li>@Ph — Assignment System</li>
              <li>@Ph — Assignment System</li>
              <li>@Ph — Assignment System</li>
              <li>support@ph.com</li>
            </ul>
          </div>
        </div>
        <div className="text-left md:text-center text-gray-500 text-sm mt-8">
          © 2025 Ph — Assignment System.
          <br className="block md:hidden" /> All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
