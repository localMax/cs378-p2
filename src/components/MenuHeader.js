import React from 'react';
import "./MenuHeader.css";

const MenuHeader = ({logo, description}) => {
  return (
    <div className>
      <div class="title">
        <img src={logo} alt="CACTUS CAFE"></img>
      </div>
      <div class="tagline">
        {description}
      </div>
    </div>
  );
};

export default MenuHeader;