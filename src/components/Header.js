import React from 'react';


function Header() {

  const img_url = `${process.env.REACT_APP_RAILS_URL}/images/header_logo.gif`
  

  console.log({img_url});

  return (
      <div>
       <img className="header-image" src={img_url} />
       </div>
  );
}

export default Header;

