import { useEffect } from 'react';
import '../css/header.css';
const Navbar = () => {
  const handleClickHamburger = event => {
    const navMenu = document.querySelector('#nav-menu')
    event.currentTarget.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden')
  };

  useEffect(() => {
    window.onscroll = function() {
      const header = document.querySelector('header');
      const fixedNav = header.offsetTop;
    
      if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed')
      }else {
        header.classList.remove('navbar-fixed')
      }
    }
  }, [])
  
  return (
    <>
    <header className="bg-transparent top-0 left-0 w-full flex items-center z-10 ">
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a
              href="#home"
              className="font-bold text-lg text-primary block py-6"
            >
              Inal Mahpud
            </a>
          </div>
          <div className="flex items-center px-4">
            <button
              id="hamburger"
              name="hamburger"
              className="block absolute right-4 lg:hidden"
              onClick={handleClickHamburger}
            >
              <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
              <span className="hamburger-line duration-300 ease-in-out"></span>
              <span className="hamburger-line duration-300 ease-in-out origin-bottom-left"></span>
            </button>
            <nav
              id="nav-menu"
              className="hidden absolute py-5 bg-[#242424] shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none "
            >
              <ul className="block lg:flex ">
                <li className="group">
                  <a
                    href="#home"
                    className="text-base text-white py-2 mx-8 flex group-hover:text-primary"
                  >
                    Beranda
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#about"
                    className="text-base text-white py-2 mx-8 flex group-hover:text-primary"
                  >
                    Tentang Saya
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#portofolio"
                    className="text-base text-white py-2 mx-8 flex group-hover:text-primary"
                  >
                    Portofolio
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#blog"
                    className="text-base text-white py-2 mx-8 flex group-hover:text-primary"
                  >
                    Blog
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#contact"
                    className="text-base text-white py-2 mx-8 flex group-hover:text-primary"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>

    </>
  );
};

export default Navbar;
