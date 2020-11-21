import styled from 'styled-components';

const NavBar = styled.nav`
  @media (min-width: 750px) {
    padding: 65px 40px;
  }
  @media (min-width: 1200px) {
    padding: 65px 165px;
  }
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  flex-wrap: wrap;
  align-items: center;
`;

const MenuItem = styled.li`
  width: 100%;
  display: none;
  order: 3;
  background-color: #000000;
  text-align: left;
  padding: 10px;
  @media (min-width: 750px) {
    padding: 0 10px;
    text-align: center;
    background-color: #ffffff;
    display: block;
    width: auto;
  }
`;

const LogoItem = styled.li`
  order: 0;
  width: auto;
  display: block;
  background-color: #ffffff;
  margin: 35px 0 35px 24px;
  margin-right: auto;
`;

const Logo = styled.img`
  width: 200px;
  height: 100%;
`;

const ToggleMenuIcons = styled.li`
  order: 1;
  width: auto;
  display: block;
  background-color: #ffffff;
  margin: 35px 24px 35px 0;
  @media (min-width: 750px) {
    display: none;
  }
`;

const MenuLink = styled.a`
  text-decoration: none;
  color: #ffffff;
  @media (min-width: 750px) {
    color: #000000;
  }
`;

const Navigation = () => {
  return (
    <NavBar>
      <Menu>
        <LogoItem>
          <MenuLink href="/">
            <Logo src="/static/assets/shared/desktop/logo-dark.png" />
          </MenuLink>
        </LogoItem>
        <MenuItem>
          <MenuLink href="/company">OUR COMPANY</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="/locations">LOCATIONS</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="/contact">CONTACT</MenuLink>
        </MenuItem>
        <ToggleMenuIcons onClick={() => toggleMenu()}>
          <svg width="24" height="20" xmlns="http://www.w3.org/2000/svg">
            <g fill="#1D1C1E" fill-rule="evenodd">
              <path d="M0 0h24v4H0zM0 8h24v4H0zM0 16h24v4H0z" />
            </g>
          </svg>
        </ToggleMenuIcons>
      </Menu>
    </NavBar>
  );
};

export { NavBar, Menu, MenuItem, Logo, MenuLink, Navigation };
