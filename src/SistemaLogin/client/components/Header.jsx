import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({children}) => {
    return (
        <header className="fixed top-0 left-0 z-1 flex items-center justify-between w-full h-15 px-5 bg-black">
          <Link to="/home">
            <img className="h-[35px]" src="/images/Logos/LOGO_DEMORO_SITE.png" alt="Logo Demorô"/>
          </Link>
          {children}
        </header>
    );
};

export default Header;