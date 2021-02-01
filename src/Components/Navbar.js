import React, { Component } from "react";
import { Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { withStyles } from "@material-ui/core/styles";

export default class Navbar extends Component {
  render() {
    const StyledBadge = withStyles((theme) => ({
      badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: "0 4px",
      },
    }))(Badge);
    return (
      <div>
        <div className="child navbar">
          <Link to="/" style={{ textDecoration: "none", color: "#123174" }}>
            <h2>FoodZone</h2>
          </Link>
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <IconButton aria-label="cart">
              <StyledBadge
                badgeContent={this.props.cart.length}
                color="secondary"
              >
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </Link>
        </div>
      </div>
    );
  }
}
