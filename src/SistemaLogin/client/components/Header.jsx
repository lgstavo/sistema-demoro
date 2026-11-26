import React from 'react';

const Header = ({children}) => {
    return (
        <header className="fixed top-0 left-0 z-1 flex items-center justify-between w-full h-15 px-5 bg-black">
          <a href="#">
            <img className="h-[35px] flex center" src="/images/Logos/LOGO_DEMORO_SITE.png" alt="Logo Demorô" />
          </a>
          {children}
        </header>
    );
};

export default Header;