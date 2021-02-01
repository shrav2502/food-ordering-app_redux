import React from "react";
import Shopping from "./Images/Shopping.png";

function NoItemsAdded() {
  return (
    <div>
      <div className="empty-cart-msg-display">
        <div>
          <img
            src={Shopping}
            alt="No items have been added yet!"
            className="empty-cart-img"
          />
        </div>
        <h3 style={{ color: "darkgrey" }}>No items have been added yet!</h3>
      </div>
    </div>
  );
}

export default NoItemsAdded;
