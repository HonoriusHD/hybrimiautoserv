import style from './footer.module.scss';

import sal from 'assets/SOL.png';
import sol from 'assets/SAL.png';
import { Link } from 'react-scroll';

import ImageComponent from 'components/image_component';

function Footer() {
  return (
    <section id='services' className={`${style.footer}`}>
      <footer>
        <div className={style.footer_logo}>Hybrimi Auto</div>
        <div className={style.footer_info}>
          <div className={style.social_info}>
            <p>Social media</p>
            <p className={style.footer_text}>Instagram</p>
          </div>
          <div className={style.menu_info}>
            <p>Linkuri utile</p>
            <div className={style.footer_text}>
              <div className={style.footer_nav}>
                <li>
                  <Link
                    to='hero'
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
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
                    offset={-220}
                    duration={500}
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
                  >
                    Contact
                  </Link>
                </li>
              </div>
            </div>
          </div>
          <div className={style.developer_info}>
            <p>Realizat de</p>
            <p className={style.footer_text}>Digital Stories</p>
          </div>
        </div>
        <div className={style.legal}>
          <div className={style.legal_links}>
            <p>Termeni</p>
            <p>Conditii</p>
            <p>Credits</p>
          </div>
          <div className={style.legal_icons}>
            <div className={style.legal_icon}>
              <ImageComponent
                image={sol}
                objectFit='cover'
                imageSize='legalSize'
                alt='reprezinta anpc in format png'
              />
            </div>
            <div className={style.legal_icon}>
              <ImageComponent
                image={sal}
                objectFit='cover'
                imageSize='legalSize'
                alt='reprezinta anpc in format png'
              />
            </div>
          </div>
        </div>
      </footer>
      <div className={style.copyright}>
        <p>©Toate drepturile rezervate - HYBRIMIAUTOSERV 2023</p>
      </div>
    </section>
  );
}

export default Footer;
