import "../../../scss/main.scss";

import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Button, Stack, Container, Navbar, Nav, NavDropdown, Form, FormControl, NavItem } from "react-bootstrap";
import { FiShoppingCart, FiSearch } from "react-icons/fi";
import ControlledCarousel from "./carouselFade";
import ItemList from "./itemList";

import product01 from "../../../img/product01.jpg";
import product02 from "../../../img/product02.jpg";
import product03 from "../../../img/product03.jpg";
import product04 from "../../../img/product04.jpg";
import product05 from "../../../img/product05.jpg";
import product06 from "../../../img/product06.jpg";
import product07 from "../../../img/product07.jpg";
import product08 from "../../../img/product08.jpg";

function Header(props) {
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(true);
    setShow2(false);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  const [show2, setShow2] = useState(false);
  const showDropdown2 = (e) => {
    setShow2(true);
    setShow(false);
  };
  const hideDropdown2 = (e) => {
    setShow2(false);
  };

  const hideAll = () => {
    setShow(false);
    setShow2(false);
  };

  const titleLists = [
    {
      id: 1,
      title: "WINE GLASS IN SMOKE",
      price: "$18",
      src: product01,
    },
    {
      id: 1,
      title: "LITTLE BOWL IN SLATE GRAY",
      price: "$16",
      src: product02,
    },
    {
      id: 1,
      title: "LITTLE BOWL IN TOBACCO",
      price: "$16",
      src: product03,
    },
    {
      id: 1,
      title: "LITTLE BOWL IN CHALK",
      price: "$16",
      src: product04,
    },
    {
      id: 1,
      title: "SUGAR & SPICE BOWL IN CHALK",
      price: "$38",
      src: product05,
    },
    {
      id: 1,
      title: "CERAMIC TEAPOT IN TABACCO",
      price: "$54",
      src: product06,
    },
    {
      id: 1,
      title: "LOW GLASS IN CLEAR",
      price: "$12",
      src: product07,
    },
    {
      id: 1,
      title: "HIGH GLASS IN SMOKE",
      price: "$14",
      src: product08,
    },
  ];

  return (
    <div>
      <ul>
        <Link to="/detail/1">
          <li>1번상품</li>
        </Link>
        <Link to="/detail/2">
          <li>2번상품</li>
        </Link>
      </ul>

      <Stack gap={3}>
        <div className="bg-light border">
          Sans-serif fonts lend themselves well to modern designs, making them an excellent option for contemporary brands. So, if you’re looking for an alternative to a serif font for your branding,
          then a sans-serif font might be just what you need.
        </div>
        <div className="bg-light border">Second item</div>
        <div className="bg-light border">Third item</div>
        <button type="button" class="btn btn-primary">
          Notifications <span class="badge bg-secondary">4</span>
        </button>
      </Stack>
    </div>
  );
}
export default Header;
