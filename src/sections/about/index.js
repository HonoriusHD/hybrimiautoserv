import Two_columns_text_assets from "components/two_columns_text_assets";

import { AboutData } from "./about_data";

import aboutImage from "assets/aboutImage.png";

import ImageComponent from "components/image_component";
import aboutShapes from "assets/aboutShapes.png";

import Benefits from "components/benefits";

import style from "./about.module.scss";

function About() {
  return (
    <section
      id="about"
      className={`${style.about} sectionPaddingTop sectionPaddingBottom`}
    >
      <article className="article-content">
        <Two_columns_text_assets
          image={aboutImage}
          title={AboutData.aboutTitle()}
          paragraphs={AboutData.aboutParagraphs()}
          headerType="h2"
          paragraphsColor="secondary_two"
          reverseColumns="reverseColumns"
          textMargin="textMargin"
          paddingBottom100="paddingBottom100"
          objectFit="cover"
          imageSize="sectionSize"
          alt="Aceasta este o ilustratie a unei masini"
          textMarginLeft="textMarginLeft"
        />
        <Benefits headerType="h3" paragraphWidh="80%" />
      </article>
      <div className={style.children}>
        <ImageComponent
          image={aboutShapes}
          objectFit="cover"
          imageSize="aboutShapes"
          alt="Acesta este o actiune de lucru la motor"
        />
      </div>
    </section>
  );
}

export default About;
