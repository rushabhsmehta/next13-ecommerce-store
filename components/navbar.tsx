'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isNavbarHidden, setIsNavbarHidden] = useState(false); // Add a state for Navbar visibility
  const [bgOpacity, setBgOpacity] = useState(0); // State for background opacity


  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos === 0) {
      // If scrolled to the top, set bgOpacity to 0
      setBgOpacity(100);  
    } else {
      // Otherwise, set bgOpacity to 80
      setBgOpacity(80);
    }

    if (prevScrollPos < currentScrollPos && !isNavbarHidden) {
      setIsNavbarHidden(true);
    }
    // Check if the user is scrolling up and the Navbar is hidden
    else if (prevScrollPos > currentScrollPos && isNavbarHidden) {
      setIsNavbarHidden(false);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);


  const router = useRouter(); // Initialize the useRouter hook
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    const lowerCaseSearchQuery = searchQuery.toLowerCase().replace(/\s+/g, '-');

    router.push(`/locations/${lowerCaseSearchQuery}`); // Pass the search query as a parameter to the URL
    setSearchQuery('');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-center h-16 py-4 px-4 bg-gray-800 bg-opacity-${bgOpacity} transition-transform ${isNavbarHidden ? 'transform -translate-y-16' : ''
          }`}
      >
        {/* // Apply the transform style when isNavbarHidden is true */}
        <div className="flex items-center">
          <Link href="/">

            <Image className="h-18  w-48"
              height={140}
              width={140}
              // Replace this with your own image
              src="/images/company-logo.png"
              alt="Company Logo" />
          </Link>
        </div>



        {/*   <form onSubmit={handleSearch} className="flex items-center">
          <input
            type="text"
            className="w-40 md:w-auto bg-gray-200 bg-opacity-30 rounded-md border-2 border-gray-600 py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <button type="submit" className="text-gray-400 ml-2">
            <FiSearch className="text-gray-400" />
          </button>
        </form> */}

        {/*   <div className="ml-4 flex items-center space-x-2">
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
 */}
        <button className="md:hidden text-white" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

    </>
  );
};

export default Navbar;
