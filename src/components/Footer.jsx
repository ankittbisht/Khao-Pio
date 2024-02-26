const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-300 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="flex-grow">
              <ul className="flex flex-col md:flex-row md:space-x-4 md:justify-center text-sm">
                <li>
                  <a href="#" className="hover:text-gray-100">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-100">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-100">
                    Locations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-100">
                    Reservations
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-grow">
              <ul className="flex flex-col md:flex-row md:space-x-4 md:justify-center text-sm">
                <li>123 Street Name</li>
                <li>City, Country</li>
                <li>Phone: +123-456-7890</li>
                <li>Email: info@example.com</li>
              </ul>
            </div>
            <div className="flex-grow">
              <ul className="flex flex-col md:flex-row md:space-x-4 md:justify-center text-sm">
                <li>
                  <a href="#" className="hover:text-gray-100">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-100">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-100">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-100">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-4 pt-2 text-center text-xs">
            <p className="text-gray-400">
              &copy; 2024 Khao Pio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  