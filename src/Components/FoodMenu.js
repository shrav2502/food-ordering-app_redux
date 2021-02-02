import React from "react";
import Food from "./Food";

function FoodMenu(props) {
  const quantity = props.quantity;

  return (
    <div className="child foodmenu">
      {props.menu.map((menu, index) => (
        <Food key={index} {...props} menu={menu} quantity={quantity} />
      ))}
    </div>
  );
}

export default FoodMenu;
