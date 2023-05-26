import { Link, animateScroll as scroll } from 'react-scroll';
import { useState } from 'react';

import { Sling as Hamburger } from 'hamburger-react';

import styles from './header.module.scss';
import ImageComponent from '../image_component';

import { useContext } from 'react';
import { ModalContext } from 'pages';

import logo from 'assets/Logo_site.png';

const Header = () => {
  const [isOpen, setOpen] = useState('openMenu');

  const { handleModalVisibility } = useContext(ModalContext);

  const toogleMenu = () => {
    let toogled = isOpen == 'openMenu' ? '' : 'openMenu';
    return setOpen(toogled);
  };
  return (
    <header className={styles.header}>
      <article>
        <div className={styles.logo}>
          <Link
            to='hero'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => toogleMenu()}
          >
            <ImageComponent
              image={logo}
              objectFit='cover'
              imageSize='logoSize'
              alt='Acesta este lopo-ul site-ului'
            />
          </Link>
        </div>
        <nav className={styles[isOpen]}>
          <ul>
            <li>
              <Link
                to='hero'
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => toogleMenu()}
              >
                Acasa
              </Link>
            </li>
            <li>
              <Link
                activeClass='active'
                to='about'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => toogleMenu()}
              >
                Despre
              </Link>
            </li>
            <li>
              <Link
                activeClass='active'
                to='services'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => toogleMenu()}
              >
                Servicii
              </Link>
            </li>
            <li>
              <Link
                activeClass='active'
                to='process'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => toogleMenu()}
              >
                Proces
              </Link>
            </li>
            <li>
              <Link
                activeClass='active'
                to='contact'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => toogleMenu()}
              >
                Contact
              </Link>
            </li>
            <li
              className={styles.ue_project}
              onClick={() => handleModalVisibility()}
            >
              Proiect UE
            </li>
          </ul>
        </nav>
        <div className={styles.hamburger_menu}>
          <Hamburger
            // toggled={isOpen}
            toggle={() => toogleMenu()}
            size={29}
            color='white'
            label='Show menu'
            hideOutline={false}
          />
        </div>
      </article>
    </header>
  );
};

export default Header;
