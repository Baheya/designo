import styled from 'styled-components';
import { useState } from 'react';
import { peach } from '../utils';

import styles from './Navigation.module.scss';

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
  display: ${(props) => (props.show ? 'block' : 'none')};
  order: 3;
  background-color: #000000;
  text-align: left;
  padding: 10px;
  @media (min-width: 750px) {
    padding: 0 30px;
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
  @media (min-width: 750px) {
    margin: 35px 0 35px 0;
    margin-right: auto;
  }
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
  &:hover {
    color: ${peach.primary};
    text-decoration: underline;
  }
  @media (min-width: 750px) {
    color: #000000;
  }
`;

const MenuButton = styled.button`
  background: none;
  border: 0;
  display: block;
  line-height: 1;
  cursor: pointer;
`;

const Para = styled.p`
  font-size: 24px;
  letter-spacing: 2px;
  margin: 5px;
  @media (min-width: 750px) {
    font-size: 14px;
    margin: 0;
  }
`;

// const Navigation = () => {
//   const [openMenu, setOpenMenu] = useState(false);

//   return (
//     <NavBar>
//       <Menu>
//         <LogoItem>
//           <MenuLink href="/">
//             <Logo src="/static/assets/shared/desktop/logo-dark.png" />
//           </MenuLink>
//         </LogoItem>
//         <MenuItem show={openMenu ? true : false}>
//           <MenuLink href="/company" onClick={() => setOpenMenu(!openMenu)}>
//             <Para>OUR COMPANY</Para>
//           </MenuLink>
//         </MenuItem>
//         <MenuItem show={openMenu ? true : false}>
//           <MenuLink href="/locations" onClick={() => setOpenMenu(!openMenu)}>
//             <Para>LOCATIONS</Para>
//           </MenuLink>
//         </MenuItem>
//         <MenuItem show={openMenu ? true : false}>
//           <MenuLink href="/contact" onClick={() => setOpenMenu(!openMenu)}>
//             <Para>CONTACT</Para>
//           </MenuLink>
//         </MenuItem>
//         <ToggleMenuIcons>
//           <MenuButton onClick={() => setOpenMenu(!openMenu)}>
//             {!openMenu ? (
//               <svg width="24" height="20" xmlns="http://www.w3.org/2000/svg">
//                 <g fill="#1D1C1E" fillRule="evenodd">
//                   <path d="M0 0h24v4H0zM0 8h24v4H0zM0 16h24v4H0z" />
//                 </g>
//               </svg>
//             ) : (
//               <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
//                 <path
//                   d="M17.071.1L19.9 2.93l-7.071 7.07 7.071 7.072-2.828 2.828L10 12.828l-7.071 7.071L.1 17.071 7.17 10 .102 2.929 2.929.1l7.07 7.07 7.072-7.07z"
//                   fill="#1D1C1E"
//                   fillRule="evenodd"
//                 />
//               </svg>
//             )}
//           </MenuButton>
//         </ToggleMenuIcons>
//       </Menu>
//     </NavBar>
//   );
// };

const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className={styles['navbar']}>
      <ul className={styles['menu']}>
        <li className={styles['logo__item']}>
          <a className={styles['menu__link']} href="/">
            <img
              className={styles['logo']}
              src="/static/assets/shared/desktop/logo-dark.png"
            />
          </a>
        </li>
        <li
          className={
            openMenu ? styles['menu__item--visible'] : styles['menu__item']
          }
        >
          <a
            className={styles['menu__link']}
            href="/company"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <p className={styles['para']}>OUR COMPANY</p>
          </a>
        </li>
        <li
          className={
            openMenu ? styles['menu__item--visible'] : styles['menu__item']
          }
        >
          <a
            className={styles['menu__link']}
            href="/locations"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <p className={styles['para']}>LOCATIONS</p>
          </a>
        </li>
        <li
          className={
            openMenu ? styles['menu__item--visible'] : styles['menu__item']
          }
        >
          <a
            className={styles['menu__link']}
            href="/contact"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <p className={styles['para']}>CONTACT</p>
          </a>
        </li>
        <li className={styles['toggle__menu__icons']}>
          <button
            className={styles['menu__button']}
            onClick={() => setOpenMenu(!openMenu)}
          >
            {!openMenu ? (
              <svg width="24" height="20" xmlns="http://www.w3.org/2000/svg">
                <g fill="#1D1C1E" fillRule="evenodd">
                  <path d="M0 0h24v4H0zM0 8h24v4H0zM0 16h24v4H0z" />
                </g>
              </svg>
            ) : (
              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17.071.1L19.9 2.93l-7.071 7.07 7.071 7.072-2.828 2.828L10 12.828l-7.071 7.071L.1 17.071 7.17 10 .102 2.929 2.929.1l7.07 7.07 7.072-7.07z"
                  fill="#1D1C1E"
                  fillRule="evenodd"
                />
              </svg>
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export { NavBar, Menu, MenuItem, Logo, MenuLink, Navigation };
