import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaBox, FaUser, FaTractor, FaShoppingCart, FaSearch } from 'react-icons/fa';
import ButtonOutline from '../Buttons/ButtonOutline';

const Header = () => {
  const router = useRouter();
  const { pathname, query } = router;
  const [scrollActive, setScrollActive] = useState(false);
  const [logged, setLogged] = useState<string | null>(null);

  useEffect(() => {
    const profile = localStorage.getItem('profile');
    if (profile) setLogged(profile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollActive(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={
        'fixed top-0 z-30 w-full bg-green-200 border-b border-green-300 transition-all ' +
        (scrollActive ? 'pt-0 shadow-md' : '')
      }
    >
      <nav className="flex items-center justify-between max-w-screen-xl px-6 py-4 mx-auto lg:px-16">
        {/* Logo and Site Name */}
        <a className="flex items-center">
          <img src="/assets/logo.png" alt="Logo" className="h-10 w-auto mr-3" />
          <span
            style={{
              fontFamily: 'Caveat Brush, cursive',
              fontSize: '30px', // Adjusted for better responsiveness
            }}
          >
            AgriBazaar
          </span>
        </a>

        {/* Conditional Navigation Links */}
        <div className="flex items-center space-x-2 sm:space-x-4"> {/* Adjusted space for responsiveness */}
          {pathname === '/' && (
            <>
              <Link
                href="/login"
                className="capitalize tracking-wide text-black-600 transition-all hover:text-green-500"
              >
                Sign In
              </Link>
              <ButtonOutline onClick={() => router.push('/signup')}>
                Sign Up
              </ButtonOutline>
            </>
          )}

          {pathname === '/orders' && (
            <>
              <button
                onClick={() => router.push('/farmerdashboard#products')}
                className="flex items-center text-green-800 hover:text-green-600 transition-colors duration-300"
                aria-label="Manage Products"
              >
                <FaBox size={20} /> {/* Adjusted icon size */}
                <span
                  className="ml-2 text-sm font-semibold"
                  style={{ fontFamily: 'Caveat Brush, cursive', color: 'black' }}
                >
                  Manage Products
                </span>
              </button>
              <button
                onClick={() => router.push('/farmerdashboard')}
                className="flex items-center text-green-800 hover:text-green-600 transition-colors duration-300"
                aria-label="Dashboard"
              >
                <FaUser size={20} /> {/* Adjusted icon size */}
                <span
                  className="ml-2 text-sm font-semibold"
                  style={{ fontFamily: 'Caveat Brush, cursive', color: 'black' }}
                >
                  Dashboard
                </span>
              </button>
            </>
          )}

          {pathname === '/BrowseProducts' && (
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Cart Button */}
              <button
                onClick={() => router.push('/cartpage')}
                className="flex items-center text-green-800 hover:text-green-600 transition-colors duration-300"
                aria-label="cart"
              >
                <FaShoppingCart size={20} />
                <span
                  className="ml-2 text-sm font-semibold"
                  style={{ fontFamily: 'Caveat Brush, cursive', color: 'black' }}
                >
                  Cart
                </span>
              </button>

              {/* Account Button */}
              <button
                onClick={() => router.push('/buyerdashboard')}
                className="flex items-center text-green-800 hover:text-green-600 transition-colors duration-300"
                aria-label="dashboard"
              >
                <FaUser size={20} />
                <span
                  className="ml-2 text-sm font-semibold"
                  style={{ fontFamily: 'Caveat Brush, cursive', color: 'black' }}
                >
                  Dashboard
                </span>
              </button>
            </div>
          )}

          {/* Other Conditional Links */}
          {pathname === '/product-details' && query.id && (
            <div className="flex items-center space-x-2 sm:space-x-4">
              <button
                onClick={() => router.push('/BrowseProducts')}
                className="flex items-center text-green-800 hover:text-green-600 transition-colors duration-300"
              >
                <FaSearch size={20} />
                <span
                  className="ml-2 text-sm font-semibold"
                  style={{ fontFamily: 'Caveat Brush, cursive', color: 'black' }}
                >
                  Browse Products
                </span>
              </button>
              <button
                onClick={() => router.push('/cartpage')}
                className="flex items-center text-green-800 hover:text-green-600 transition-colors duration-300"
              >
                <FaShoppingCart size={20} />
                <span
                  className="ml-2 text-sm font-semibold"
                  style={{ fontFamily: 'Caveat Brush, cursive', color: 'black' }}
                >
                  Cart
                </span>
              </button>
            </div>
          )}
      
      {pathname === '/confirmation' && query.productid && (
  <div className="flex items-center space-x-4">
    {/* Cart Button */}
    <button
      onClick={() => router.push('/BrowseProducts')}
      className="flex items-center text-green-800 hover:text-green-600 transition-colors duration-300"
    >
      <FaSearch size={22} />
      <span
        className="ml-2 text-sm font-semibold"
        style={{ fontFamily: 'Caveat Brush, cursive', color: 'black' }}
      >
        Browse Products
      </span>
    </button>
    <button
      onClick={() => router.push('/cartpage')}
      className="flex items-center text-green-800 hover:text-green-600 transition-colors duration-300"
      aria-label="cart"
    >
      <FaShoppingCart size={22} />
      <span
        className="ml-2 text-sm font-semibold"
        style={{ fontFamily: 'Caveat Brush, cursive', color: 'black' }}
      >
        Cart
      </span>
    </button>
    {/* Account Button */}
    <button
      onClick={() => router.push('/buyerdashboard')}
      className="flex items-center text-green-800 hover:text-green-600 transition-colors duration-300"
      aria-label="dashboard"
    >
      <FaUser size={22} />
      <span
        className="ml-2 text-sm font-semibold"
        style={{ fontFamily: 'Caveat Brush, cursive', color: 'black' }}
      >
        Dashboard
      </span>
    </button>
  </div>
)}

{pathname === '/paymentslip' && query.productid && (
  <div className="flex items-center space-x-4">
    {/* Cart Button */}
    <button
      onClick={() => router.push('/BrowseProducts')}
      className="flex items-center text-green-800 hover:text-green-600 transition-colors duration-300"
    >
      <FaSearch size={22} />
      <span
        className="ml-2 text-sm font-semibold"
        style={{ fontFamily: 'Caveat Brush, cursive', color: 'black' }}
      >
        Browse Products
      </span>
    </button>
    <button
      onClick={() => router.push('/cartpage')}
      className="flex items-center text-green-800 hover:text-green-600 transition-colors duration-300"
      aria-label="cart"
    >
      <FaShoppingCart size={22} />
      <span
        className="ml-2 text-sm font-semibold"
        style={{ fontFamily: 'Caveat Brush, cursive', color: 'black' }}
      >
        Cart
      </span>
    </button>
    {/* Account Button */}
    <button
      onClick={() => router.push('/buyerdashboard')}
      className="flex items-center text-green-800 hover:text-green-600 transition-colors duration-300"
      aria-label="dashboard"
    >
      <FaUser size={22} />
      <span
        className="ml-2 text-sm font-semibold"
        style={{ fontFamily: 'Caveat Brush, cursive', color: 'black' }}
      >
        Dashboard
      </span>
    </button>
  </div>
)}

{pathname === '/cartpage' && (
  <div className="flex items-center space-x-4">
    {/* Cart Button */}
    <button
      onClick={() => router.push('/BrowseProducts')}
      className="flex items-center text-green-800 hover:text-green-600 transition-colors duration-300"
    >
      <FaSearch size={22} />
      <span
        className="ml-2 text-sm font-semibold"
        style={{ fontFamily: 'Caveat Brush, cursive', color: 'black' }}
      >
        Browse Products
      </span>
    </button>
    {/* Account Button */}
    <button
      onClick={() => router.push('/buyerdashboard')}
      className="flex items-center text-green-800 hover:text-green-600 transition-colors duration-300"
      aria-label="dashboard"
    >
      <FaUser size={22} />
      <span
        className="ml-2 text-sm font-semibold"
        style={{ fontFamily: 'Caveat Brush, cursive', color: 'black' }}
      >
        Dashboard
      </span>
    </button>
  </div>
)}

{/* Add the rest of the paths the same way */}

<style jsx>{`
  @media (max-width: 768px) {
    .flex {
      flex-direction: column;
      align-items: center;
      space-x-0;
      space-y-2;
    }
    .ml-2 {
      margin-left: 0;
    }
  }

  @media (min-width: 769px) {
    .flex {
      flex-direction: row;
      space-x-4;
    }
    .ml-2 {
      margin-left: 8px;
    }
  }
`}</style>


{pathname === '/product-tracking' && (
  <div className="flex items-center space-x-4">
    <button
      onClick={() => router.back()}
      className="flex items-center text-green-800 hover:text-green-600 transition-colors duration-300"
      aria-label="dashboard"
    >
      <FaUser size={22} />
      <span
        className="ml-2 text-sm font-semibold"
        style={{ fontFamily: 'Caveat Brush, cursive', color: 'black' }}
      >
        Dashboard
      </span>
    </button>
  </div>
)}
{pathname === '/soldproduct-details' && (
  <div className="flex items-center space-x-4">
    <button
      onClick={() => router.back()}
      className="flex items-center text-green-800 hover:text-green-600 transition-colors duration-300"
      aria-label="dashboard"
    >
      <FaUser size={22} />
      <span
        className="ml-2 text-sm font-semibold"
        style={{ fontFamily: 'Caveat Brush, cursive', color: 'black' }}
      >
        Dashboard
      </span>
    </button>
  </div>
)}
{(pathname === '/login' || pathname === '/signup') && (
  <div className="flex items-center space-x-4">
    <button
      onClick={() => router.push('/')}
      className="flex items-center text-green-800 hover:text-green-600 transition-colors duration-300"
      aria-label="dashboard"
    >
      <FaUser size={22} />
      <span
        className="ml-2 text-sm font-semibold"
        style={{ fontFamily: 'Caveat Brush, cursive', color: 'black' }}
      >
        Home
      </span>
    </button>
  </div>
)}
{logged && (
  <button
    onClick={() => {
      localStorage.removeItem('profile');
      setLogged(null);
      router.push('/');
    }}
    className="ml-4 px-4 py-2 text-sm font-semibold text-white bg-green-600 rounded-full hover:bg-green-400 transition-colors duration-300"
  >
    Logout
  </button>
)}

        </div>
      </nav>
    </header>
  );
};

export default Header;
