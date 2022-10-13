import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";
import * as Styled from "./NavbarStyles";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Styled.Nav>
          <Styled.NavbarContainer>
            <Styled.NavLogo to="/">
              <Styled.NavIcon />
              ULTRA
            </Styled.NavLogo>
            <Styled.MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </Styled.MobileIcon>

            <Styled.NavMenu onClick={handleClick} click={click}>
              <Styled.NavItem>
                <Styled.NavLink to="/">Home</Styled.NavLink>
              </Styled.NavItem>

              <Styled.NavItem>
                <Styled.NavLink to="/services">Services</Styled.NavLink>
              </Styled.NavItem>

              <Styled.NavItem>
                <Styled.NavLink to="/products">Products</Styled.NavLink>
              </Styled.NavItem>
              <Styled.NavItemBtn>
                {button ? (
                  <Styled.NavBtnLink to="/sign-up">
                    <Button primary>SIGN UP</Button>
                  </Styled.NavBtnLink>
                ) : (
                  <Styled.NavBtnLink to="/sign-up">
                    <Button fontBig primary>
                      SIGN UP
                    </Button>
                  </Styled.NavBtnLink>
                )}
              </Styled.NavItemBtn>
            </Styled.NavMenu>
          </Styled.NavbarContainer>
        </Styled.Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
