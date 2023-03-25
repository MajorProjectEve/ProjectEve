import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">ProjectEve</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavBtn>
              <NavBtnLink to="/breastcancer">Breast Cancer</NavBtnLink>
            </NavBtn>
            <NavBtn>
              <NavBtnLink to="/cervicalcancer">Cervical Cancer</NavBtnLink>
            </NavBtn>
            <NavItem>
              <NavLinks to="Others">Others</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup">Sign Up</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/profilepage">Profile</NavBtnLink>
          </NavBtn>
          <NavBtn>
            <NavBtnLink to="/signin"> Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
