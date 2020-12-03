import { useState } from 'react';
import Link from 'next/link';

import styles from './Navigation.module.scss';

const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className={styles['navbar']}>
      <ul className={styles['menu']}>
        <li className={styles['logo__item']}>
          <Link href="/">
            <a className={styles['menu__link']}>
              <img
                className={styles['logo']}
                src="/static/assets/shared/desktop/logo-dark.png"
              />
            </a>
          </Link>
        </li>
        <li
          className={
            openMenu ? styles['menu__item--visible'] : styles['menu__item']
          }
        >
          <Link href="/about">
            <a
              className={styles['menu__link']}
              onClick={() => setOpenMenu(!openMenu)}
            >
              <p className={styles['para']}>OUR COMPANY</p>
            </a>
          </Link>
        </li>
        <li
          className={
            openMenu ? styles['menu__item--visible'] : styles['menu__item']
          }
        >
          <Link href="/locations">
            <a
              className={styles['menu__link']}
              onClick={() => setOpenMenu(!openMenu)}
            >
              <p className={styles['para']}>LOCATIONS</p>
            </a>
          </Link>
        </li>
        <li
          className={
            openMenu ? styles['menu__item--visible'] : styles['menu__item']
          }
        >
          <Link href="/contact">
            <a
              className={styles['menu__link']}
              onClick={() => setOpenMenu(!openMenu)}
            >
              <p className={styles['para']}>CONTACT</p>
            </a>
          </Link>
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

export { Navigation };
