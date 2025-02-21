import React from 'react';
import "./MenuItem.css";

const MenuItem = ({ title, imageName, price, description, addToCart }) => {
  return (
    <div className="menuItem">
      <div className="itemImage">
        <img src={imageName} alt={title} />
      </div>
      <div className="menuDescription">
        <p className="itemTitle">{title}</p>
        <p className="itemDescription">{description}</p>
        <div className="costRow">
          <p className="itemCost">${price.toFixed(2)}</p>
          <button onClick={addToCart}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;