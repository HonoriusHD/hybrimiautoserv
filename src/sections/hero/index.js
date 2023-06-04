import styles from "./hero.module.scss";

import Two_columns_text_assets from "components/two_columns_text_assets";
import Contacts from "components/contacts";
import TitleText from "components/title_text";
import TitleImage from "components/title_image";
import ImageComponent from "components/image_component";

import { HeroData } from "./hero_data";
import heroImage from "assets/heroImg.jpg";
import heroLinesShape from "assets/heroLinesShape.png";

function Hero() {
  return (
    <section id="hero" className={`${styles.hero} sectionPaddingBottom`}>
      <article className={`${styles.introduction_data} article-content-hero`}>
        <Two_columns_text_assets
          image={heroImage}
          title={HeroData.heroTitle()}
          paragraphs={HeroData.heroParagraphs()}
          headerType="h1"
          paddingBottom100="paddingBottom100"
          objectFit="cover"
          imageSize="heroSize"
          alt="Aceasta este o ilustratie a unei masini"
        />
      </article>
      <article className={`${styles.company_expertise} article-content`}>
        <Contacts />
        <TitleText
          title={HeroData.companyExpertiseTitle()}
          paragraphs={HeroData.companyExpertiseParagraphs()}
          headerType="h2"
          customWidth="expertizaWidth"
        />
        <div className={styles.company_expertise_areas}>
          {HeroData.expertiseImages.map((data) => {
            return (
              <TitleImage
                title={data.title}
                image={data.carImage}
                headerType="h4"
                key={data.id}
                objectFit="cover"
                imageSize="smallCardSize"
                alt="Aceasta este o ilustratie a unei masini"
              />
            );
          })}
        </div>
      </article>
      <div className={styles.children}>
        <ImageComponent
          image={heroLinesShape}
          objectFit="cover"
          imageSize="heroShapes"
          alt="Acesta este lopo-ul site-ului"
        />
      </div>
    </section>
  );
}

export default Hero;
