import electricImage from "assets/electricImage.jpg";
import hybridImage from "assets/hybridImage.jpg";
import fuelImage from "assets/fuelImage.jpg";

export const HeroData = {
  heroTitle: function () {
    return (
      <>
        Lorem ipsum es machile de{" "}
        <span style={{ color: "red" }}>adepe los</span> perrron
      </>
    );
  },
  heroParagraphs: function () {
    return (
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley.
      </p>
    );
  },
  companyExpertiseTitle: function () {
    return (
      <>
        Expertiza pentru
        <span style={{ color: "red" }}> 3 tipuri</span> de monitorizari
      </>
    );
  },
  companyExpertiseParagraphs: function () {
    return (
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </p>
    );
  },
  expertiseImages: [
    { id: 1, title: "Masini electrice", carImage: electricImage },
    { id: 2, title: "Masini hybrid", carImage: hybridImage },
    { id: 3, title: "Masini pe benzina/diesel", carImage: fuelImage },
  ],
};
