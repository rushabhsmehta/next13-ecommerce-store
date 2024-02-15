import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import React from 'react';
import Image from 'next/image';


const Footer: React.FC = () => {
  return (
    <footer className="text-white bg-gray-800 text-left">
      <div className="flex items-center justify-center border-b-2 border-gray-600 p-6">
        <div className="mr-12 hidden lg:block">
          <span>Follow us on social media:</span>
        </div>
        <div className="ml-4 flex items-center space-x-2">
          <Link href="https://www.facebook.com/aagamholidays2021/" target="_blank" rel="noreferrer noopener" aria-label="Facebook page" title="Facebook page" className="text-white">
            <FaFacebookF />
          </Link>
          <Link href="https://twitter.com/aagamholidays" target="_blank" rel="noreferrer noopener" aria-label="Twitter page" title="Twitter page" className="text-white">
            <FaTwitter />
          </Link>
          <Link href="https://www.instagram.com/aagamholidays/" target="_blank" rel="noreferrer noopener" aria-label="Instagram page" title="Instagram page" className="text-white">
            <FaInstagram />
          </Link>
        </div>
      </div>
      <div className="mx-6 py-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/">

              <Image className="mx-auto mb-4" // Center-align the image horizontally
                height={48}
                width={96}
                // Replace this with your own image
                src="/images/company-logo2.png"
                alt="Company Logo" />
            </Link>
         
            <p>
              Discover amazing destinations and plan your next adventure with us.
            </p>
          </div>
          <div>
            <h6 className="mb-4 flex font-semibold uppercase">
              Popular Packages
            </h6>
            <ul>
              <li className="mb-4"><Link href="#" className="text-white">Beach Getaways</Link></li>
              <li className="mb-4"><Link href="#" className="text-white">Mountain Escapes</Link></li>
              <li className="mb-4"><Link href="#" className="text-white">Cultural Tours</Link></li>
              <li><Link href="#" className="text-white">Adventure Expeditions</Link></li>
            </ul>
          </div>
          <div>
            <h6 className="mb-4 flex font-semibold uppercase">
              Useful Links
            </h6>
            <ul>
              <li className="mb-4"><Link href="#" className="text-white">Contact Us</Link></li>
              <li className="mb-4"><Link href="#" className="text-white">FAQ</Link></li>
              <li className="mb-4"><Link href="#" className="text-white">Book Now</Link></li>
              <li><Link href="#" className="text-white">Customer Reviews</Link></li>
            </ul>
          </div>
          <div>
            <h6 className="mb-4 flex font-semibold uppercase">
              Contact Info
            </h6>
            <ul>
              <li className="mb-4 flex items-center"><i className="fas fa-map-marker-alt mr-3"></i>B-1203, PNTC, Satellite, Ahmedabad - 380015, Gujarat</li>
              <li className="mb-4 flex items-center"><i className="fas fa-envelope mr-3"></i>info@aagamholidays.com</li>
              <li className="mb-4 flex items-center"><i className="fas fa-phone-alt mr-3"></i>+91 - 97244 44701</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="p-6 text-center">
        <span>
          © 2023 Aagam Holidays. All rights reserved.
        </span>
        <Link
          className="font-semibold text-white"
          href="https://www.aagamholidays.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit our website
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
