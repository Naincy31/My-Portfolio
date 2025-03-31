const Footer = () => {
  return (
    <div className="footer bg-gray-100 py-6 shadow-inner">
      <div className="container mx-auto text-center">
        {/* Contact Information */}
        <p className="text-gray-600 text-sm">
          Contact: <a href="tel:+917767049429" className="text-teal-600 hover:underline">+91 7767049429</a> | 
          Email: <a href="mailto:example@email.com" className="text-teal-600 hover:underline">iamnaincyrathore@gmail.com</a>
        </p>

        {/* Footer Divider */}
        <div className="mt-4 border-t border-gray-300"></div>

        {/* Copyright */}
        <p className="text-gray-500 text-xs mt-4">
          © {new Date().getFullYear()} Naincy Rathore. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;