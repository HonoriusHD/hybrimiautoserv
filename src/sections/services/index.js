import style from "./services.module.scss";

import TitleText from "components/title_text";
import CardTextOverImage from "components/card_text_over-Image";
import { serviceTitle, serviceParagraphs } from "./services_data";
import QuoteOverImage from "components/quote_over_imgage";

import { ServicesData } from "./services_data";

function Services() {
  const quote =
    "“ Nu lăsa pe mâine ce poți repara astăzi, s-ar putea să te coste mai mult. ”";
  const author = "Echipa Hybrimi Auto";

  return (
    <section
      id="services"
      className={`${style.services} sectionPaddingBottom sectionPaddingTop`}
    >
      <article className="article-content">
        <TitleText
          title={serviceTitle()}
          paragraphs={serviceParagraphs()}
          headerType="h2"
          customWidth="customWidth"
        />
        <div className={style.cards}>
          {ServicesData.map((data) => {
            return (
              <div key={data.id}>
                <CardTextOverImage
                  key={data.id}
                  image={data.serviceImage}
                  text={data.serviceName}
                  alt="Acestea reprezinta poza reprezentativa pentru un serviciu auto"
                  headerType="h5"
                />
              </div>
            );
          })}
        </div>
      </article>
      <article className="article-content">
        <QuoteOverImage
          quote={quote}
          author={author}
          imageSize="fullStretch"
          objectFit="cover"
        />
      </article>
    </section>
  );
}

export default Services;
