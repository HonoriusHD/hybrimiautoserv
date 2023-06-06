import style from "./footer.module.scss";

import sal from "assets/SOL.png";
import sol from "assets/SAL.png";
import { Link } from "react-scroll";

import { AiOutlineInstagram } from "react-icons/ai";
import { RiFacebookCircleLine } from "react-icons/ri";

import { useContext } from "react";
import { ModalContext } from "pages";

import ImageComponent from "components/image_component";

import { FooterData, CreditsData } from "./footer_data";

function Footer() {
  const openSol = () => {
    window.open("https://anpc.ro/ce-este-sal/");
  };
  const openSal = () => {
    window.open(
      "https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO"
    );
  };
  const openDev = () => {
    window.open("https://www.digitalstories.ro");
  };

  const { handleModalVisibility, updateModal } = useContext(ModalContext);

  return (
    <section id="footer" className={`${style.footer}`}>
      <footer>
        <div className={style.footer_logo}>Hybrimi Auto</div>
        <div className={style.footer_info}>
          <div className={style.social_info}>
            <p>Social media</p>
            <div className={style.social_links}>
              <a
                href="https://www.facebook.com/profile.php?id=100091796210663"
                target="_blank"
                rel="noreferrer"
              >
                <RiFacebookCircleLine size="40" />
              </a>
              <a
                href="https://www.instagram.com/hybrimiservice/"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineInstagram size="40" />
              </a>
            </div>
          </div>
          <div className={style.menu_info}>
            <p>Linkuri utile</p>
            <div className={style.footer_text}>
              <div className={style.footer_nav}>
                <li>
                  <Link
                    to="hero"
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
                    activeClass="active"
                    to="about"
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
                    activeClass="active"
                    to="services"
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
                    activeClass="active"
                    to="process"
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
                    activeClass="active"
                    to="contact"
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
            <p
              className={style.footer_text}
              onClick={() => {
                openDev();
              }}
            >
              Digital Stories
            </p>
          </div>
        </div>
        <div className={style.legal}>
          <div className={style.legal_links}>
            <p
              onClick={() =>
                (function () {
                  updateModal(FooterData());
                  handleModalVisibility();
                })()
              }
            >
              Termeni și Condiții
            </p>
            <p
              onClick={() =>
                (function () {
                  updateModal(CreditsData());
                  handleModalVisibility();
                })()
              }
            >
              Credits
            </p>
          </div>
          <div className={style.legal_icons}>
            <div
              className={style.legal_icon}
              onClick={() => {
                openSol();
              }}
            >
              <ImageComponent
                image={sol}
                objectFit="cover"
                imageSize="legalSize"
                alt="reprezinta anpc in format png"
              />
            </div>
            <div
              className={style.legal_icon}
              onClick={() => {
                openSal();
              }}
            >
              <ImageComponent
                image={sal}
                objectFit="cover"
                imageSize="legalSize"
                alt="reprezinta anpc in format png"
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
