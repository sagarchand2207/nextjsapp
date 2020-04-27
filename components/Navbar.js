import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestMenuList } from "../redux/actions";
import { CONFIG } from "../config/index";
import home from "../static/images/home.png";
import contact from "../static/images/contact.png";
import Link from "next/link";

const Navbar = React.memo(function Navbar() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestMenuList());
  }, []);
  const menu = useSelector((state) => state.nav);
  const { data } = menu;
  return (
    <nav className="nav-bar">
      <ul className="border-bottom d-lg-block">
        <li className="dropdown spriteMenu">
          <Link href="/">
            <a href="" onClick={(e) => e.stopPropagation()}>
              <figure>
                <img style={{ height: "36px" }} src={home} alt={"Home"} />
                <figcaption>Home</figcaption>
              </figure>
            </a>
          </Link>
        </li>
        {data.length &&
          data.map((element) => {
            return (
              <li className="dropdown spriteMenu">
                <a
                  href={`${CONFIG.NAV_BASE_URL}/hdfcsmartbuy/category/${element.url}`}
                >
                  <figure>
                    <img src={element.iconUrl} alt={element.name} />
                    <figcaption>{element.name}</figcaption>
                  </figure>
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="Accessories-Dropdown"
                >
                  {element.subMenu.map((dat, i) => {
                    return (
                      <a
                        className="dropdown-item"
                        href={`${CONFIG.NAV_BASE_URL}/hdfcsmartbuy/${element.subMenuHref[i]}`}
                      >
                        {dat}
                      </a>
                    );
                  })}
                </div>
              </li>
            );
          })}
        <li className="dropdown spriteMenu">
          <Link href="/contact">
            <a href="" onClick={(e) => e.stopPropagation()}>
              <figure>
                <img style={{ height: "36px" }} src={contact} alt={"Contact"} />
                <figcaption>Contact</figcaption>
              </figure>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
});
export default Navbar;
